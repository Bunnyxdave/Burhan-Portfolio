import {
  ArrowUpRight,
  GitFork,
  Globe2,
  RefreshCw,
  Search,
  Star,
} from "lucide-react";

function formatDate(value) {
  if (!value) return "Date unavailable";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function RepositoryCard({ repository }) {
  return (
    <article className="repository-card">
      <div className="repository-card-top">
        <span className="repository-language">
          {repository.language || "Mixed / not specified"}
        </span>
        <span className="repository-visibility">
          {repository.visibility || (repository.private ? "Private" : "Public")}
        </span>
      </div>
      <a
        className="repository-title"
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {repository.name}
        <ArrowUpRight size={17} />
      </a>
      <p className="repository-description">
        {repository.description || "No description provided yet."}
      </p>
      {repository.topics?.length > 0 && (
        <div className="repository-topics">
          {repository.topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      )}
      <div className="repository-stats">
        <span>
          <Star size={14} /> {repository.stargazers_count}
        </span>
        <span>
          <GitFork size={14} /> {repository.forks_count}
        </span>
        <span>
          Updated {formatDate(repository.pushed_at || repository.updated_at)}
        </span>
      </div>
      <div className="repository-links">
        <a href={repository.html_url} target="_blank" rel="noreferrer">
          Source code <ArrowUpRight size={14} />
        </a>
        {repository.homepage && (
          <a
            href={
              repository.homepage.startsWith("http")
                ? repository.homepage
                : `https://${repository.homepage}`
            }
            target="_blank"
            rel="noreferrer"
          >
            <Globe2 size={14} /> Live site
          </a>
        )}
      </div>
    </article>
  );
}

export function RepositoryLoading() {
  return (
    <article
      className="repository-card repository-skeleton"
      aria-label="Loading repository"
    >
      <span />
      <span />
      <span />
    </article>
  );
}

export function RepositorySearch({ value, onChange }) {
  return (
    <label className="repository-search">
      <Search size={17} />
      <span className="visually-hidden">Search repositories</span>
      <input
        type="search"
        placeholder="Search repositories or languages…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function RefreshButton({
  onClick,
  busy,
  label = "Refresh GitHub data",
}) {
  return (
    <button
      className="button refresh-button"
      type="button"
      onClick={onClick}
      disabled={busy}
      aria-label={label}
    >
      <RefreshCw size={15} className={busy ? "spin" : ""} /> {label}
    </button>
  );
}
