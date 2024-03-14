import { notFound } from "next/navigation";

// Next intl
import { getRequestConfig } from "next-intl/server";

// Constants
import { localesArray } from "@/constants";

// Can be imported from a shared config
const locales = localesArray;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./locale/${locale}.json`)).default,
  };
});
