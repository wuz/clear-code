const getShareImage = require("@jlengstorf/get-share-image").default;
const pageOrder = [
  { name: "Introduction", link: "/book/introduction" },
  { name: "Code Clarity", link: "/book/code-clarity" },
  { name: "Communication Clarity", link: "/book/communication-clarity" },
  { name: "Organization Clarity", link: "/book/organization-clarity" },
  { name: "Tools", link: "/book/tools" },
];

module.exports = {
  layout: "default.njk",
  eleventyComputed: {
    shareImage: (data) => {
      return (
        getShareImage({
          title: data.title,
          // tagline: ,
          cloudName: "wuz",
          imagePublicID: "v1614095289/clear_code_social",
          titleFont: "Noto Sans",
          taglineFont: "Noto Sans",
          tagline: "Clear Code by Wuz",
          textLeftOffset: 600,
          titleBottomOffset: 180,
          taglineTopOffset: 520,
          textColor: "232129",
        }) || "https://clearcode.guide/assets/logo.png"
      );
    },
    nextPage: (data) => {
      const currentPage = `/book/${data.page.fileSlug}`;
      const pages = pageOrder.map((page) => page.link);
      const nextPageIndex = pages.indexOf(currentPage);
      nextPage = pageOrder[0];
      if (nextPageIndex === pageOrder.length - 1) return;
      if (nextPageIndex !== -1) {
        nextPage = pageOrder[nextPageIndex + 1];
      }
      return `<strong>Next:</strong>&nbsp;<a href="${nextPage.link}">${nextPage.name}</a>`;
    },
    prevPage: (data) => {
      const currentPage = `/book/${data.page.fileSlug}`;
      const pages = pageOrder.map((page) => page.link);
      const nextPageIndex = pages.indexOf(currentPage);
      nextPage = pageOrder[0];
      if (nextPageIndex === 0) return;
      if (nextPageIndex !== -1) {
        nextPage = pageOrder[nextPageIndex - 1];
      }
      return `<strong>Prev:</strong>&nbsp;<a href="${nextPage.link}">${nextPage.name}</a>`;
    },
  },
};
