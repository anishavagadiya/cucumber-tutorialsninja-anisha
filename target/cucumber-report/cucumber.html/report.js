$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Test",
  "description": "As a user I should navigate to Desktop page successfully",
  "id": "desktop-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5746348901,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I will verify products are arranged in Alphabetical order",
  "description": "",
  "id": "desktop-test;i-will-verify-products-are-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in Desktops page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mousehover to desktop and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify products are arranged in Alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageStep.iAmInDesktopsPage()"
});
formatter.result({
  "duration": 264209601,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMousehoverToDesktopAndClick()"
});
formatter.result({
  "duration": 170312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20071984501,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.iVerifyProductsAreArrangedInAlphabeticalOrder()"
});
formatter.result({
  "duration": 20133749501,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#input\\-sort\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b281c7d9a5eebd70920d838448a87ac7, findElement {using\u003did, value\u003dinput-sort}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\vagad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61129}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61129/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b281c7d9a5eebd70920d838448a87ac7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat com.tutorialsninja.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:170)\r\n\tat com.tutorialsninja.pages.DesktopPage.arrangeProductInDescendingOrder(DesktopPage.java:50)\r\n\tat com.tutorialsninja.cucumber.steps.DesktopPageStep.iVerifyProductsAreArrangedInAlphabeticalOrder(DesktopPageStep.java:24)\r\n\tat ✽.Then I verify products are arranged in Alphabetical order(desktop.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 206455101,
  "status": "passed"
});
formatter.before({
  "duration": 4164798400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I will verify products are added to shopping cart successfully",
  "description": "",
  "id": "desktop-test;i-will-verify-products-are-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select currency from drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mousehover to desktop and click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select menu \"Show All DeskTops\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select position Name: A to Z from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Hp Product page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the product text",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select year \"2022\" month \"November\" and date \"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I change product quantity",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify product is added to Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Shopping Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify Shopping Cart text",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify product name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the delivery date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Model number",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Total",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.iSelectCurrencyFromDropDown()"
});
formatter.result({
  "duration": 652979600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMousehoverToDesktopAndClick()"
});
formatter.result({
  "duration": 152125100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All DeskTops",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 794327500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.iSelectPositionNameAToZFromSortByDropdown()"
});
formatter.result({
  "duration": 465335400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.iClickOnHpProductPage()"
});
formatter.result({
  "duration": 1271149099,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.verifyTheProductText()"
});
formatter.result({
  "duration": 29392700,
  "error_message": "org.junit.ComparisonFailure: HP LP3065 expected:\u003cHP LP3065[]\u003e but was:\u003cHP LP3065[ Product not display]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.tutorialsninja.cucumber.steps.DesktopPageStep.verifyTheProductText(DesktopPageStep.java:44)\r\n\tat ✽.And Verify the product text(desktop.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    },
    {
      "val": "November",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 48
    }
  ],
  "location": "DesktopPageStep.iSelectYearMonthAndDate(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.iChangeProductQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.verifyProductIsAddedToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.iClickOnShoppingCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.verifyShoppingCartText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.verifyProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopPageStep.verifyTheDeliveryDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.verifyModelNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageStep.verifyTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 158460100,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage Test",
  "description": "As a user I want to navigate to Desktop page successfully",
  "id": "homepage-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4637679600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to desktops page successfully",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mousehover to desktop and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Desktops\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMousehoverToDesktopAndClick()"
});
formatter.result({
  "duration": 176812299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 994236300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 8
    }
  ],
  "location": "HomePageSteps.verifyText(String)"
});
formatter.result({
  "duration": 36419501,
  "status": "passed"
});
formatter.after({
  "duration": 16901,
  "status": "passed"
});
formatter.before({
  "duration": 5896613101,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to Laptops and Notebooks page successfully",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover to laptops and notesbook page and click",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify \"Laptops \u0026 Notebooks\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopsAndNotesbookPageAndClick()"
});
formatter.result({
  "duration": 184649500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 667156400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 10
    }
  ],
  "location": "HomePageSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 35652800,
  "status": "passed"
});
formatter.after({
  "duration": 24800,
  "status": "passed"
});
formatter.before({
  "duration": 4361031601,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should navigate to Components page successfully",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover to Components page and click",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select menu \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify \"Components\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25401,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToComponentsPageAndClick()"
});
formatter.result({
  "duration": 165684300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 501824201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 10
    }
  ],
  "location": "HomePageSteps.iVerifyPage(String)"
});
formatter.result({
  "duration": 43082200,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
formatter.uri("laptopsandnotes.feature");
formatter.feature({
  "line": 2,
  "name": "Laptops And Notebooks Test",
  "description": "As a user I should navigate to Laptops And Notebooks page successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4285362800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I will verify products are displayed in high to low order",
  "description": "",
  "id": "laptops-and-notebooks-test;i-will-verify-products-are-displayed-in-high-to-low-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to LaptopsAndNotebooks tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify product are arranged in high to low order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 98200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverToLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 204269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 656357199,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyProductAreArrangedInHighToLowOrder()"
});
formatter.result({
  "duration": 700860499,
  "status": "passed"
});
formatter.after({
  "duration": 26500,
  "status": "passed"
});
formatter.before({
  "duration": 4383532000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I will verify that user has placed order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;i-will-verify-that-user-has-placed-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select currency from drop down",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to LaptopsAndNotebooks tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I and selecting Price (High \u003e Low) from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on MacBook Link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify “MacBook” text",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify “MacBook” product name",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I update product quantity",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify Total price",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify Checkout text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Guest Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter telephone number",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter address",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter city",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter postcode",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter country",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter state",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I add comments",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on checkout continue button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26101,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageStep.iSelectCurrencyFromDropDown()"
});
formatter.result({
  "duration": 681340499,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverToLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 172289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 611849399,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAndSelectingPriceHighLowFromSortByDropdown()"
});
formatter.result({
  "duration": 442944400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnMacBookLink()"
});
formatter.result({
  "duration": 1385122400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyMacBookText()"
});
formatter.result({
  "duration": 44172801,
  "error_message": "org.junit.ComparisonFailure: MacBook expected:\u003cMacBook[]\u003e but was:\u003cMacBook[ Product not display]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.tutorialsninja.cucumber.steps.LaptopsAndNotebooksSteps.verifyMacBookText(LaptopsAndNotebooksSteps.java:35)\r\n\tat ✽.And Verify “MacBook” text(laptopsandnotes.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopPageStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyMacBookProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iUpdateProductQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyTotalPrice()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyCheckoutText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterFirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterTelephoneNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterCity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterPostcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterCountry()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterState()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAddComments()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 242956501,
  "status": "passed"
});
formatter.uri("myaccountstest.feature");
formatter.feature({
  "line": 2,
  "name": "MyAccounts Test",
  "description": "As a user I want to test my accounts test",
  "id": "myaccounts-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4556621000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "myaccounts-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"My Account\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Register\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Register Account\" text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 12
    }
  ],
  "location": "MyAccountsPageSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 40085648000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/span[text()\u003d\u0027My Account\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5cdc548f15fde0949712a5221efde8dc, findElement {using\u003dxpath, value\u003d/span[text()\u003d\u0027My Account\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\vagad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61398}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61398/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5cdc548f15fde0949712a5221efde8dc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:81)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyAccount(HomePage.java:82)\r\n\tat com.tutorialsninja.cucumber.steps.MyAccountsPageSteps.iClickOnTab(MyAccountsPageSteps.java:12)\r\n\tat ✽.When I click on \"My Account\" tab(myaccountstest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 8
    }
  ],
  "location": "MyAccountsPageSteps.verifyTextIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 171653701,
  "status": "passed"
});
formatter.before({
  "duration": 3909446500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "myaccounts-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"My Account\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select \"Login\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Returning Customer\" text is displayed on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 12
    }
  ],
  "location": "MyAccountsPageSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 38108550600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: /span[text()\u003d\u0027My Account\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:81)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyAccount(HomePage.java:82)\r\n\tat com.tutorialsninja.cucumber.steps.MyAccountsPageSteps.iClickOnTab(MyAccountsPageSteps.java:12)\r\n\tat ✽.When I click on \"My Account\" tab(myaccountstest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 8
    }
  ],
  "location": "MyAccountsPageSteps.verifyTextIsDisplayedOnLoginPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13751200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [98e32db629f80b4c0dc06caee56cb613, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\vagad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61604}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61604/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 98e32db629f80b4c0dc06caee56cb613\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:363)\r\n\tat com.tutorialsninja.cucumber.Hooks.tearDown(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6566404800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User register to account successfully",
  "description": "",
  "id": "myaccounts-test;user-register-to-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on \"My Account\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"Register\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter lasttname",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter emaidId",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter telephone",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Subscribe radio button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on privacy policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on register continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the message “Your Account Has Been Created!”",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select \"Logout\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify \"Account Logout\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Continue button on logout page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 12
    }
  ],
  "location": "MyAccountsPageSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 29440729100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: /span[text()\u003d\u0027My Account\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:81)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyAccount(HomePage.java:82)\r\n\tat com.tutorialsninja.cucumber.steps.MyAccountsPageSteps.iClickOnTab(MyAccountsPageSteps.java:12)\r\n\tat ✽.When I click on \"My Account\" tab(myaccountstest.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterFirstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterLasttname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterEmaidId()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterTelephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iEnterConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnSubscribeRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnRegisterContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.verifyTheMessageYourAccountHasBeenCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 10
    }
  ],
  "location": "MyAccountsPageSteps.iVerifyIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountsPageSteps.iClickOnContinueButtonOnLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4634100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4ee097aba36ec40339dfcafee573a3db, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\vagad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61938}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61938/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4ee097aba36ec40339dfcafee573a3db\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:363)\r\n\tat com.tutorialsninja.cucumber.Hooks.tearDown(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});