// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2804ae14-b835-4630-ac14-44f01a5a8c28',
    name: 'Windows Azure MSDN - Visual Studio Ultimate',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '4b1066c2-4cbb-4eda-800a-78581bcb602b',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_APIAPP_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/resourcegroups/xplatapiappDeploy2903?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/resourceGroups/xplatapiappDeploy2903\",\"name\":\"xplatapiappDeploy2903\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '195',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1180',
  'x-ms-request-id': 'a5b11032-26e0-4a6e-a0f6-1684d1d239a7',
  'x-ms-correlation-request-id': 'a5b11032-26e0-4a6e-a0f6-1684d1d239a7',
  'x-ms-routing-request-id': 'WESTUS:20150615T232124Z:a5b11032-26e0-4a6e-a0f6-1684d1d239a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Jun 2015 23:21:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/providers/Microsoft.AppService/deploymenttemplates/Microsoft.Azure.AppService.ApiApps.TestBench/listmetadata?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":{\"microserviceId\":\"Microsoft.Azure.AppService.ApiApps.TestBench\",\"displayName\":\"Test Bench\",\"appSettings\":[],\"dependsOn\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9dfd547a-ee4a-4f82-923e-2bd666222396',
  'x-rp-requesturi': 'https://apiapp-rp-prod-all.msp.windows.net/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/providers/Microsoft.AppService/deploymenttemplates/Microsoft.Azure.AppService.ApiApps.TestBench/listmetadata?api-version=2015-03-01-preview',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14724',
  'x-ms-correlation-request-id': 'c27c1acd-bd56-4e8a-a985-ee6d87d8dca6',
  'x-ms-routing-request-id': 'WESTUS:20150615T232125Z:c27c1acd-bd56-4e8a-a985-ee6d87d8dca6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Jun 2015 23:21:24 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatapiappDeploy2903'];};