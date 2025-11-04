import Image from "next/image";

const TeamsDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-blue-500 p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <Image
            src="/astu-logo.png"
            alt="ASTU Logo"
            width={50}  // bigger logo
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-6 text-white font-semibold">
          <span>Teams</span>
          <span>Dashboard</span>
        </div>
      </div>

      {/* Header + Search */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-black">Teams</h1>
          <div className="relative w-full md:w-64 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
            />
          </div>
        </div>

        {/* Menu under search bar */}
        <div className="flex gap-6 text-black font-medium border-t pt-3">
          <span className="cursor-pointer hover:text-blue-500">Overview</span>
          <span className="cursor-pointer hover:text-blue-500">Board</span>
          <span className="cursor-pointer hover:text-blue-500">Calendar</span>
          <span className="cursor-pointer hover:text-blue-500">Plan</span>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Teams tasks section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-black">Teams Tasks</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Employer name"
                className="flex-1 border border-gray-300 p-2 rounded-lg text-black placeholder-gray-500"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Select Task
              </button>
            </div>
          </div>
        </div>

        {/* Task creation section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-black">Create Task for Team</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Create Task"
                className="flex-1 border border-gray-300 p-2 rounded-lg text-black placeholder-gray-500"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Select User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsDashboard;
