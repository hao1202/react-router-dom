import { MainLayout } from "./layouts/MainLayout/MainLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import StaffList from "./pages/StaffList";
export default function App() {
  return (
    <div className="App">
      <MainLayout>
        <Dashboard />
        <About />
        <StaffList />
      </MainLayout>
    </div>
  );
}
