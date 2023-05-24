import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
// import SButton from "../../components/Button";
import SBreadCrumb from "./../../components/Breadcrumb";
// import SNavbar from "../../components/Navbar";

const DashBoard = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("auth");
  //   // console.log(JSON.parse(token));
  //   if (!token) return <Navigate to={"/signin"} replace={true} />;
  // }, [])

  return (
    <>
      <Container className="mt-3">
        <SBreadCrumb />
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};

export default DashBoard;
