// components/UserProfile.tsx
const UserProfile: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
        <h3 className="text-lg font-bold">Name: Example</h3>
        <p className="text-sm text-gray-600">Employer: SE</p>
        <p className="text-sm text-gray-600">Email: example@g.com</p>
      </div>

      <div className="mt-6 space-y-3 border-t pt-4">
        <div className="flex justify-between items-center text-blue-600 hover:underline cursor-pointer">
          <p>Personal Info</p>
          <span className="text-xs">Edit</span>
        </div>
        <div className="flex justify-between items-center text-blue-600 hover:underline cursor-pointer">
          <p>Emergency Contact Info</p>
          <span className="text-xs">Edit</span>
        </div>
        <div className="flex justify-between items-center text-blue-600 hover:underline cursor-pointer">
          <p>Education Background</p>
          <span className="text-xs">Edit</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
