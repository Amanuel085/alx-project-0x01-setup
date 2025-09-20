import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2 text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">📞 {phone}</p>
      <p className="text-sm text-gray-500">🌐 {website}</p>
      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Company:</strong> {company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        <p><strong>Address:</strong> {address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;