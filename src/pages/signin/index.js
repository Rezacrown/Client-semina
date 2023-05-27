import React, { useState } from "react";

import { Container, Card } from "react-bootstrap";

import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import SForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/action";

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
  const dispatch = useDispatch();

  // pre

  // func
  const handleChange = (e) => {
    setAlert({ ...alert, status: false });
    // e.tagret.name akan dinamis mengacu pada name dari input dan karena namanya sama dengan useState akan otomatis di set
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);

    const res = await postData(`/cms/signin`, form);
    if (res?.data?.data) {
      setIsLoading(false);
      navigate("/");
      dispatch(userLogin(res?.data?.data?.token, res?.data?.data?.role));
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        type: "danger",
        message: res.response.data.msg || "Internal Server Error",
      });
    }
  };

  const handleKeyboard = (e) => {
    if (e.key === "Enter") { 
      handleSubmit()
    }
  }

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="mx-auto mt-5">
        <Card.Title className="mx-auto text-center mt-3">
          SignIn Page
        </Card.Title>
        <Card.Body>
          {alert.status === true && (
            <SAlert type={alert.type} message={alert?.message} />
          )}

          <SForm
            form={form}
            handleKeyboard={handleKeyboard}
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
