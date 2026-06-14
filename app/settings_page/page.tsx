"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    accepted: true,
    rejected: false,
    newApplicant: false,
  });

  const toggleNotif = (key: keyof typeof notifications) =>
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/maghfirea');
        @import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

        .st-page {
          background: #000;
          min-height: 100vh;
          padding: 40px 48px 80px;
          color: #fff;
        }
        .st-card {
          background: #08183F;
          border: 1px solid #fff;
          border-radius: 25px;
          box-shadow: 0 4px 4px #00000040;
          padding: 40px 56px;
        }
        .st-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .st-section-title {
          font-family: 'Maghfirea', serif;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .st-label {
          font-family: 'Actor', sans-serif;
          font-size: 20px;
          margin-bottom: 8px;
        }
        .st-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 10px;
          padding: 12px 16px;
          font-family: 'Actor', sans-serif;
          font-size: 16px;
          color: #fff;
          outline: none;
          box-sizing: border-box;
          height: 41px;
          margin-bottom: 22px;
          transition: border-color 0.2s;
        }
        .st-input:focus { border-color: rgba(255,255,255,0.85); background: #6178AD52; }
        .st-update-btn {
          width: 100%;
          height: 41px;
          background: rgba(144,157,212,0.4);
          border: 1px solid #fff;
          border-radius: 10px;
          color: #fff;
          font-family: 'Actor', sans-serif;
          font-size: 20px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .st-update-btn:hover { background: rgba(144,157,212,0.65); }
        .st-notif-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .st-notif-label {
          font-family: 'Actor', sans-serif;
          font-size: 20px;
        }
        .st-toggle {
          width: 66px;
          height: 24px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
        }
        .st-toggle.on { background: #4C6153; }
        .st-toggle.off { background: rgba(255,255,255,0.25); }
        .st-toggle-knob {
          position: absolute;
          top: 3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          transition: left 0.2s;
        }
        .st-toggle.on .st-toggle-knob { left: 45px; }
        .st-toggle.off .st-toggle-knob { left: 3px; }
        .st-divider {
          border: none;
          border-top: 1px solid #fff;
          margin: 26px 0;
        }
        .st-danger-title {
          font-family: 'Maghfirea', serif;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 24px;
        }
        .st-delete-btn {
          width: 230px;
          height: 41px;
          background: #B8BED5;
          opacity: 0.9;
          border: 1px solid #fff;
          border-radius: 10px;
          color: #BD2C2C;
          font-family: 'Actor', sans-serif;
          font-size: 20px;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .st-delete-btn:hover { opacity: 1; }
        .st-connected-title {
          font-family: 'Maghfirea', serif;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .st-account-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .st-account-name {
          font-family: 'Actor', sans-serif;
          font-size: 20px;
        }
        .st-connected-pill {
          background: rgba(33,52,135,0.4);
          border: 2px solid #43B680;
          border-radius: 10px;
          padding: 7px 22px;
          font-family: 'Actor', sans-serif;
          font-size: 15px;
          color: #43B680;
        }
      `}</style>

      <div className="st-page">
        <div className="st-card">
          <div className="st-grid">
            <div>
              <div className="st-section-title">Account</div>

              <div className="st-label">email</div>
              <input className="st-input" type="email" />

              <div className="st-label">new password</div>
              <input className="st-input" type="password" />

              <div className="st-label">confirm password</div>
              <input className="st-input" type="password" />

              <button className="st-update-btn">update account</button>
            </div>

            <div>
              <div className="st-section-title">Notifications</div>

              <div className="st-notif-row">
                <span className="st-notif-label">Application accepted</span>
                <button
                  className={`st-toggle ${notifications.accepted ? "on" : "off"}`}
                  onClick={() => toggleNotif("accepted")}
                >
                  <span className="st-toggle-knob" />
                </button>
              </div>

              <div className="st-notif-row">
                <span className="st-notif-label">Application rejected</span>
                <button
                  className={`st-toggle ${notifications.rejected ? "on" : "off"}`}
                  onClick={() => toggleNotif("rejected")}
                >
                  <span className="st-toggle-knob" />
                </button>
              </div>

              <div className="st-notif-row">
                <span className="st-notif-label">New applicant on project</span>
                <button
                  className={`st-toggle ${notifications.newApplicant ? "on" : "off"}`}
                  onClick={() => toggleNotif("newApplicant")}
                >
                  <span className="st-toggle-knob" />
                </button>
              </div>

              <hr className="st-divider" />

              <div className="st-danger-title">Danger Zone</div>
              <button className="st-delete-btn">delete account</button>
            </div>
          </div>

          <hr className="st-divider" style={{ margin: "40px 0" }} />

          <div className="st-connected-title">Connected Accounts</div>
          <div className="st-account-row">
            <span className="st-account-name">Google</span>
            <span className="st-connected-pill">connected</span>
          </div>
        </div>
      </div>
    </>
  );
}
