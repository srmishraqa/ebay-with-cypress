# ebay Test Automation Using Cypress

> This test automation framework of ebay ui scenarios is created using cypress which uses javascript language.

> The pre-requisites which needs to be installed are **nodejs** , **npm** and **chrome browser**

# Structure of the framework

> In cypress/e2e directory we have the spec file which will have it blocks and each it block gets treated as one scenario

> We also have a beforeEach block which will get executed before each scenario run as a pre-requisite

> Inside each block we would be calling a bunch of functions which are written cypress/support/allFunctions directory

> Each function written in different files of cypress/support/allFunctions directory will be using locators which are written either using css selector or xpath inside cypress/support/locators directory

> For test data we are using cypress/support/testData/testData.js file which is imported inside the spec file and the data is getting passed while calling the functions

> In cypress/fixtures we have constant files which will be called using cy.fixture()

> .prettierrc.js in the root directory will take care of the formatting , we can **npm run format** to format the js files

> cypress.config.js file will take care of all the cypress related configs

# Execution Process

> Once we download the zip file , we need to extract the directory

> Once extracted , we need to run **npm install** and it will install all the required node modules

> Now we can run **npm run test** to execute all test case

> Once the test run gets finished , it will generate a mocha awesome html report (index.html) which can be found in cypress/report/html/index.html directory. The html file can be opened and the test results can be viewed

> If we wanted to check the execution videos , we can find that as well under cypress/videos directory

For any clarity , follow-up questions please reach out to me at the following email ID

> soumya_rm@outlook.com
