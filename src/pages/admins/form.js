import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { TextInputWithLabel } from "../../components/TextInput";
import SButton from "../../components/Button";
import SelectBox from "../../components/SelectBox";
// import { accessAdmins } from "../../const/access";

const FormOrganizers = ({
  handleSubmit,
  handleChange,
  edit,
  // form,
  isLoading,
  handleRole,
}) => {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    const { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : { role: null };
    if (role) {
      setAuth(role);
    }
  }, []);

  const option = [
    {
      value: auth === "owner" ? "organizer" : "admin",
      label: auth === "owner" ? "organizer" : "admin",
    },
  ];

  return (
    <div>
      <Form className="d-flex flex-column flex-wrap w-50 mx-auto gap-2">
        <TextInputWithLabel
          label="Name"
          placeholder="Masukan Nama"
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
        />

        <TextInputWithLabel
          label="Email"
          placeholder="Masukan Email"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <SelectBox
          options={option}
          label="Role"
          name="role"
          placeholder="Masukan Role"
          handleChange={(e) => handleRole(e)}
        />

        <TextInputWithLabel
          label="Organizer Name"
          placeholder="Masukan Penyelengara"
          type="text"
          name="organizer"
          onChange={(e) => handleChange(e)}
        />

        <TextInputWithLabel
          label="Password"
          placeholder="Masukan Password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <TextInputWithLabel
          label="Confirm Password"
          placeholder="Masukan Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />

        <Row className="mx-auto d-inline-block">
          <SButton
            action={handleSubmit}
            loading={isLoading}
            children={edit ? "Edit" : "tambah"}
          />
        </Row>
      </Form>
    </div>
  );
};

export default FormOrganizers;
