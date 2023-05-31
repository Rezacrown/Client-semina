// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import SBreadCrumb from "../../components/Breadcrumb";
// import { accessAdmins } from "./../../const/access";
// import SButton from "../../components/Button";
// import { useNavigate } from "react-router-dom";
// import Table from "../../components/TableWithAction";
// // import { fetchOrganizer } from "../../redux/organizers/action";
// import { useDispatch, useSelector } from "react-redux";
// // import Swal from "sweetalert2";
// // import { deleteData } from "../../utils/fetch";
// import { setNotif } from "../../redux/notif/action";
// import SAlert from "../../components/Alert";

// const AdminsPage = () => {
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();
//   //   const Organizers = useSelector((state) => state.organizers);
//   const notif = useSelector((state) => state.notif);
//   const [acces, setAccess] = useState({
//     tambah: false,
//     hapus: false,
//     edit: false,
//   });

//   const checkAccess = () => {
//     let { role } = localStorage.getItem("auth")
//       ? JSON.parse(localStorage.getItem("auth"))
//       : {};
//     const access = { tambah: false, hapus: false, edit: false };
//     Object.keys(accessAdmins).forEach(function (key, index) {
//       if (accessAdmins[key].indexOf(role) >= 0) {
//         access[key] = true;
//       }
//     });
//     setAccess(access);
//   };

//   useEffect(() => {
//     checkAccess();
//   }, []);

//   //   useEffect(() => {
//   //     dispatch(fetchOrganizer());
//   //     console.log(Organizers.data);
//   //   }, [dispatch]);

//   return (
//     <Container className="mt-3">
//       <SBreadCrumb textSecound={"Admins"} />
//       {/* {accessOrganizers.tambah && (
//         <div className="mb-3">
//           <SButton action={() => Navigate("/organizers/create")}>
//             Tambah
//           </SButton>
//         </div>
//       )} */}

//       {notif.status && (
//         <SAlert type={notif.typeNotif} message={notif.message} />
//       )}

//       <Table
//         status={Organizers.status}
//         thead={["Nama", "Role", "Email", "Created By"]}
//         data={Organizers.data}
//         tbody={["name", "role", "email", "organizer"]}
//         withoutPagination
//       />
//     </Container>
//   );
// };

// export default AdminsPage;
