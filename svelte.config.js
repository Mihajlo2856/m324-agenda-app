import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: ".svelte-kit/output/client",
      assets: ".svelte-kit/output/client",
      fallback: null,
    }),
  },
};
