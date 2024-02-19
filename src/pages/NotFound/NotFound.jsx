import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  // Chúng ta cần một số điều kiện mới được navigate thì ta dùng useNavigate()
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/" , {
        state: "tran van hao"
      });
      // quay lai trang vua roi
      // navigate(-1);
    }, 2000);
  }, [navigate]);
  return <div>Not found</div>;
}
