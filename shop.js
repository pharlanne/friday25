var Shop = function(name,city,stock){
  this.name = name;
  this.city = city;
  this.stock = stock;
  this.balance=0;
  };
  
  Shop.prototype ={
   addRecord: function(record){
    this.stock.push(record);
  },

  listStock: function(){
   for (var i = 0; i < this.stock.length; i++) {
    var record = this.stock[i];
    console.log(record.artist + "," + record.title + "," + record.price);
    }
    return this.stock;
  },
   sellRecord: function(record){
    for (var i = 0; i < this.stock.length; i++) {
      if(this.stock[i].title === record.title){
        this.stock.splice(i,1);
        this.balance += record.price;
      }
    }
  },

  totalValue: function(stock){
    var total = 0;
  for (var record of this.stock) {
    total += record.price;
   }
   return total;
  }
}

 
module.exports = Shop;