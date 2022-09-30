import { test, expect } from '@playwright/test';

const count = 500
function t(target){

}
test('Imba 500 clicks', async ({ page }) => {
  await page.goto('http://127.0.0.1:4173/');

  // create a locator
  const button1 = page.locator('data-testid=imba-1');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(button1).toHaveText("1")

  // Click the get started link.
  await Promise.all(Array.from(Array(500).keys()).map(()=> page.locator('data-testid=imba-1').click()))

  // Expects the URL to contain intro.
  await expect(button1).toHaveText("501")
});

test('React 500 clicks', async ({ page }) => {
	await page.goto('http://127.0.0.1:4173/');
  
	// create a locator
	const button1 = page.locator('data-testid=react-1');
  
	// Expect an attribute "to be strictly equal" to the value.
	await expect(button1).toHaveText("1")
  
	// Click the get started link.
	await Promise.all(Array.from(Array(500).keys()).map(()=> page.locator('data-testid=react-1').click()))
  
	// Expects the URL to contain intro.
	await expect(button1).toHaveText("501")
  });
  