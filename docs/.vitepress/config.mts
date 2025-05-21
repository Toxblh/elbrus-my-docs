import { defineConfig } from "vitepress";
import { telegram, vk } from './utils/icons'

export default defineConfig({
  title: "Эльбрус Wiki",
  description: "Эльбрус Wiki Toxblh. Личная шпаргалка",
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "О Вики", link: "/about" },
    ],

    sidebar: [
      {
        text: "RTC",
        items: [
          {
            text: "Установка",
            link: "/RTC/Использование",
          },
          {
            text: "Перепаковка",
            items: [
              {
                text: "Cтатический бинарник",
                link: "/RTC/Перепаковка/Статическая",
              },
              {
                text: "Динамический бинарник",
                link: "/RTC/Перепаковка/Динамическая",
              },
            ],
          },
        ],
      },
    ],

    logo: { src: '/assets/logo.png', width: 24, height: 24, alt: 'Эльбрус Wiki' },
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/toxblh_linux'
      },
      {
        icon: 'github',
        link: 'https://github.com/Toxblh'
      }
    ],
  },
});
