
/*import { chromium, test, expect, firefox, webkit } from '@playwright/test';

test('nonfixture', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://bixitacademy.com/SeleniumPracticePage.html');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/SeleniumPracticePage/);

  await browser.close();
});

// Launch browser
// Create context
// Create page
// Close browser
// Handle cleanup


*/
import { test, expect } from '@playwright/test';


test('fixture login test', async ({ page }) => {   // Playwright gives page automatically = fixture
  // Hey Playwright, give me a page ready to use.

  await page.goto('https://bixitacademy.com/SeleniumPracticePage.html');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin');
  await page.click('#loginBtn');

});

// Fixtues LifeCycle

// Test Starts - Fixture Setup - Object Creation - Injected into Test - Test Execution - Fixture CleanUp - Test Ends

// 1. Built-Fixtures

//   page            Browser tab
//   browser         Browser instance
//   request         API testing
//   context         Browser context
//   browserName     chromium/firefox/webkit

// Custom Fixtures



// Playwright Test Runner automatically provides:

// Browser
// Context
// Page
// Parallel execution support
// Retry logic
// Tracing

/*
Difference between manual and fixture?

Answer like this:

Manual mode requires us to create and manage browser, context, and page manually, whereas 
fixture mode provides these objects automatically through Playwright test runner. 
Fixture mode reduces boilerplate code, improves scalability, and is preferred in real automation frameworks.



| Fixture     | Meaning               |
| ----------- | --------------------- |
| page        | single tab            |
| browser     | full browser          |
| context     | isolated session      |
| request     | API testing           |
| browserName | chrome/firefox/webkit |

*/