module.exports = {
  title: '原木',
  description: '',
  less: {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      {
        loader: 'less-loader', // compiles Less to CSS
      },
    ],
  },  
  themeConfig: {
    logo: '/assets/logo.svg',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档', link: '/docs/',items: [
          { text: 'javascript', text: 'js仓库', link: '/docs/javascript/' },
          { text: 'css', text: 'css仓库', link: '/docs/css/' },
          { text: 'html', text: 'html仓库', link: '/docs/html/' },
          { text: 'python', text: 'python仓库', link: '/docs/python/' },
          { text: 'other', text: '其他资料', link: '/docs/others/' },
        ]
      },
      {
        text: '文档1', link: '/docs1/'
      },
      { text: 'Github', link: 'https://google.com' },
    ],
    sidebar: {
      '/docs/javascript/': [{
        title: 'javascript仓库',
        collapsable: false,
        children: [
          ['js', 'js笔记'],
          {
            title: "typescdript",
            collapsable: false,
            children: [
              'TypeScript/01-types',
              'TypeScript/02-declare',
              'TypeScript/03-interface',
              'TypeScript/04-class',
              'TypeScript/05-function',
              'TypeScript/06-generic',
              'TypeScript/07-inference',
              'TypeScript/08-advance',
            ]
          },
          {
            title: "数据结构与算法",
            collapsable: false,
            children: [
              'DataStructures_Algorithms/Algorithms/recursion',
              'DataStructures_Algorithms/Algorithms/sort',
              'DataStructures_Algorithms/DataStructures'
            ]
          }
        ]
      }],
      '/docs/css/': [{
        title: 'css',
        collapsable: false,
      }],
      '/docs/pythons/': [{
        title: 'javascript仓库',
        collapsable: false,
        children: [
          ['js', 'js笔记'],
          {
            title: "typescdript",
            collapsable: false,
            children: [
              'TypeScript/01-types',
              'TypeScript/02-declare',
              'TypeScript/03-interface',
              'TypeScript/04-class',
              'TypeScript/05-function',
              'TypeScript/06-generic',
              'TypeScript/07-inference',
              'TypeScript/08-advance',
            ]
          },
          {
            title: "数据结构与算法",
            collapsable: false,
            children: [
              'DataStructures_Algorithms/Algorithms/recursion',
              'DataStructures_Algorithms/Algorithms/sort',
              'DataStructures_Algorithms/DataStructures'
            ]
          }
        ]
      }],
      '/docs1/': [{
        title: 'javascript仓库1',
        collapsable: false,
        children: ['one']
      }],
    },
  }

}