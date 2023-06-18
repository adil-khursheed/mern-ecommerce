import { useSelector } from "react-redux";
import { selectUserInfo } from "./userSlice";

const UserProfile = () => {
  const user = useSelector(selectUserInfo);

  const handleEdit = () => {};

  const handleRemove = () => {};
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-8 bg-white px-4 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-6">
          <h2 className="text-2xl pb-4 tracking-tight text-gray-900 font-bold">
            Name: {user.name ? user.name : "New User"}
          </h2>
          <h4 className="text-lg pb-4 tracking-tight text-gray-900 font-semibold">
            Email Address: {user.email}
          </h4>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h5 className="text-sm font-medium">My Address:</h5>
          {user.addresses.map((address, index) => (
            <div
              key={index}
              className="flex justify-between gap-x-6 px-4 py-5 border-solid border-2 border-gray-200">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    Phone: {address.phone}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {address.street}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.city}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.state}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.pinCode}
                </p>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Edit
                </button>
                <button
                  onClick={(e) => handleRemove(e, index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
