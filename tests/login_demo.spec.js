import {test,expect} from '@playwright/test'

test('Demo for Login',async({page})=>{
    await page.goto('https://demo.applitools.com/')
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('SunilBhatt')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')
    await page.getByRole('link', { name: 'Sign in' }).click()
})