import styles from "../../pages/scssPages/Activity.module.scss";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ActivityList from "../../components/activityList/ActivityList";

export default function Activity() {
  // const { id } = useParams();

  // console.log(id);
  return (
    <>
      <ActivityList />
      <Outlet />
    </>
  );
}
