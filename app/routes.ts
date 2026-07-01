import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects", "routes/projects.tsx"),
  route("blogs", "routes/blogs.tsx"),
  route("blogs/:slug", "routes/article.tsx"),
  route("contact", "routes/contact.tsx"),
  route("resume", "routes/resume.tsx")
] satisfies RouteConfig;

// Trigger HMR
