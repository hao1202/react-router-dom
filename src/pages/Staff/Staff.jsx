import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import AddStaff from "../../components/AddStaff";
import StaffList from "../../components/StaffList";
import StaffItem from "../../components/StaffItem";
export default function Staff() {
  return (
    <div>
      <h1 className="mb-6 text-lg">Staff</h1>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500  ">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <NavLink
              to="/staff"
              end
              className={({ isActive }) => {
                return `inline-block rounded-t-lg ${isActive ? "border-b-2 border-blue-600 text-blue-600" : ""}  p-4`;
              }}
            >
              List
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              to="/staff/add"
              className={({ isActive }) => {
                return `inline-block rounded-t-lg ${isActive ? "border-b-2 border-blue-600 text-blue-600" : ""}  p-4`;
              }}
              aria-current="page"
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path=":staffId/:staffAddress" element={<StaffItem />} />
        <Route path="add" element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>
      {/* chỗ mà route con render ra */}
      {/* <Outlet context={{ profile: "hao" }} /> */}
    </div>
  );
}
