import test ,{page,expect} from '@playwright/test'

test('Assertions test',async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause();
    
    //Assertionse
    //Check the element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1) 

    //Check Element is hidden or visible
     await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
     await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

     //Checking the element enabled or disabled
     await expect(page.getByRole('heading',{name:'The Kitchen'})).toBeEnabled()
     await expect.soft(page.getByRole('heading',{name:'The Kitchen'})).toBeDisabled()
})