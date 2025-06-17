export async function blocker(page) {
  await page.route("**/*", (route) => {
    const blockedDomains = [
      "googleads",
      "doubleclick.net",
      "googlesyndication",
      "adservice.google",
      "adsbygoogle",
    ];
    if (
      blockedDomains.some((domain) => route.request().url().includes(domain))
    ) {
      return route.abort();
    }
    route.continue();
  });
}
