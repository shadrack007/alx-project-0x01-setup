import { ChangeEvent, FormEvent, useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onSubmit, onClose }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(user);
    onClose();
  };
  return (
    <div>
      <div>
        <h2>Add New User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="website"
              className="block text-gray-700 font-medium mb-2"
            >
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="street"
                value={user.address.street}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, street: e.target.value },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Street"
              />
              <input
                type="text"
                name="suite"
                value={user.address.suite}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, suite: e.target.value },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Suite"
              />
              <input
                type="text"
                name="city"
                value={user.address.city}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, city: e.target.value },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City"
              />
              <input
                type="text"
                name="zipcode"
                value={user.address.zipcode}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, zipcode: e.target.value },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Zipcode"
              />
              <input
                type="text"
                name="lat"
                value={user.address.geo.lat}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      geo: { ...prev.address.geo, lat: e.target.value },
                    },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Latitude"
              />
              <input
                type="text"
                name="lng"
                value={user.address.geo.lng}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      geo: { ...prev.address.geo, lng: e.target.value },
                    },
                  }))
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Longitude"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              name="companyName"
              value={user.company.name}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  company: { ...prev.company, name: e.target.value },
                }))
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Company Name"
            />
            <input
              type="text"
              name="catchPhrase"
              value={user.company.catchPhrase}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  company: { ...prev.company, catchPhrase: e.target.value },
                }))
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Catch Phrase"
            />
            <input
              type="text"
              name="bs"
              value={user.company.bs}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  company: { ...prev.company, bs: e.target.value },
                }))
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="BS"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
