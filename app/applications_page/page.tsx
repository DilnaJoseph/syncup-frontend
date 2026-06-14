"use client";

const applications = [
  { project: "A mobile- first app to discover and RSVP for events happening around NITC Campus", role: "backend", date: "May 12", status: "pending" },
  { project: "Face recognition based attendance system using raspberry pi camera", role: "frontend", date: "May 13", status: "accepted" },
  { project: "A mobile- first app to discover and RSVP for events happening around NITC Campus", role: "ML", date: "May 12", status: "rejected" },
  { project: "Face recognition based attendance system using raspberry pi camera", role: "backend", date: "May 12", status: "pending" },
];

const statusStyles: Record<string, { color: string; border: string }> = {
  pending: { color: "#E3C500", border: "#60541D" },
  accepted: { color: "#9ACF9F", border: "#3C5845" },
  rejected: { color: "#F09595", border: "#5A2222" },
};

const roleBorderColors: Record<string, string> = {
  backend: "#6278DA",
  frontend: "#6278DA",
  ML: "#6278DA",
};

export default function MyApplicationsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/maghfirea');
        @import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

        .ap-page {
          background: #000;
          min-height: 100vh;
          padding: 40px 48px 80px;
          color: #fff;
        }
        .ap-title {
          font-family: 'Maghfirea', serif;
          font-size: 64px;
          font-weight: 400;
          line-height: 100%;
          margin-bottom: 40px;
        }
        .ap-filter-row {
          display: flex;
          gap: 14px;
          margin-bottom: 30px;
        }
        .ap-filter-btn {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
          color: #fff;
          background: #7D88B733;
          border: 2px solid #A2A6B6;
          border-radius: 10px;
          padding: 7px 18px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ap-filter-btn:hover { background: #7D88B760; }
        .ap-filter-btn.active { background: #7D88B780; }
        .ap-table-header {
          display: flex;
          align-items: center;
          background: #2A3F73CC;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          padding: 12px 32px;
          font-family: 'Actor', sans-serif;
          font-size: 24px;
          margin-bottom: 6px;
        }
        .ap-col-project { flex: 2.6; }
        .ap-col-role { flex: 1.2; }
        .ap-col-date { flex: 0.8; }
        .ap-col-status { flex: 1; }
        .ap-row {
          display: flex;
          align-items: center;
          padding: 24px 32px;
        }
        .ap-divider {
          border: none;
          border-top: 0.5px solid #FFFFFF;
        }
        .ap-project-text {
          font-family: 'Actor', sans-serif;
          font-size: 18px;
          line-height: 1.3;
          padding-right: 24px;
        }
        .ap-role-pill {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
          color: #fff;
          background: #7D88B733;
          border-radius: 20px;
          padding: 6px 22px;
          display: inline-block;
        }
        .ap-date {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
        }
        .ap-status-pill {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
          background: #D9D9D917;
          border-radius: 10px;
          padding: 6px 22px;
          display: inline-block;
        }
      `}</style>

      <div className="ap-page">
        <div className="ap-title">My applications</div>

        <div className="ap-filter-row">
          <div className="ap-filter-btn active">all (6)</div>
          <div className="ap-filter-btn">pending (3)</div>
          <div className="ap-filter-btn">accepted (2)</div>
          <div className="ap-filter-btn">rejected (2)</div>
        </div>

        <div className="ap-table-header">
          <div className="ap-col-project">project</div>
          <div className="ap-col-role">role applied</div>
          <div className="ap-col-date">date</div>
          <div className="ap-col-status">status</div>
        </div>

        {applications.map((a, i) => (
          <div key={i}>
            <div className="ap-row">
              <div className="ap-col-project ap-project-text">{a.project}</div>
              <div className="ap-col-role">
                <span className="ap-role-pill" style={{ border: `2px solid ${roleBorderColors[a.role] ?? "#6278DA"}` }}>
                  {a.role}
                </span>
              </div>
              <div className="ap-col-date ap-date">{a.date}</div>
              <div className="ap-col-status">
                <span
                  className="ap-status-pill"
                  style={{ color: statusStyles[a.status].color, border: `2px solid ${statusStyles[a.status].border}` }}
                >
                  {a.status}
                </span>
              </div>
            </div>
            {i < applications.length - 1 && <hr className="ap-divider" />}
          </div>
        ))}
      </div>
    </>
  );
}
