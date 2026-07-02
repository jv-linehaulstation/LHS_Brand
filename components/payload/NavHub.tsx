import React from "react";

// Injected at the top of the Payload sidebar (admin.components.beforeNavLinks).
// The live "Hub" status block from the LineHaul Station Admin design.
export const NavHub = () => (
  <div className="lhs-navhub">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className="lhs-navhub__logo"
      src="/assets/logo-horz-light.png"
      alt="LineHaul Station"
    />
    <div className="lhs-navhub__label">Hub</div>
    <div className="lhs-navhub__row">
      <span className="lhs-navhub__dot" />
      <span className="lhs-navhub__name">West Memphis, AR</span>
    </div>
  </div>
);

export default NavHub;
