import React from "react";

// Injected into the Payload login (admin.components.beforeLogin).
// Renders the left-hand terminal-render art panel (positioned via custom.css)
// and the right-column "Console Access" header above the real login form.
export const LoginArt = () => (
  <>
    <aside className="lhs-login-art" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="lhs-login-art__photo"
        src="/assets/photos/terminal-dusk.jpg"
        alt=""
      />
      <div className="lhs-login-art__scrim" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="lhs-login-art__logo"
        src="/assets/logo-horz-light.png"
        alt="LineHaul Station"
      />
      <div className="lhs-login-art__caption">
        <h2 className="lhs-login-art__title">
          Terminal
          <br />
          Operations
        </h2>
        <p className="lhs-login-art__sub">West Memphis Hub · Console</p>
      </div>
    </aside>

    <header className="lhs-login-head">
      <span className="lhs-login-head__eyebrow">Staff Sign-In</span>
      <h1 className="lhs-login-head__title">Console Access</h1>
      <p className="lhs-login-head__desc">
        Authorized terminal staff only. Access is logged.
      </p>
    </header>
  </>
);

export default LoginArt;
