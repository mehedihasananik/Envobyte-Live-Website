import { apiEndpoint } from "./config";
// homepage
const bannerApi = `${apiEndpoint}/home_banner`;
const brandsApi = `${apiEndpoint}/home_brand`;
const servicesApi = `${apiEndpoint}/sevice_items`;
const about_us_homeApi = `${apiEndpoint}/about_us_home`;
const sevice_portfolioApi = `${apiEndpoint}/sevice_portfolio`;
const serviceApi = `${apiEndpoint}/service`;
const testimonials_itemsApi = `${apiEndpoint}/testimonials_items`;
const faqApi = `${apiEndpoint}/faq`;
const user_feedbackApi = `${apiEndpoint}/user_feedback`;

// services page
const serviceListApi = `${apiEndpoint}/service`;
const allsServiceItemsApi = `${apiEndpoint}/sevice_items`;

// portfolio page
const searchServiceApi = `${apiEndpoint}/search_sevice_category`;
const search_sevice_categoryAll = `${apiEndpoint}/search_sevice_category/all`;

// about page
const aboutUsApi = `${apiEndpoint}/aboutus_page`;
const aboutUsItemApi = `${apiEndpoint}/aboutus_page_item`;

// register page page

// login
const loginApi = `${apiEndpoint}/user_login`;

export {
  bannerApi,
  brandsApi,
  servicesApi,
  about_us_homeApi,
  sevice_portfolioApi,
  serviceApi,
  testimonials_itemsApi,
  faqApi,
  user_feedbackApi,
  serviceListApi,
  allsServiceItemsApi,
  loginApi,
  searchServiceApi,
  search_sevice_categoryAll,
  aboutUsApi,
  aboutUsItemApi,
};
