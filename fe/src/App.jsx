import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import ViewAll from "./component/ViewAll";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NavigationBar from "./component/NavigationBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationBar>
          <ViewAll />
        </NavigationBar>
      </>
    ),
  },
  {
    path: "/add",
    element: (
      <>
        <NavigationBar>
          <AddUser />
        </NavigationBar>
      </>
    ),
  },
  {
    path: "/edit/:_id",
    element: (
      <>
        <NavigationBar>
          <EditUser />
        </NavigationBar>
      </>
    ),
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
