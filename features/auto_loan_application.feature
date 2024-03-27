Scenario: Apply for a New Auto Loan Policy
  Given driver baseUrl
  And driver 'https://your-guidewire-url/policycenter'
  When click('#newPolicyButton')
  And waitFor('#policyForm').exists
  And input('#policyType').setText('Auto Loan')
  And input('#applicantName').setText('John Doe')
  And input('#vehicleMake').setText('Toyota')
  And input('#vehicleModel').setText('Camry')
  And input('#vehicleYear').setText('2022')
  And input('#vehicleVIN').setText('ABC123XYZ456')
  And click('#submitApplicationButton')
  Then waitFor('#applicationConfirmation').exists
