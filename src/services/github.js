const githubUser = 'Bunnyxdave';
const githubApi = 'https://api.github.com';
const contributionsApi = 'https://github-contributions-api.jogruber.de/v4';

async function requestJson(url, signal, { forceFresh = false } = {}) {
  const headers = { Accept: 'application/vnd.github+json' };
  if (forceFresh) headers['Cache-Control'] = 'no-cache';

  const response = await fetch(url, {
    signal,
    headers,
    cache: forceFresh ? 'no-store' : 'default',
  });
  if (!response.ok) {
    if (response.status === 403) throw new Error('GitHub is rate-limiting requests right now. Please try again shortly.');
    throw new Error(`GitHub request failed (${response.status}). Please try again.`);
  }
  return response.json();
}

export async function fetchRepositories(signal) {
  const allRepositories = [];
  let page = 1;
  while (true) {
    const repositories = await requestJson(
      `${githubApi}/users/${githubUser}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
      signal,
    );
    allRepositories.push(...repositories);
    if (repositories.length < 100) break;
    page += 1;
  }
  return allRepositories;
}

export async function fetchContributions(signal, { forceFresh = false } = {}) {
  const response = await requestJson(`${contributionsApi}/${githubUser}?y=last`, signal, { forceFresh });
  if (!Array.isArray(response.contributions)) {
    throw new Error('Contribution data is temporarily unavailable. Please try again later.');
  }
  return response.contributions;
}
