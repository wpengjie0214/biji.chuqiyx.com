import type { VNode } from "vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SocialLink",

  setup() {
    //右上角引导
    const discordLink = "https://www.chuqiyx.com/";
    const discordIcon = "https://www.chuqiyx.com/";
    //const qqIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width:1.25rem;height:1.25rem;vertical-align:middle"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" fill="currentColor"/></svg>`;

    return (): VNode =>
      h(
        "div",
        { class: "nav-item vp-repo" },
        h("a", {
          class: "vp-repo-link",
          href: discordLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "discord",
          innerHTML: discordIcon,
        })
      );
  },
});
