import { Page } from "puppeteer";

export const autoScroll = async function (page: Page) {
  await page.evaluate(async () => {
    new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
};
