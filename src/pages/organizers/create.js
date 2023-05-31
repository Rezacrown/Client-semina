import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "./form";
import SBreadCrumb from "../../components/Breadcrumb";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/action";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { accessOrganizers } from "../../const/access";

const CreateOrganizer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    role: null,
    email: "",
    organizer: null,
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [acces, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const handleChange = (e) => {
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRole = (e) => {
    console.log(e);
    setForm({
      ...form,
      role: e.value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const res = await postData("/cms/organizer", form);

    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil menambahkan ${res?.data?.data?.name} sebagai organizer`
        )
      );
      navigate("/organizers");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res?.response?.data?.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadCrumb
        textSecound={"Organizers"}
        urlSecound={"/organizers"}
        textThird={"Tambah"}
      />
      {alert.status && <Alert type={alert.type} message={alert.message} />}
      <Form
        form=""
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleRole={handleRole}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default CreateOrganizer;
