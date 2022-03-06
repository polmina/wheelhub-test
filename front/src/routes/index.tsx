import { NotFound } from "layouts/not-found";
import { Signup } from "layouts/signup";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const routesList = [
  { path: "/", component: <Navigate to="/signup" /> },
  { path: "/signup", component: <Signup /> },
];
export const Routes = () => {
  const loadRoutes = () =>
    routesList.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ));

  return (
    <BrowserRouter>
      <Switch>
        {loadRoutes()} <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};
