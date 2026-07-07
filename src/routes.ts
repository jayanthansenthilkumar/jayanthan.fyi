import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./pages/Home.tsx"),
  route("about", "./pages/About.tsx"),
  route("blogs", "./pages/Blogs.tsx"),
  route("blogs/:slug", "./pages/BlogDetail.tsx"),
  route("projects", "./pages/Projects.tsx"),
  route("contact", "./pages/Contact.tsx"),
] satisfies RouteConfig;
