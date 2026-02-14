import test, { webkit, chromium } from '@playwright/test'

test("To launch a FlipKart website using webkit browser manually", async () => {
const chromiumInstance = await chromium.launch({channel:"msedge" });
const chromiumContext = await chromiumInstance.newContext();
const chromiumpage = await chromiumContext.newPage();
await chromiumpage.goto("https://www.redbus.in/");
console.log("Title of this Page is: "+chromiumpage.title())
console.log("The URL of the Page is: "+chromiumpage.url())

const webkitInstance = await webkit.launch({channel: 'webkit'});
const webkitContext = await webkitInstance.newContext();
const webkitpage = await webkitContext.newPage();
await webkitpage.goto("https://www.flipkart.com/")
console.log("Title of this Page is: "+webkitpage.title())
console.log("The URL of the Page is: "+webkitpage.url())

});

