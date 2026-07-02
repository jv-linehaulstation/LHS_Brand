import React from "react";

// Injected at the top of the Payload sidebar (admin.components.beforeNavLinks).
// The live "Hub" status block from the LineHaul Station Admin design.
export const NavHub = () => (
  <div className="lhs-navhub">
    <div className="lhs-navhub__label">Hub</div>
    <div className="lhs-navhub__row">
      <span className="lhs-navhub__dot" />
      <span className="lhs-navhub__name">West Memphis, AR</span>
    </div>
  </div>
);

export default NavHub;
