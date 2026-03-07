import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Shifa/i);
});

test('treatment page loads', async ({ page }) => {
  await page.goto('/en/treatments/heart-surgery-india');
  await expect(page.locator('h1')).toBeVisible();
});

test('Arabic locale loads', async ({ page }) => {
  await page.goto('/ar');
  await expect(page).toHaveTitle(/شفاء|Shifa/i);
});
