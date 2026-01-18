How to install:
npm init playwright@latest 

To run all tests in parallely in all browsers:
npx playwright test checkBox.spec.ts --headed

How to run from a specific browser:
npx playwright test checkBox.spec.ts --chromium
npx playwright test checkBox.spec.ts --firefox
npx playwright test checkBox.spec.ts --webkit


I used POM for this project. checkBox.ts file contains methods created by encapsulated locators and actions. checkBox.spec.ts file contains the test cases.
