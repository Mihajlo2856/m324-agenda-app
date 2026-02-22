import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
      strict: false,
    }),
    paths: {
      base: "/m324-agenda-app",
    },
  },
};

export default config;
