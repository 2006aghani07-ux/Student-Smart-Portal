import { Login } from "./pages/login/login";
import { Dashboard } from "./dashboard/dashboard";
import { Courses } from "./courses/courses";
import { AddCourse } from "./add-course/add-course";
import { AuthGuard } from "./Guards/auth.guard";

export const routes = [
  { path: "", component: Login },
  { path: "login", component: Login },
  { path: "dashboard", component: Dashboard, guard: AuthGuard },
  { path: "courses", component: Courses, guard: AuthGuard },
  { path: "add-course", component: AddCourse, guard: AuthGuard }
];