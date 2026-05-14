"use client";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Campus event app",
    type: "club project",
    typeColor: "#90d79d",
    author: "Priya S",
    posted: "2d ago",
    desc: "A mobile-first app to discover and RSVP for events happening around NITC Campus",
    spots: 3,
    roles: "ML, UI, frontend",
    match: 81,
  },
  {
    id: 2,
    title: "Attendance automation",
    type: "hackathon",
    typeColor: "#c78ff4",
    author: "Arjun",
    posted: "4d ago",
    desc: "Face recognition based attendance system using raspberry pi camera",
    spots: 3,
    roles: "ML, UI, frontend",
    match: 81,
  },
  {
    id: 3,
    title: "Library bot",
    type: "personal project",
    typeColor: "#7dd3fc",
    author: "Meera K",
    posted: "1d ago",
    desc: "A chatbot that helps students find books, check availability and get reading recommendations",
    spots: 2,
    roles: "AI/ML, backend",
    match: 74,
  },
  {
    id: 4,
    title: "Campus nav app",
    type: "club project",
    typeColor: "#90d79d",
    author: "Rohan V",
    posted: "3d ago",
    desc: "Indoor navigation app for NITC campus using AR and bluetooth beacons",
    spots: 4,
    roles: "App dev, UI/UX",
    match: 68,
  },
];

function ApplyModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#08183F",
          border: "1px solid #fff",
          borderRadius: 20,
          padding: "36px 40px",
          width: 520,
          maxWidth: "90vw",
          color: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontFamily: "'Maghfirea', serif",
            fontSize: 28,
            marginBottom: 6,
          }}
        >
          Apply to {project.title}
        </h2>
        <p
          style={{
            fontFamily: "'Actor', sans-serif",
            fontSize: 14,
            opacity: 0.6,
            marginBottom: 28,
          }}
        >
          By {project.author} : posted {project.posted}
        </p>

        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontFamily: "'Actor', sans-serif",
              fontSize: 12,
              letterSpacing: 1,
              opacity: 0.6,
              marginBottom: 10,
            }}
          >
            SELECT A ROLE
          </div>
          <div
            style={{
              background: "rgba(97,113,182,0.4)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 10,
              padding: "12px 16px",
              fontFamily: "'Actor', sans-serif",
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>•</span> Backend developer
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontFamily: "'Actor', sans-serif",
              fontSize: 12,
              letterSpacing: 1,
              opacity: 0.6,
              marginBottom: 10,
            }}
          >
            WHY DO YOU WANT TO JOIN?
          </div>
          <textarea
            style={{
              width: "100%",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 10,
              padding: "12px 16px",
              fontFamily: "'Actor', sans-serif",
              fontSize: 15,
              color: "#fff",
              outline: "none",
              resize: "none",
              boxSizing: "border-box",
              minHeight: 100,
            }}
            placeholder="Tell the project owner why you'd be a good fit .."
          />
        </div>

        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontFamily: "'Actor', sans-serif",
              fontSize: 12,
              letterSpacing: 1,
              opacity: 0.6,
              marginBottom: 10,
            }}
          >
            YOUR RELEVANT SKILLS
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 8,
            }}
          >
            {["React", "Node.js", "MySQL"].map((s) => (
              <div
                key={s}
                style={{
                  background: "rgba(97,113,182,0.4)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontFamily: "'Actor', sans-serif",
                  fontSize: 14,
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 12,
              opacity: 0.5,
              fontFamily: "'Actor', sans-serif",
            }}
          >
            pulled from your profile, edit profile to update
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <button
            onClick={onClose}
            style={{
              background: "#9E0000",
              border: "1px solid #fff",
              borderRadius: 20,
              color: "#fff",
              fontFamily: "'Maghfirea', serif",
              fontSize: 20,
              cursor: "pointer",
              padding: "12px 32px",
              transition: "background 0.2s",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              background: "#08183F",
              border: "1px solid #fff",
              borderRadius: 20,
              color: "#fff",
              fontFamily: "'Maghfirea', serif",
              fontSize: 20,
              cursor: "pointer",
              padding: "12px 32px",
              flex: 1,
              transition: "background 0.2s",
            }}
          >
            Send Application
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  const [modalProject, setModalProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(projects.length / perPage);
  const visibleProjects = projects.slice(page * perPage, (page + 1) * perPage);

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/maghfirea');
        @import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

        .bp-page { background:#000; min-height:100vh; padding:0 80px 80px; color:#fff; }
        .bp-title { font-family:'Maghfirea',serif; font-size:64px; line-height:100%; margin-bottom:10px; }
        .bp-subtitle { font-family:'Actor',sans-serif; color:#a0a8cc; font-size:16px; }
        .bp-filters { display:flex; gap:30px; margin-bottom:50px; }
        .bp-filter-btn {
          background:#d1d5db; color:#111827; padding:10px 20px;
          border-radius:20px; font-size:16px; border:none; width:200px;
          display:flex; justify-content:space-between; align-items:center;
          cursor:pointer; font-weight:500; font-family:'Actor',sans-serif;
          transition: background 0.2s;
        }
        .bp-filter-btn:hover { background:#b0b7c3; }
        .bp-grid-container { display:flex; align-items:center; gap:30px; }
        .bp-nav-arrow {
          background:#879cef; border:none; width:44px; height:44px;
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:#000; transition:opacity 0.2s; flex-shrink:0;
        }
        .bp-nav-arrow:hover { opacity:0.8; }
        .bp-nav-arrow:disabled { opacity:0.3; cursor:default; }
        .bp-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; flex:1; }
        .bp-card {
          background:#2d3455; border:1px solid #4d5b91; border-radius:20px;
          padding:24px; display:flex; flex-direction:column;
          transition:transform 0.3s ease, border-color 0.3s ease;
        }
        .bp-card:hover { transform:translateY(-4px); border-color:rgba(255,255,255,0.3); }
        .bp-card-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:2px; }
        .bp-card-title { font-family:'Maghfirea',serif; font-size:22px; }
        .bp-badge { padding:4px 12px; border-radius:12px; font-size:12px; font-weight:600; color:#1f2937; }
        .bp-author { font-family:'Actor',sans-serif; font-size:13px; color:#a0a8cc; margin-bottom:20px; }
        .bp-card-desc { font-family:'Actor',sans-serif; color:#d1d5db; font-size:15px; line-height:1.5; margin-bottom:30px; flex-grow:1; }
        .bp-divider { height:1px; background:rgba(255,255,255,0.1); margin-bottom:15px; }
        .bp-card-footer { display:flex; justify-content:space-between; align-items:center; }
        .bp-spots { font-family:'Actor',sans-serif; color:#e2e8f0; font-size:14px; }
        .bp-spots span { font-weight:600; color:#90d79d; }
        .bp-match { background:#90d79d; color:#1f2937; padding:4px 8px; border-radius:8px; font-size:11px; font-weight:600; text-align:center; }
        .bp-match small { display:block; font-size:9px; font-weight:400; }
        .bp-apply-link { font-family:'Actor',sans-serif; text-align:right; margin-top:15px; font-size:13px; color:#a0a8cc; cursor:pointer; transition:color 0.2s; }
        .bp-apply-link:hover { color:#fff; }
      `}</style>

      <div className="bp-page">
        <div style={{ paddingTop: 50, marginBottom: 40 }}>
          <h1 className="bp-title">Browse Projects</h1>
          <p className="bp-subtitle">
            Find projects that match your skills and interests
          </p>
        </div>

        <div className="bp-filters">
          <button className="bp-filter-btn">
            Club Project{" "}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="bp-filter-btn">
            Backend{" "}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="bp-grid-container">
          <button
            className="bp-nav-arrow"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6V18Z" fill="currentColor" />
            </svg>
          </button>

          <div className="bp-grid">
            {visibleProjects.map((proj) => (
              <div key={proj.id} className="bp-card">
                <div className="bp-card-header">
                  <h3 className="bp-card-title">{proj.title}</h3>
                  <span
                    className="bp-badge"
                    style={{ background: proj.typeColor }}
                  >
                    {proj.type}
                  </span>
                </div>
                <div className="bp-author">
                  By {proj.author} : posted {proj.posted}
                </div>
                <p className="bp-card-desc">{proj.desc}</p>
                <div className="bp-divider" />
                <div className="bp-card-footer">
                  <div className="bp-spots">
                    <span>{proj.spots} spots left</span> : {proj.roles}
                  </div>
                  <div className="bp-match">
                    {proj.match}%<small>match</small>
                  </div>
                </div>
                <div
                  className="bp-apply-link"
                  onClick={() => setModalProject(proj)}
                >
                  view &amp; apply →
                </div>
              </div>
            ))}
          </div>

          <button
            className="bp-nav-arrow"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6V18Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {modalProject && (
        <ApplyModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
