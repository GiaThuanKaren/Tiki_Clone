import puppeteer from "puppeteer";
import { autoScroll } from "./function";
const PageURL = "https://tiki.vn/";
const GetCatologe = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(PageURL);

  const GetCatologe = await page.evaluate(() => {
    const CatologeItemEle = document.querySelectorAll(
      ".styles__StyledListItem-sc-w7gnxl-0.cjqkgR:nth-child(2) a"
    );
    let resutl: any = [];
    CatologeItemEle.forEach((item, index) => {
      const Img = item.querySelector("img");
      resutl.push({
        link: item.getAttribute("href")?.replace("https://tiki.vn", ""),
        title: item.getAttribute("title"),
        img: Img?.getAttribute("src")?.toString(),
        originalLink: item.getAttribute("href"),
      });
    });
    return resutl;
  });
  console.log(GetCatologe);
  await browser.close();
  return GetCatologe;
};

const GetDetailCatologe = async function (link: string) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(link);

  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let i=0;
      var timer= setInterval(()=>{
        i++;
        if(i>10){
          clearInterval(timer);
          resolve();
        }
      },100)
    });
  });

  await browser.close();
};

// GetCatologe();
GetDetailCatologe("https://tiki.vn/dien-thoai-may-tinh-bang/c1789");
