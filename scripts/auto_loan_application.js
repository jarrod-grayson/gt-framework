Scenario: Apply for a New Auto Loan Policy
  Given(/^driver baseUrl$/, function() {
    driver.baseUrl = baseUrl;
  });

  Given(/^driver '(.+)'$/, function(url) {
    driver.url(url);
  });

  When(/^click\('(.+)'\)$/, function(selector) {
    driver.$(selector).click();
  });

  Then(/^waitFor\('(.+)'\).exists$/, function(selector) {
    driver.waitUntil(() => driver.$(selector).isDisplayed(), 5000);
  });

  And(/^input\('(.+)'\).setText\('(.+)'\)$/, function(selector, text) {
    driver.$(selector).setValue(text);
  });
