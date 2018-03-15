var chai =  require('chai');
var assert = chai.assert;
var nock = require('nock');

var http = require('../../app/input/http.js');

var mockUpUrl = "http://mockurl";
var mockUpAction = "/api";
var mockResponse = "{test: 'test'}";

var testObject = new http({
  'url': mockUpUrl+mockUpAction
});

var testMockApi = nock(mockUpUrl)
                .get(mockUpAction)
                .reply(200, mockResponse);

describe('input/http', function() {
  describe('.init()', function() {
      it('should save url from config', function() {
          assert.isTrue(mockUpUrl+mockUpAction === testObject.url);
      });
  });

  describe('.get()', function() {
    it('should return body from url', function() {
    testObject.get().then(function (v) {
        assert.isTrue(v === mockResponse);
      }).catch((err) => {
        console.log(err);
        assert.isTrue(false);
      });
    });
  });
});
