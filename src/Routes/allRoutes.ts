// dashboard
import Ecommerce from "pages/Dashboards/Ecommerce";
import Enquiry from "pages/Enquiry/EnquiryPage";

import UserProfile from "pages/Authentication/UserProfile";
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Register from "pages/Authentication/Register";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Ecommerce },
  { path: "/dashboard", component: Ecommerce },
  
  // Enquiry
  { path : "/enquiry", component: Enquiry},
  
  // profile
  { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [

  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };
