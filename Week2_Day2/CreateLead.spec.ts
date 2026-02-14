import test, {chromium } from '@playwright/test'
test("To Create a Lead", async () => {
const chromiumInstance = await chromium.launch({headless:false, channel:"msedge" });
const chromiumContext = await chromiumInstance.newContext();
const chromiumpage = await chromiumContext.newPage();
await chromiumpage.goto("http://leaftaps.com/opentaps/control/main")
let username=await chromiumpage.locator("#username").fill("Demosalesmanager")
const password=await chromiumpage.locator("[name='PASSWORD']").fill("crmsfa")
const loginbutton = await chromiumpage.locator(".decorativeSubmit").click()
const icon = await chromiumpage.locator("text=CRM/SFA").click()
const leadsbutton = await chromiumpage.locator(`text='Leads'`).click()
const createLeadsbutton = await chromiumpage.locator(`text='Create Lead'`).click()
let firstname=await chromiumpage.locator("#createLeadForm_firstName").fill("Sivaranjani")
let lastname=await chromiumpage.locator("#createLeadForm_lastName").fill("K J")
let saluation=await chromiumpage.locator("[name='personalTitle']").fill("Ms")
let title=await chromiumpage.locator("#createLeadForm_generalProfTitle").fill("Associate")
let annualRevenue=await chromiumpage.locator("[name='annualRevenue']").fill("700000")
let department=await chromiumpage.locator("#createLeadForm_departmentName").fill("Computer Science")
const phonenumber=await chromiumpage.locator("#createLeadForm_primaryPhoneNumber").fill("9524542650")
const clickonLeadButton = await chromiumpage.locator(".smallSubmit").click()
chromiumpage.close()
})