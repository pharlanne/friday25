var assert = require('chai').assert;
var Record = require("../record.js");



describe("Record", function(){

it("should have an artist name", function(){
  var record1 = new Record("lynyrd skynyrd","sweet home alabama", 5);
  assert.equal("lynyrd skynyrd", record1.artist);
});

it("should have a title", function(){
  var record1 = new Record("the eagles","hotel california", 8);
  assert.equal("hotel california", record1.title);
});
it("should have a price", function(){
  var record1 = new Record("eric clapton","layla", 8);
  assert.equal(8, record1.price);
});
})