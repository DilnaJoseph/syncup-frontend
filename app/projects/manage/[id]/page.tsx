"use client";
import { useRouter } from "next/navigation";

const applicants = [
  { name: "Priya S", role: "frontend", date: "May 12" },
  { name: "Priya S", role: "frontend", date: "May 12" },
  { name: "Priya S", role: "frontend", date: "May 12" },
  { name: "Priya S", role: "frontend", date: "May 12" },
];
const team = [
  { name: "Arjun P", role: "backend" },
  { name: "Iena", role: "UI/UX" },
];
const openRoles = [
  { role: "frontend", spots: "1 spot" },
  { role: "ML", spots: "2 spots" },
];

export default function ManageProjectPage() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/maghfirea');
        @import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

        .mg-page {
          background: #000;
          min-height: 100vh;
          padding: 40px 48px 80px;
          color: #fff;
        }
        .mg-header-row {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 22px;
        }
        .mg-back-circle {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #909DD4;
          border: 1px solid #08183F;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .mg-back-circle:hover { background: #b0bce8; }
        .mg-back-arrow {
          width: 14px; height: 14px;
          border-left: 3px solid #08183F;
          border-bottom: 3px solid #08183F;
          transform: rotate(45deg);
          margin-left: 4px;
        }
        .mg-title {
          font-family: 'Maghfirea', serif;
          font-size: 64px;
          font-weight: 400;
          line-height: 100%;
        }
        .mg-divider {
          border: none;
          border-top: 1px solid #FFFFFF99;
          margin: 26px 0 30px;
        }
        .mg-project-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 22px;
        }
        .mg-project-name {
          font-family: 'Actor', sans-serif;
          font-size: 30px;
          font-weight: 400;
        }
        .mg-tag {
          font-family: 'Actor', sans-serif;
          font-size: 18px;
          color: #3C5845;
          background: #9ACF9F;
          border: 1px solid #3C5845;
          border-radius: 10px;
          padding: 5px 16px;
        }
        .mg-action-row {
          display: flex;
          gap: 20px;
          margin-bottom: 36px;
        }
        .mg-action-btn {
          font-family: 'Actor', sans-serif;
          font-size: 18px;
          color: #fff;
          background: #7D88B733;
          border-radius: 20px;
          padding: 9px 26px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mg-action-btn:hover { background: #7D88B760; }
        .mg-edit { border: 2px solid #6278DA; }
        .mg-close { border: 2px solid #13267C; }
        .mg-delete { border: 2px solid #801F1F; }
        .mg-stats-row {
          display: flex;
          gap: 26px;
          margin-bottom: 40px;
        }
        .mg-stat-card {
          background: #24408080;
          border: 1px solid #fff;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          width: 207px;
          height: 111px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mg-stat-label {
          font-family: 'Maghfirea', serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 100%;
        }
        .mg-stat-value {
          font-family: 'Maghfirea', serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 100%;
          align-self: flex-end;
        }
        .mg-section-title {
          font-family: 'Actor', sans-serif;
          font-size: 30px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .mg-filter-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .mg-filter-btn {
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
        .mg-filter-btn:hover { background: #7D88B760; }
        .mg-filter-btn.active { background: #7D88B780; }
        .mg-table-header {
          display: flex;
          align-items: center;
          background: #2A3F73CC;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          padding: 10px 24px;
          font-family: 'Actor', sans-serif;
          font-size: 24px;
          margin-bottom: 6px;
        }
        .mg-col-applicant { flex: 1.6; }
        .mg-col-role { flex: 1.6; }
        .mg-col-date { flex: 1; }
        .mg-col-action { flex: 1.4; }
        .mg-applicant-row {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          gap: 0;
        }
        .mg-avatar {
          width: 43px; height: 43px;
          border-radius: 50%;
          background: #555;
          border: 0.5px solid #000;
          margin-right: 14px;
        }
        .mg-name {
          font-family: 'Actor', sans-serif;
          font-size: 20px;
        }
        .mg-role-pill {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
          color: #fff;
          background: #7D88B733;
          border: 2px solid #6278DA;
          border-radius: 20px;
          padding: 6px 22px;
          display: inline-block;
        }
        .mg-date {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
        }
        .mg-action-pills { display: flex; gap: 12px; }
        .mg-accept-btn, .mg-reject-btn {
          font-family: 'Actor', sans-serif;
          font-size: 11px;
          border-radius: 10px;
          padding: 8px 18px;
          background: #D9D9D917;
          border: 1px solid;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mg-accept-btn { color: #3C5845; border-color: #3C5845; }
        .mg-accept-btn:hover { background: #3C584530; }
        .mg-reject-btn { color: #5A2222; border-color: #5A2222; }
        .mg-reject-btn:hover { background: #5A222230; }
        .mg-bottom-row {
          display: flex;
          gap: 40px;
          margin-top: 50px;
          align-items: flex-start;
        }
        .mg-bottom-col { flex: 1; }
        .mg-team-table-header {
          display: flex;
          align-items: center;
          background: #2A3F73CC;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          padding: 10px 24px;
          font-family: 'Actor', sans-serif;
          font-size: 24px;
          margin-bottom: 6px;
          gap: 0;
        }
        .mg-team-row {
          display: flex;
          align-items: center;
          padding: 12px 0;
        }
        .mg-team-name { flex: 1.4; font-family: 'Actor', sans-serif; font-size: 17px; display: flex; align-items: center; }
        .mg-team-role-wrap { flex: 1.4; }
        .mg-remove-btn {
          font-family: 'Actor', sans-serif;
          font-size: 11px;
          color: #5A2222;
          background: #D9D9D917;
          border: 1px solid #5A2222;
          border-radius: 10px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mg-remove-btn:hover { background: #5A222230; }
        .mg-roles-box, .mg-info-box {
          border: 1px solid #fff;
          border-radius: 20px;
          padding: 22px 26px;
        }
        .mg-open-role-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mg-open-role-row:last-child { margin-bottom: 0; }
        .mg-spots {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
        }
        .mg-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mg-info-row:last-child { margin-bottom: 0; }
        .mg-info-label {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
        }
        .mg-info-value {
          font-family: 'Actor', sans-serif;
          font-size: 17px;
        }
      `}</style>

      <div className="mg-page">
        <div className="mg-header-row">
          <div className="mg-back-circle" onClick={() => router.push("/projects")}>
            <div className="mg-back-arrow" />
          </div>
          <div className="mg-title">My Projects</div>
        </div>

        <hr className="mg-divider" />

        <div className="mg-project-header">
          <div className="mg-project-name">Campus event app</div>
          <div className="mg-tag">club project</div>
        </div>

        <div className="mg-action-row">
          <div className="mg-action-btn mg-edit">edit project</div>
          <div className="mg-action-btn mg-close">close applications</div>
          <div className="mg-action-btn mg-delete">delete project</div>
        </div>

        <div className="mg-stats-row">
          <div className="mg-stat-card">
            <div className="mg-stat-label">total applicants</div>
            <div className="mg-stat-value">4</div>
          </div>
          <div className="mg-stat-card">
            <div className="mg-stat-label">pending review</div>
            <div className="mg-stat-value">2</div>
          </div>
          <div className="mg-stat-card">
            <div className="mg-stat-label">team members</div>
            <div className="mg-stat-value">3</div>
          </div>
          <div className="mg-stat-card">
            <div className="mg-stat-label">spots remaining</div>
            <div className="mg-stat-value">2</div>
          </div>
        </div>

        <hr className="mg-divider" />

        <div className="mg-section-title">applicants</div>

        <div className="mg-filter-row">
          <div className="mg-filter-btn active">all (6)</div>
          <div className="mg-filter-btn">pending (3)</div>
          <div className="mg-filter-btn">accepted (2)</div>
          <div className="mg-filter-btn">rejected (2)</div>
        </div>

        <div className="mg-table-header">
          <div className="mg-col-applicant">applicant</div>
          <div className="mg-col-role">role applied</div>
          <div className="mg-col-date">date</div>
          <div className="mg-col-action">action</div>
        </div>

        {applicants.map((a, i) => (
          <div key={i} className="mg-applicant-row">
            <div className="mg-col-applicant" style={{ display: "flex", alignItems: "center" }}>
              <div className="mg-avatar" />
              <div className="mg-name">{a.name}</div>
            </div>
            <div className="mg-col-role">
              <span className="mg-role-pill">{a.role}</span>
            </div>
            <div className="mg-col-date mg-date">{a.date}</div>
            <div className="mg-col-action mg-action-pills">
              <button className="mg-accept-btn">accept</button>
              <button className="mg-reject-btn">reject</button>
            </div>
          </div>
        ))}

        <hr className="mg-divider" style={{ marginTop: 50 }} />

        <div className="mg-bottom-row">
          <div className="mg-bottom-col">
            <div className="mg-section-title">current team</div>
            <div className="mg-team-table-header">
              <div className="mg-team-name">member</div>
              <div className="mg-team-role-wrap">role</div>
            </div>
            {team.map((m, i) => (
              <div key={i} className="mg-team-row">
                <div className="mg-team-name">
                  <div className="mg-avatar" />
                  {m.name}
                </div>
                <div className="mg-team-role-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className="mg-role-pill">{m.role}</span>
                  <button className="mg-remove-btn">remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mg-bottom-col" style={{ maxWidth: 259 }}>
            <div className="mg-section-title">roles still open</div>
            <div className="mg-roles-box">
              {openRoles.map((r, i) => (
                <div key={i} className="mg-open-role-row">
                  <span className="mg-role-pill">{r.role}</span>
                  <span className="mg-spots">{r.spots}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mg-bottom-col" style={{ maxWidth: 280 }}>
            <div className="mg-section-title">project info</div>
            <div className="mg-info-box">
              <div className="mg-info-row">
                <span className="mg-info-label">type</span>
                <span className="mg-tag" style={{ fontSize: 18 }}>club project</span>
              </div>
              <div className="mg-info-row">
                <span className="mg-info-label">deadline</span>
                <span className="mg-info-value">18th June</span>
              </div>
              <div className="mg-info-row">
                <span className="mg-info-label">tech stack</span>
                <span className="mg-info-value">React, FastAPI</span>
              </div>
              <div className="mg-info-row">
                <span className="mg-info-label">visibility</span>
                <span className="mg-info-value">public</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
