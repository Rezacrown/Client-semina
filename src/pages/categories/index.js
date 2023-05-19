import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Container, Nav, Spinner, Table } from "react-bootstrap";
import SButton from "../../components/Button";
import SBreadCrumb from "./../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../config";

const PageCategories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to={"/signin"} replace={true} />;

    const getFetchdata = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setData(res.data.data);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getFetchdata();
  }, []);

  return (
    <>
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb textSecound="Categories" />
        <SButton>Tambah</SButton>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3}>
                  <div className="d-flex justify-content-center align-items-center">
                    <Spinner
                      animation="grow"
                      variant="light"
                      size="xxl"
                      className="mx-auto"
                    />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={data.id}>
                  <td>{index}</td>
                  <td>{data.name}</td>
                  <td>otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default PageCategories;
