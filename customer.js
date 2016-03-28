var Customer = function(name, collection,wallet){
  this.name = name;
  this.collection = collection;
  this.wallet = wallet;

};

Customer.prototype = {
  buyRecord: function(record){
    this.collection.push(record);
    this.wallet -= record.price;
  },
  sellRecord: function(record){
    for (var i = 0; i < this.collection.length; i++) {
      if(this.collection[i].title === record.title){
        this.collection.splice(i,1);
        this.wallet += record.price;
      }
      return this.wallet;
    }
  },
 listCollection: function(){
  // for (var i = 0; i < this.stock.length; i++) {
  //  var record = this.collection[i];
  //  console.log(record.artist + "," + record.title + "," + record.price);
  //  }
   return this.collection;
 },

}

module.exports = Customer;
