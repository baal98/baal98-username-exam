const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
  await page.goto('https://baal98-exam.onrender.com/Add-Product');
  const input = await page.$('input#name');
  expect(input).toBeTruthy();
});

