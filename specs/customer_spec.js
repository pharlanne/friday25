var assert = require('chai').assert;
var Shop = require('../shop.js');
var Record = require('../record.js');
var Customer = require('../customer.js')

describe("Customer", function(){

  it("shoud have a name", function(){
    var customer1 = new Customer("bob","jazz",50);
    assert.equal("bob", customer1.name)
  });
  it("shoud have a collection", function(){
    var customer1 = new Customer("bob","jazz",50);
    assert.equal("jazz", customer1.collection);
  });
  it("shoud have a wallet", function(){
   var customer1 = new Customer("bob","jazz",50);
    assert.equal(50, customer1.wallet)
  });
  it("shoud be able to buy a record", function(){
    var customer1 = new Customer("bob",[],50);
    var record1 = {
      artist: "lynyrd skynyrd",
      title: "sweet home alabama",
      price: 10
    }
    var records = [record1];
    var shop1 = new Shop("the shop","london",records);
    customer1.buyRecord(record1);
    assert.equal(1, customer1.collection.length)
  });
  it("wallet should go down by record price when bought", function(){
    var customer1 = new Customer("bob",[],50);
    var record1 = {
    artist: "the eagles",
    title: "hotel california",
    price: 10
      }
    var records = [record1];
    var shop1 = new Shop("the shop","london",records);
    customer1.buyRecord(record1);
    assert.equal(40, customer1.wallet);
  });
  it("shoud be able to sell a record", function(){
    var record1 = {
      artist: "the eagles",
      title: "hotel california",
      price: 10
    }
    var customer1 = new Customer("bob",[record1],50);
    var shop1 = new Shop("the shop","london",[]);
    customer1.sellRecord(record1);
    assert.equal(0, customer1.collection.length)
  });
  it("wallet should go up by record price when sold", function(){
    var record1 = {
    artist: "the eagles",
    title: "hotel california",
    price: 10
      }
    var customer1 = new Customer("bob",[record1],40);
    var shop1 = new Shop("the shop","london",[]);
    console.log("***********")
    customer1.sellRecord(record1);
    console.log("***********")
    assert.equal(50, customer1.wallet);
  });
  
  it("should be able to list the collection", function(){
    var record1 = new Record("lynyrd skynyrd","sweet home alabama",10);
    var records = [record1];
    var shop1 = new Shop("the shop","london",records);
    assert.equal(records, shop1.listStock())
  });
});