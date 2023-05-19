import React, { useState } from "react";

import { Container, Card } from "react-bootstrap";

import axios from "axios";
import SAlert from "../../components/Alert";
import { useNavigate, Navigate } from "react-router-dom";
import DashBoard from "./../dashboard/index";
import { config } from "../../config";
import SForm from "./form";

//
const PageSignIn = () => {
  // state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // pre
  const token = localStorage.getItem("token");
  if (token) return <Navigate to={"/"} replace={true} />;

  // func
  const handleChange = (e) => {
    setAlert({ ...alert, status: false });
    // e.tagret.name akan dinamis mengacu pada name dari input dan karena namanya sama dengan useState akan otomatis di set
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${config.api_host_dev}/cms/signin`, form);

      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data.msg);
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.msg ?? "internal server error",
      });
    }
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="mx-auto mt-5">
        <Card.Title className="mx-auto text-center mt-3">
          SignIn Page
        </Card.Title>
        <Card.Body>
          {alert.status && (
            <SAlert type={alert.type} message={alert?.message} />
          )}
          {/* <SAlert type={"danger"} message="alert" /> */}

          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageSignIn;
