import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/pelanggan.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.getByRole('link', { name: 'Produk' }).click();
  await page.getByRole('link', { name: 'White Oak Lurus Kingwood Rp' }).click();
});