import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('heading', { name: 'Wikipedia The Free Encyclopedia' }).getByText('Wikipedia').click();
  await page.getByRole('link', { name: 'English 6 580 000+ articles' }).click();
  await page.getByText('Lee Smith').click();
  await page.getByRole('navigation', { name: 'Contribute' }).getByRole('link', { name: 'Help' }).click();
  await page.getByRole('region', { name: 'Stuck?' }).getByRole('link', { name: 'frequently asked questions' }).click();
});