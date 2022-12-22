const CONFIG = {
  // profile setting
  profile: {
    name: 'Emmanuel Ejakpomewhe',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    discription: 'Software Engineer',
    linkedin: 'emmanuel-robinson-1a22171b0',
    email: 'emmanueloerobinson@gmail.com',
    github: 'emmanuelorobinson',
    // instagram: 'emmanueloerobinson',
  },
  projects: [
    {
      name: 'Rate My College Dubai',
      href: 'https://www.ratemycollegedubai.com/'
    },
    {
      name: 'Keemokazi TikTok Course',
      href: 'https://www.keemokaziconsulting.com/'
    }
  ],
  // blog setting
  blog: {
    title: 'emmanuel ejakpomewhe',
    description: 'welcome to emmanuel jjakpomewhe\'s blog',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: '',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'Emmanuel Ejakpomewhe'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
