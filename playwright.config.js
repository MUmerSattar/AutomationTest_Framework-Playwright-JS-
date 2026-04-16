// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  use: {
     baseURL: 'https://rahulshettyacademy.com/client',
    headless: true,
    screenshot: 'on',
    actionTimeout:10000,
    navigationTimeout:15000,
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: null,
  },

  /* Configure projects for major browsers */
  projects: [
      {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
      },
    },


    /* Test against mobile viewports. */
//  {
//       name: 'Mobile Chrome',
//       use: {
//         ...devices['Pixel 5'],
//       },
//     },


    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],

});

