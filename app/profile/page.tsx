
"use client";
import { useState } from "react";

const skillOptions = ["React", "Node.js", "Figma", "Python", "Flutter", "UI/UX"];

export default function MyProfilePage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["React"]);

  const toggleSkill = (s: string) =>
    setSelectedSkills((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/maghfirea');
        @import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

        .pr-page {
          background: #000;
          min-height: 100vh;
          padding: 40px 48px 80px;
          color: #fff;
          display: flex;
          gap: 36px;
        }
        .pr-left {
          flex-shrink: 0;
          width: 126px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pr-avatar {
          width: 126px;
          height: 126px;
          border-radius: 50%;
          background: #D9D9D9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .pr-avatar i {
          font-size: 64px;
          color: #555;
        }
        .pr-upload-label {
          font-family: 'Actor', sans-serif;
          font-size: 12px;
          color: #000;
          background: #fff;
          border-radius: 10px;
          padding: 9px 22px;
          cursor: pointer;
          margin-bottom: 18px;
          transition: opacity 0.2s;
        }
        .pr-upload-label:hover { opacity: 0.85; }
        .pr-edit-btn {
          width: 101px;
          height: 33px;
          border-radius: 10px;
          background: #556A9B;
          border: 1px solid #fff;
          color: #000;
          font-family: 'Actor', sans-serif;
          font-size: 12px;
          cursor: pointer;
          margin-bottom: 12px;
          transition: opacity 0.2s;
        }
        .pr-edit-btn:hover { opacity: 0.85; }
        .pr-save-btn {
          width: 101px;
          height: 33px;
          border-radius: 10px;
          background: #95688D;
          opacity: 0.9;
          border: 1px solid #fff;
          color: #000;
          font-family: 'Actor', sans-serif;
          font-size: 12px;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .pr-save-btn:hover { opacity: 1; }
        .pr-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .pr-box {
          background: #08183FB2;
          border: 1px solid #fff;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          padding: 28px 32px;
        }
        .pr-box-top {
          border: 1px solid #fff;
          border-radius: 25px;
          padding: 28px 32px;
        }
        .pr-row {
            display: flex;
            align-items: flex-start;
            gap: 32px;
            flex-wrap: wrap;
        }
        .pr-row + .pr-row { margin-top: 24px; }
            .pr-field {
            display: flex;
            align-items: center;
            gap: 16px;
            flex: 1;
        }
        .pr-field .pr-input {
            flex: 1;
        }
        .pr-skills-field {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .pr-label {
          font-family: 'Actor', sans-serif;
          font-size: 20px;
          white-space: nowrap;
        }
        .pr-input {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          padding: 10px 16px;
          font-family: 'Actor', sans-serif;
          font-size: 16px;
          color: #fff;
          outline: none;
          height: 41px;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .pr-input:focus { border-color: rgba(255,255,255,0.85); background: #6178AD52; }
        .pr-input.w-sm { width: 141px; }
        .pr-input.w-md { width: 200px; }
        .pr-input.w-lg { flex: 1; min-width: 240px; }
        .pr-skills-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .pr-skill-btn {
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          background: transparent;
          color: rgba(255,255,255,0.75);
          font-family: 'Actor', sans-serif;
          font-size: 16px;
          padding: 10px 22px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pr-skill-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.7);
        }
        .pr-skill-btn.active {
          background: #6178AD;
          color: #fff;
          border-color: #fff;
        }
      `}</style>

      <div className="pr-page">
        <div className="pr-left">
          <div className="pr-avatar">
            <i className="ti ti-user" aria-hidden="true" />
          </div>
          <label className="pr-upload-label">
            upload photo
            <input type="file" accept="image/*" style={{ display: "none" }} />
          </label>
          <button className="pr-edit-btn">edit profile</button>
          <button className="pr-save-btn">save</button>
        </div>

        <div className="pr-right">
          <div className="pr-box-top">
            <div className="pr-row">
                <div className="pr-field">
                <span className="pr-label">Name</span>
                <input className="pr-input" />
                </div>
                <div className="pr-field">
                <span className="pr-label">Username</span>
                <input className="pr-input" />
                </div>
            </div>
            <div className="pr-row">
                <div className="pr-field">
                <span className="pr-label">Year of passing</span>
                <input className="pr-input" />
                </div>
                <div className="pr-field">
                <span className="pr-label">College/Organisation</span>
                <input className="pr-input" />
                </div>
            </div>
        </div>

          <div className="pr-box">
            <div className="pr-row">
                <div className="pr-field" style={{ flex: 1 }}>
                <span className="pr-label">Short Bio</span>
                <input className="pr-input" />
                </div>
            </div>
            <div className="pr-row">
                <div className="pr-field">
                <span className="pr-label">GitHub URL</span>
                <input className="pr-input" />
                </div>
                <div className="pr-field">
                <span className="pr-label">Linkedin URL</span>
                <input className="pr-input" />
                </div>
            </div>
          </div>

          <div className="pr-box">
            <div className="pr-row">
              <div className="pr-field">
                <span className="pr-label">Your Role</span>
                <input className="pr-input w-md" />
              </div>
            </div>
            <div className="pr-row">
                <div className="pr-skills-field">
                    <span className="pr-label">Skills</span>
                    <div className="pr-skills-row">
                    {skillOptions.map((s) => (
                        <button
                        key={s}
                        className={`pr-skill-btn${selectedSkills.includes(s) ? " active" : ""}`}
                        onClick={() => toggleSkill(s)}
                        >{s}</button>
                    ))}
                    </div>
                </div>
            </div>
          </div>

          <div className="pr-box">
            <div className="pr-row">
                <div className="pr-field" style={{ flex: 1 }}>
                <span className="pr-label">Currently open to joining projects?</span>
                <input className="pr-input" />
                </div>
                <div className="pr-field" style={{ flex: 1 }}>
                <span className="pr-label">Time commitment</span>
                <input className="pr-input" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
