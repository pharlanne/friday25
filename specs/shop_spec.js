var assert = require('chai').assert;
var Shop = require('../shop.js');
var Record = require('../record.js');

describe("Shop", function(){


  it("should have a name",function(){
    var shop1 = new Shop("the shop","london");
    assert.equal("the shop", shop1.name);
  });

  it("should be in a city", function(){
    var shop1 = new Shop("the shop","london");
    assert.equal("london", shop1.city);
  });

  it("should have empty stock at the start", function(){
    var shop1 = new Shop("the shop","london",[]);
    assert.equal(0,shop1.stock.length);
  });

  it("should be able to add a record", function(){
    var record = {
      artist: "the eagles",
      title: "hotel california",
      price: 10
    }
    var shop1 = new Shop("the shop","london",[]);
    shop1.addRecord(record);
    assert.equal(1,shop1.stock.length);
  });

  it("should be able to list the stock", function(){
    var record1 = new Record("the eagles","hotel california",10);
    var records = [record1];
    var shop1 = new Shop("the shop","london",records);
    assert.deepEqual(records, shop1.listStock())
  });

  it("should be able to sell a record",function(){
      var record1 = {
        artist: "the eagles",
        title: "hotel california",
        price: 10
      }
      var records = [record1];
      var shop1 = new Shop("the shop","london",records);
      shop1.sellRecord(record1);
      assert.equal(0,shop1.stock.length);
  });

  it("balance should go up by the price of the record",function(){
      var record1 = {
        artist: "the eagles",
        title: "hotel california",
        price: 10
      }
      var records = [record1];
      var shop1 = new Shop("the shop","london",records);
      shop1.sellRecord(record1);
      assert.equal(10,shop1.balance);
  });
  it("should say the total value of the stock", function(){
    var record1 = {
      artist: "the eagles",
      title: "hotel california",
      price: 10
    }
    var records = [record1];
    var shop1 = new Shop("the shop","london",records);
      assert.equal(10, shop1.totalValue());
  });



})