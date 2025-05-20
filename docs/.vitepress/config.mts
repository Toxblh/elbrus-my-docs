import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Эльбрус Wiki",
  description: "Эльбрус Wiki Toxblh. Личная шпаргалка",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "RTC",
        items: [
          {
            text: "Перепаковка",
            items: [
              {
                text: "Cтатический бинарник",
                link: "/RTC/Перепаковка/Статическая.md",
              },
              {
                text: "Динамический бинарник",
                link: "/RTC/Перепаковка/Динамическая.md",
              },
            ],
          },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Toxblh" }],
  },
});
