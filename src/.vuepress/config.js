module.exports = {
  title: "Intro to Programming",
  description: "A concise introduction to general purpose programming concepts",
  dest: "docs",
  base: "/intro-to-programming/",
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      "/": [
        ""
      ]
    }
  }
};
