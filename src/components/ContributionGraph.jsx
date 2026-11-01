import { useMemo } from 'react';

function makeWeeks(contributions) {
  if (!contributions.length) return [];
  const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
  const mondayOffset = (firstDate.getUTCDay() + 6) % 7;
  const grid = [...Array(mondayOffset).fill(null), ...contributions];
  while (grid.length % 7) grid.push(null);
  return Array.from({ length: grid.length / 7 }, (_, index) => grid.slice(index * 7, index * 7 + 7));
}

export default function ContributionGraph({ contributions }) {
  const weeks = useMemo(() => makeWeeks(contributions), [contributions]);
  const total = useMemo(() => contributions.reduce((sum, day) => sum + day.count, 0), [contributions]);

  return <section className="contribution-panel" aria-labelledby="contribution-title">
    <div className="contribution-heading">
      <div><p className="eyebrow">DAILY ACTIVITY</p><h2 id="contribution-title">Contribution graph</h2></div>
      <div className="contribution-total"><strong>{total.toLocaleString()}</strong><span>contributions · last year</span></div>
    </div>
    <div className="contribution-scroll">
      <div className="contribution-day-labels" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
      <div className="contribution-calendar">
        <div className="contribution-months" aria-hidden="true">{weeks.map((week, weekIndex) => {
          const monthStart = week.find((day) => day && Number(day.date.slice(-2)) <= 7);
          const label = monthStart ? new Date(`${monthStart.date}T00:00:00Z`).toLocaleString(undefined, { month: 'short', timeZone: 'UTC' }) : '';
          return <span key={weekIndex}>{label}</span>;
        })}</div>
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
    <p className="contribution-note">Daily activity loads from the public GitHub profile and may be cached for about an hour.</p>
  </section>;
}
