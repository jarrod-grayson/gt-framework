Feature: Guidewire PolicyCenter Auto Loan Application

Background:
  * configure driver = { type: 'chromedriver' }
  * def baseUrl = 'https://your-guidewire-url/login'

Scenario: Login to Guidewire PolicyCenter
  Given driver baseUrl
  And driver 'https://your-guidewire-url/login'
  When input('#username').setText('your_username')
  And input('#password').setText('your_password')
  And click('#loginButton')
  Then waitFor('#dashboard').exists
