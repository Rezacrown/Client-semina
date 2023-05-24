import React from "react";
import { Nav } from "react-bootstrap";

function SNavLink({ action, children, role, roles }) {
    // console.log('roles >>', roles)
    // console.log('role >>', role)
  let isHas = roles.indexOf(role);
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;

  // return (
  //     <>
  //         <Nav.Link onClick={action}>{children}</Nav.Link>
  //     </>
  // )
}

export default SNavLink;
