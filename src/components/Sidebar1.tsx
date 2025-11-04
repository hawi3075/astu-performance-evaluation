const Sidebar1 = () => {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-6">
        {/* My Work header with blue background */}
        <div className="bg-blue-500 text-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold">My Work</h2>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4 text-black">
            <li>
              <a href="/" className="hover:text-blue-500 font-medium">Home</a>
            </li>
            <li>
              <a href="/teams" className="text-blue-500 font-bold">Teams</a>
            </li>
            <li>
              <a href="/tasks" className="hover:text-blue-500 font-medium">Tasks</a>
            </li>
            <li>
              <a href="/messages" className="hover:text-blue-500 font-medium">Messages</a>
            </li>
            <li>
              <a href="/notifications" className="hover:text-blue-500 font-medium">Notifications</a>
            </li>
            <li>
              <a href="/files" className="hover:text-blue-500 font-medium">Files</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar1;
