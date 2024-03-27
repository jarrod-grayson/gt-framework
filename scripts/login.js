Given(/^driver baseUrl$/, function() {
  driver.baseUrl = baseUrl;
});

Given(/^driver '(.+)'$/, function(url) {
  driver.url(url);
});

When(/^input\('(.+)'\).setText\('(.+)'\)$/, function(selector, text) {
  driver.$(selector).setValue(text);
});

When(/^click\('(.+)'\)$/, function(selector) {
  driver.$(selector).click();
});

Then(/^waitFor\('(.+)'\).exists$/, function(selector) {
  driver.waitUntil(() => driver.$(selector).isDisplayed(), 5000);
});
