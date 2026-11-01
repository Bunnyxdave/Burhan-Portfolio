import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Eyebrow from '../components/Eyebrow.jsx';
import Reveal from '../components/Reveal.jsx';
import ContributionGraph from '../components/ContributionGraph.jsx';
import RepositoryCard, { RefreshButton, RepositoryLoading, RepositorySearch } from '../components/RepositoryCard.jsx';
import { fetchContributions, fetchRepositories } from '../services/github.js';

const initialState = { data: [], loading: true, error: '' };

export default function MyWork() {
  const [repositoryRefreshKey, setRepositoryRefreshKey] = useState(0);
  const [contributionRefreshKey, setContributionRefreshKey] = useState(0);
  const [repositories, setRepositories] = useState(initialState);
  const [contributions, setContributions] = useState(initialState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setRepositories(initialState);
    fetchRepositories(controller.signal)
      .then((data) => setRepositories({ data, loading: false, error: '' }))
      .catch((error) => { if (error.name !== 'AbortError') setRepositories({ data: [], loading: false, error: error.message }); });
    return () => controller.abort();
  }, [repositoryRefreshKey]);

  useEffect(() => {
    const controller = new AbortController();
    setContributions((current) => contributionRefreshKey === 0
      ? initialState
      : { ...current, loading: true, error: '' });
    fetchContributions(controller.signal, { forceFresh: contributionRefreshKey > 0 })
      .then((data) => setContributions({ data, loading: false, error: '' }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setContributions((current) => ({ ...current, loading: false, error: error.message }));
        }
      });
    return () => controller.abort();
  }, [contributionRefreshKey]);

  const filteredRepositories = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return repositories.data;
    return repositories.data.filter((repository) => [repository.name, repository.description, repository.language, ...(repository.topics || [])].filter(Boolean).join(' ').toLowerCase().includes(search));
  }, [query, repositories.data]);

  const refreshRepositories = () => setRepositoryRefreshKey((key) => key + 1);
  const refreshContributions = () => setContributionRefreshKey((key) => key + 1);

  return <main className="inner-page page-wrap my-work-page">
    <section className="inner-hero my-work-hero"><Reveal><Eyebrow>LIVE FROM GITHUB</Eyebrow><h1>My work,<br /><span>in motion.</span></h1><p className="hero-intro">Every public repository, plus a daily snapshot of the things I’ve been building and learning.</p><a className="button button-dark github-profile-link" href="https://github.com/Bunnyxdave" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile <ArrowUpRight size={16} /></a></Reveal><Reveal className="my-work-total" delay={120}><span>{repositories.loading ? '…' : repositories.error ? '—' : String(repositories.data.length).padStart(2, '0')}</span><p>public<br />repositories</p></Reveal></section>

    <section className="my-work-activity">
      {contributions.loading && contributions.data.length === 0 && <div className="contribution-panel loading-panel"><div className="loading-line" /><div className="loading-calendar" /><p>Loading contribution activity…</p></div>}
      {contributions.error && contributions.data.length === 0 && <div className="api-message"><div><Eyebrow>ACTIVITY TEMPORARILY UNAVAILABLE</Eyebrow><p>{contributions.error}</p></div><RefreshButton onClick={refreshContributions} busy={contributions.loading} label="Try again with a fresh snapshot" /></div>}
      {!contributions.loading && !contributions.error && contributions.data.length === 0 && <ContributionGraph contributions={[]} onRefresh={refreshContributions} refreshing={false} />}
      {contributions.data.length > 0 && <ContributionGraph contributions={contributions.data} onRefresh={refreshContributions} refreshing={contributions.loading} refreshError={contributions.error} />}
    </section>

    <section className="repositories-section">
      <div className="repository-section-heading"><div><Eyebrow>THE REPOSITORIES</Eyebrow><h2>Things I’ve <span>put out there.</span></h2><p>Loaded directly from the public GitHub API. Search across names, descriptions, languages, and topics.</p></div><RefreshButton onClick={refreshRepositories} busy={repositories.loading} label="Refresh repositories" /></div>
      <div className="repository-toolbar"><RepositorySearch value={query} onChange={setQuery} /><span>{repositories.loading ? 'Loading…' : repositories.error ? 'Could not load repositories' : `${filteredRepositories.length} of ${repositories.data.length} repositories`}</span></div>
      {repositories.loading && <div className="repository-grid">{[0, 1, 2, 3, 4, 5].map((item) => <RepositoryLoading key={item} />)}</div>}
      {!repositories.loading && repositories.error && <div className="api-message"><div><Eyebrow>REPOSITORIES TEMPORARILY UNAVAILABLE</Eyebrow><p>{repositories.error}</p></div><RefreshButton onClick={refreshRepositories} busy={false} label="Retry repository load" /></div>}
      {!repositories.loading && !repositories.error && filteredRepositories.length === 0 && <div className="empty-repositories"><h3>No repositories match that search.</h3><button type="button" className="text-link" onClick={() => setQuery('')}>Clear search</button></div>}
      {!repositories.loading && !repositories.error && filteredRepositories.length > 0 && <div className="repository-grid">{filteredRepositories.map((repository) => <RepositoryCard key={repository.id} repository={repository} />)}</div>}
      <p className="github-api-note">Repository details are fetched directly from GitHub and update as your public repositories change. <a href="https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user" target="_blank" rel="noreferrer">About the API <ArrowUpRight size={13} /></a></p>
    </section>
  </main>;
}
