import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: "/jayanthan.fyi/",
  prerender: true,
} satisfies Config;
