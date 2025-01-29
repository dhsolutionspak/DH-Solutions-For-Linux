// utils/loadMessages.js
export async function loadMessages(locale) {
  // ‘locale’ would be "en" or "ar"
  switch (locale) {
    case "ar":
      return (await import("@/locales/ar.json")).default;
    case "en":
      return (await import("@/locales/en.json")).default;
    default:
      return (await import("@/locales/en.json")).default;
  }
}
