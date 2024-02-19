import { MainLayout } from "./layouts/MainLayout/MainLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import StaffItem from "./components/StaffItem";
import { Routes, Route, useRoutes } from "react-router-dom";
import AddStaff from "./components/AddStaff";
import NotFound from "./pages/NotFound";
import StaffList from "./components/StaffList";
export default function App() {
  // useRoutes tính năng tương tự <Routes></Routes>
  const elements = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
      // children: [
      //   {
      //     path: "",
      //     element: <div></div>
      //   }
      // ]
    },
    {
      path: "/staff/*",
      element: <Staff />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="App">
      <MainLayout>
        {/* canh 1 */}
        {elements}

        {/* cach 2 */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff/*" element={<Staff />}> */}
        {/* <Route path=":staffId/:staffAddress" element={<StaffItem />} />
            <Route path="add" element={<AddStaff />} />
            <Route index element={<StaffList />} /> */}
        {/* </Route> */}

        {/* <Route path="/staff" element={<Staff />} />
          <Route path="/staff/:staffId/:staffAddress" element={<StaffItem />} />
          <Route path="/staff/add" element={<AddStaff />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
        {/* </Routes> */}
      </MainLayout>
    </div>
  );
}
