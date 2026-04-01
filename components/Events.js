const events = [
  {
    day: '14',
    month: 'MAY',
    title: 'City Champs Football League',
    desc: 'A 5-a-side football tournament for all ages. Competitive and fun! Open to individuals and teams.',
    location: 'Kore Sports Complex',
    time: 'Saturday, 9:00 AM',
  },
  {
    day: '06',
    month: 'JUN',
    title: 'Summer Cricket Cup',
    desc: 'Mixed team 20-over cricket league, open to amateurs and pros alike.',
    location: 'Colombo Club Grounds',
    time: 'Sunday, 8:00 AM',
  },
  {
    day: '15',
    month: 'JUN',
    title: 'Youth Tennis Camp',
    desc: 'Week-long intensive junior camp with top tennis coaches. Ages 8-16 welcome.',
    location: 'SL Tennis Association Courts',
    time: 'Mon-Fri, 9 AM - 4 PM',
  },
  {
    day: '21',
    month: 'MAY',
    title: "Women's Wellness Morning",
    desc: 'Yoga, Zumba & nutrition workshop exclusively for women. All fitness levels.',
    location: 'Kore Event Hall',
    time: 'Saturday, 7:00 AM',
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events-header reveal">
          <span className="section-label">What&apos;s Happening</span>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            From competitive tournaments to fun fitness challenges, there&apos;s
            always something happening at Kore. Join the action!
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card reveal" key={index}>
              <div className="event-date">
                <div className="event-day">{event.day}</div>
                <div className="event-month">{event.month}</div>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
                <div className="event-meta">
                  <span>📍 {event.location}</span>
                  <span>🕐 {event.time}</span>
                </div>
                <a href="#register" className="event-register">
                  Register Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
