export const MainLayout = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-4">
      <aside className="col-span-1" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-100 px-3 py-4 shadow-lg">
          <ul className="space-y-2">
            <li>
              <a
                href=""
                className="flex items-center rounded-lg bg-gray-300 p-2 text-base font-normal text-gray-900 hover:bg-gray-300"
              >
                <span className="ml-3 font-bold">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-300"
              >
                <span className="ml-3">Staff</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-300"
              >
                <span className="ml-3">About</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className="col-span-3 h-full px-3 py-4">{children}</main>
    </div>
  );
};
