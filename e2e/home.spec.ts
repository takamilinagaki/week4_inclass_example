import {test,expect} from '@playwright/test';

var homePage = 'http://localhost:3000'
var aboutPage = 'http://localhost:3000/about'
var gradesPage = 'http://localhost:3000/grades'

test.beforeAll(async () => {
    console.log('Before tests');
})

test.afterAll(async ()=> {
    console.log('After tests')
})

test.describe('Head tag area', () => {
    test('Contains the Head tag and its containts', async ({ page})=> {
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example #1");

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content','Generated by create next app')
        
        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href','/favicon.ico')
    })
})


test.describe("Main contest tests", () => {
      test('Should contain a heading welcome to the home page', async ({page})=> {
      
        await page.goto(homePage);
        await expect(page.locator('h1')).toContainText('Welcome to my home page');
      })

      test('Should contain a list to describe CRUD', async({page}) =>{
       await page.goto(homePage);
       await expect(page.locator('ul>li')).toContainText(['Create','Read','Update','Delete'])
      })
    })


    test.describe('Button tests', () => {
        test.skip('This is the info component', async({page})=>{
            await page.goto(homePage);

            await expect(page.locator('button')).toContainText("View all this info")
        })
    })

    test.describe('Footer tests', () => {
        test('should contain a footer on the home page', async({page})=>{
            await page.goto(homePage);

            await expect(page.locator('footer')).toContainText("In class Example #1");
        })
    })

    test.describe('Check About page navigates to the home page tests', () => {
        test("Should navigate to the home page from the about page", async({page})=>{
            await page.goto(aboutPage);

            await page.click('test=Go Back')

            await expect(page).toHaveURL(homePage);
        })
    })




