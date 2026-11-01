import { useMemo } from 'react';
import { RefreshCw } from 'lucide-react';

function makeWeeks(contributions) {
  if (!contributions.length) return [];
  const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
  const mondayOffset = (firstDate.getUTCDay() + 6) % 7;
  const grid = [...Array(mondayOffset).fill(null), ...contributions];
  while (grid.length % 7) grid.push(null);
  return Array.from({ length: grid.length / 7 }, (_, index) => grid.slice(index * 7, index * 7 + 7));
}

function getMonthLabels(weeks) {
  let previousMonth = '';
  return weeks.map((week) => {
    const firstDay = week.find(Boolean);
    const month = firstDay?.date.slice(0, 7) ?? '';
    const label = month && month !== previousMonth
      ? new Date(`${firstDay.date}T00:00:00Z`).toLocaleString(undefined, { month: 'short', timeZone: 'UTC' })
      : '';
    previousMonth = month;
    return label;
  });
}

export default function ContributionGraph({ contributions, onRefresh, refreshing = false, refreshError = '' }) {
  const weeks = useMemo(() => makeWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);
  const total = useMemo(() => contributions.reduce((sum, day) => sum + day.count, 0), [contributions]);

  return <section className="contribution-panel" aria-labelledby="contribution-title">
    <div className="contribution-heading">
      <div><p className="eyebrow">DAILY ACTIVITY</p><h2 id="contribution-title">Contribution graph</h2></div>
      <div className="contribution-heading-actions">
        <div className="contribution-total"><strong>{total.toLocaleString()}</strong><span>contributions · last year</span></div>
        <button className="button refresh-button contribution-refresh" type="button" onClick={onRefresh} disabled={refreshing}>
          <RefreshCw size={15} className={refreshing ? 'spin' : ''} />
          {refreshing ? 'Refreshing…' : 'Refresh contributions'}
        </button>
      </div>
    </div>
    <div className="contribution-scroll">
      <div className="contribution-day-labels" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
      <div className="contribution-calendar">
        <div className="contribution-months" aria-hidden="true">{monthLabels.map((label, weekIndex) => <span key={weekIndex}>{label}</span>)}</div>
        <div className="contribution-weeks" role="img" aria-label={`${total} GitHub contributions over the last year`}>
          {weeks.map((week, weekIndex) => <div className="contribution-week" key={weekIndex}>
            {week.map((day, dayIndex) => day
              ? <span className={`contribution-day level-${day.level}`} key={day.date} title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`} />
              : <span className="contribution-day empty" key={`empty-${weekIndex}-${dayIndex}`} />)}
          </div>)}
        </div>
      </div>
    </div>
    <div className="contribution-legend"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <i className={`contribution-day level-${level}`} key={level} />)}<span>More</span><a href="https://github.com/Bunnyxdave" target="_blank" rel="noreferrer">View GitHub profile ↗</a></div>
    {refreshError && <p className="contribution-refresh-error" role="status">Couldn’t refresh the contribution data: {refreshError}</p>}
    <p className="contribution-note">The contribution service can cache activity for an hour. Refresh contributions requests an uncached snapshot.</p>
  </section>;
}

