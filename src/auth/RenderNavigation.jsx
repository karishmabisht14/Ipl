import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthData } from "./AuthWrapper";
import { items } from "../components/header/navbar/Navigation";
import Login from "../login/Login";

export const isAuthorisedRoute = (user, r, isMenu) => {
  let allowed = false;
  if (!r.isPrivate) allowed = true;
  else if (r.isPrivate && user.isAuthenticated) {
    if (r.permissions) {
      r.permissions.forEach((permission) => {
        if (user.permissions?.includes(permission)) {
          allowed = true;
          return;
        }
      });
    } else allowed = true;
  }
  if (isMenu && !r.isMenu) allowed = false;
  return allowed;
};

export const RenderRoutes = () => {
  const { user } = AuthData();
  const location = useLocation();

  return (
    <Routes>
      {items.map((r, i) => {
        if (isAuthorisedRoute(user, r))
          if (r.submenu) {
            return r.submenu.map((menu) => {
              return <Route key={i} path={menu.path} element={menu.element} />;
            });
          }
        console.log("authorize");
        return <Route key={i} path={r.path} element={r.element} />;
      })}

      {!user.isAuthenticated && <Route path="/login" element={<Login />} />}

      {!user.isAuthenticated && (
        <Route
          path="*"
          element={<Navigate to="/login" replace state={{ from: location }} />}
        />
      )}
      {user.isAuthenticated && (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
};
