const { GetCatologe, GetListProductFromCatologe } = require("./catologe")

const HomeCrawl = async function () {
    const ListCatologe = await GetCatologe();
    console.log(ListCatologe)
    for (let catologeItem = 0; catologeItem < ListCatologe.length; catologeItem++) {
        await GetListProductFromCatologe(ListCatologe[catologeItem].originalLink)
    }
}


module.exports = { HomeCrawl }