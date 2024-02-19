import { useOutletContext, useParams } from "react-router-dom";
export default function StaffItem() {
  // Muốn nhận được cái URL , param
  // const param = useParams();
  // console.log(param);
  // const context = useOutletContext();
  // console.log(context);
  const { staffId, staffAddress } = useParams();
  return (
    <div>
      StaffItem {staffId} {staffAddress}
    </div>
  );
}
