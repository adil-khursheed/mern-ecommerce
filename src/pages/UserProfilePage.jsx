import Navbar from "../components/navbar/Navbar";
import UserProfile from "../features/user/UserProfile";

const UserProfilePage = () => {
  return (
    <Navbar>
      <h1 className="mx-auto text-2xl">My Profile</h1>
      <UserProfile />
    </Navbar>
  );
};

export default UserProfilePage;
