import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const ExtraContent = () => {
  const location = useLocation();
  console.log(location);
  return <div className="text-red-500">Url is about</div>;
};

// NavLink cần hơn trong trường hợp chúng ta cần giá trị isActive
export const MainLayout = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-4">
      <aside className="col-span-1" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-100 px-3 py-4 shadow-lg">
          <ul className="space-y-2">
            <li>
              {/* Replace thay vì nó add a new value thì repalce a value now in stack */}
              <NavLink
                to="/"
                // dùng trong trường hợp thằng con match với thằng cha thì cha không được kích hoạt
                end
                // replace
                // Thường thương class chuyền vào string ở NavLink ta có thể chuyền vào một callBack
                // Ngoài className nhận active thì style cũng nhận
                // style={({ isActive }) => {
                //   return {
                //     fontWeight: isActive ? 800 : undefined,
                //   };
                // }}
                className={({ isActive }) => {
                  return `flex items-center rounded-lg ${isActive ? "bg-gray-300" : ""} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                {/* Muốn dùng isActive ở thằng children */}
                {({ isActive }) => (
                  <span
                    className={`ml-3 ${isActive ? "font-bold" : ""}
                  `}
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/staff"
                // replace
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? 800 : undefined,
                  };
                }}
                className={({ isActive }) => {
                  return `flex items-center rounded-lg ${isActive ? "bg-gray-300" : ""} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                <span className="ml-3">Staff</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // replace
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? 800 : undefined,
                  };
                }}
                className={({ isActive }) => {
                  return `flex items-center rounded-lg ${isActive ? "bg-gray-300" : ""} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`;
                }}
              >
                <span className="ml-3">About</span>
              </NavLink>
            </li>
          </ul>
          {/* fix cung location */}
          <Routes location="/about">
            <Route path="/about" element={<ExtraContent />} />
          </Routes>
        </div>
      </aside>
      <main className="col-span-3 h-full px-3 py-4">{children}</main>
    </div>
  );
};
