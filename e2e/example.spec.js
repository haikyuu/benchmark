import { test, expect } from '@playwright/test';

async function runTest(page, target, count = 500){
	await page.goto('http://127.0.0.1:4173/');

	// create a locator
	const button1 = page.locator(`data-testid=${target}-1`);
  
	// Expect an attribute "to be strictly equal" to the value.
	await expect(button1).toHaveText("1")
  
	// Click the get started link.
	await Promise.all(Array.from(Array(count).keys()).map(()=> page.locator(`data-testid=${target}-1`).click()))
  
	// Expects the URL to contain intro.
	await expect(button1).toHaveText(`${count + 1}`)
}

test('Imba 500 clicks', async ({ page }) => {
  await runTest(page, "imba")
});
test('React 500 clicks', async ({ page }) => {
  await runTest(page, "react")
});
test('Svelte 500 clicks', async ({ page }) => {
  await runTest(page, "svelte")
});