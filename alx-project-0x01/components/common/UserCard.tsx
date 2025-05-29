import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  address,
  company,
  website,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p>@{username}</p>
        </div>

        <div>
          <h3 className="font-semibold italic">{address.city}</h3>
          <p className="text-xs">{address.street}</p>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <p className="text-gray-600">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Phone:</span> {phone}
        </p>
      </div>

      <div>
        <p>
          <span className="font-semibold">Company Name</span>
          {company.name}
        </p>
        <p>
          <span className="font-semibold">Website: </span>
          <a
            className="text-blue-600 italic hover:cursor-pointer"
            href={`https://${website}`}
          >
            {website.split(".")[0]}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
