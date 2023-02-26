const config = {
  gatsby: {
    pathPrefix: '/test_githubpages',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/nehan_logo_RGB_formanual.png',
    // 'https://lh5.googleusercontent.com/A2_AQCs9Lza349YwqceCvEGXMxMfmdBEqS0JxCP-cCju4XgYOn3nldy-54FEMsxqze60mFo4ApnYjWR-z0y8pA=w16383',
    // 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://moonfish.nehan.io/',
    title:
      // "<a href='https://moonfish.nehan.io/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
      '<a>nehanで始める快適な分析生活</a>',
    // githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: 'https://moonfish.nehan.io/',
    // tweetText: '',
    // social: `<li>
    //     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
    //       <div class="twitterBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
    //       </div>
    //     </a>
    //   </li>
    // 	<li>
    //     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [
      { text: 'ログイン', link: 'https://sunfish.nehan.io/projects' },
      { text: 'お問い合わせ', link: 'https://8rgf0bp8.paperform.co/' },
      { text: 'リリースノート', link: 'https://moonfish.nehan.io/release_note' },
    ],
    search: {
      enabled: true,
      indexName: 'test',
      algoliaAppId: 'YQW18VRQDB',
      algoliaSearchKey: 'f3919a004351627d86ae286742d8dbae',
      algoliaAdminKey: 'e1c4e1df68755cf2260af5a7292b3659',
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/system',
      '/support_contets',
      '/data_import',
      '/data_analytics',
      '/data_export',
      '/ml',
      '/visualize',
      '/dashboard',
      '/schadule',
      '/schedule_notification',
      '/management_content',
      '/against_blackbox',
      '/other_function',
    ],
    // collapsedNav: [''],
    links: [{ text: 'サービスページ', link: 'https://moonfish.nehan.io/' }],
    frontLine: false, //ディレクトリ最小化on/off
    ignoreIndex: false,
    title: '',
    // "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
