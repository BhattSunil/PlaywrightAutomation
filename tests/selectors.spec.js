import {test,expect} from '@playwright/test';

test('selectors demo', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    //Using any  object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('sunil_bhatt')  
    //Using XPath
    await page.locator('xpath=//input[@name="password"]').fill("Password123")
    await page.locator('input[@id="user-name"').fill("Sonu")
})