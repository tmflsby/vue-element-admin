import defaultSettings from "@/settings";

const title = defaultSettings.title || "Vue Element Admin";

const getPageTitle = (pageTitle) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
};

export default getPageTitle;
