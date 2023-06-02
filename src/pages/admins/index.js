import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import { accessAdmins } from "./../../const/access";
import SButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../components/TableWithAction";
import { fetchAdmins } from "../../redux/admins/action";
import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { deleteData } from "../../utils/fetch";
import SAlert from "../../components/Alert";
// import moment from "moment";

const AdminsPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
    const Admins = useSelector((state) => state.admins);
  const notif = useSelector((state) => state.notif);
  const [acces, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessAdmins).forEach(function (key, index) {
      if (accessAdmins[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

    useEffect(() => {
      dispatch(fetchAdmins());
    //   console.log(Admins);
    }, [dispatch]);

  return (
    <Container className="mt-3">
      <SBreadCrumb textSecound={"Admins"} />
      {acces.tambah && (
        <div className="mb-3">
          <SButton action={() => Navigate("/admins/create")}>Tambah</SButton>
        </div>
      )}

      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}

      <Table
        status={Admins.status}
        thead={["Nama", "Role", "Email", "Created At"]}
        data={Admins.data}
        tbody={["name", "role", "email", `createdAt`]}
        withoutPagination
      />
    </Container>
  );
};

export default AdminsPage;
