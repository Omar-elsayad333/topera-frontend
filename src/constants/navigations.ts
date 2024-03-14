import { Routes } from "@/routes/routes";

interface IMeta {
  navName: string;
}

interface INavigations {
  text: string;
  value: string;
  meta?: IMeta;
}

/*
 * This is header navigation data
 */
export const navigations: readonly INavigations[] = [
  {
    text: "home",
    value: Routes.home,
    meta: {
      navName: "/",
    },
  },
  {
    text: "roadmaps",
    value: Routes.roadmaps,
    meta: {
      navName: "/roadmaps",
    },
  },
  {
    text: "matching",
    value: Routes.matching,
    meta: {
      navName: "matching",
    },
  },
  {
    text: "news",
    value: Routes.news,
    meta: {
      navName: "/news",
    },
  },
  {
    text: "contact_us",
    value: Routes.contactUs,
    meta: {
      navName: "/contact_us",
    },
  },
];
