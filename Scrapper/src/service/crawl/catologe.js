const puppeteer = require("puppeteer");
const autoScroll = require("./function");
const PageURL = "https://tiki.vn/";
const GetCatologe = async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(PageURL);

    const GetCatologe = await page.evaluate(() => {
        const CatologeItemEle = document.querySelectorAll(
            ".styles__StyledListItem-sc-w7gnxl-0.cjqkgR:nth-child(2) a"
        );
        let resutl = [];
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
}

const GetListProductFromCatologe = async function (link, numberPage = 3) {
    let Product = [];
    for (var numpage = 1; numpage <= numberPage; numpage++) {

        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        const url = `${link}?page=${numpage}`
        await page.goto(url);
        await autoScroll(page);
        const ListProduct = await page.evaluate(async () => {
            let resutl = [];

            const ListProductEle = document.querySelectorAll(".ProductList__Wrapper-sc-1dl80l2-0.iPafhE .product-item")
            ListProductEle.forEach((item, index) => {
                const urlParams = new URLSearchParams(window.location.search);
                const myParam = urlParams.get('page');
                let img = "";
                img = item?.querySelector(".thumbnail .image-wrapper img")?.getAttribute("src");
                let altName = item?.querySelector(".thumbnail .image-wrapper img")?.getAttribute("alt");

                let displayPrice = item?.querySelector(".price-discount__price")?.innerHTML.replace("<sup> ₫</sup>", "");
                resutl.push({
                    img,
                    altName,
                    displayPrice,
                    page:myParam

                })

            })

            return resutl;
        })
        console.log(ListProduct)
        await browser.close();
        Product = [...Product, ...ListProduct];
    }
    
    return Product;


}


module.exports = { GetCatologe, GetListProductFromCatologe };