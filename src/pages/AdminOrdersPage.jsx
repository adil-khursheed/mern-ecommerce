import Navbar from "../components/navbar/Navbar";
import AdminOrders from "../features/admin/AdminOrders";

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders />
      </Navbar>
    </div>
  );
};

export default AdminOrdersPage;
