var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var calSales = function(obj) {
  var total = 0;
  for(var s of obj["sales"]) {
    total += s;
  }
  return total;
}

var calTax = function(td, obj) {
  var s =calSales(obj);
  var taxRate = td[obj.province];
  return s * taxRate;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};

  for (var company of salesData) {
    var st = {};
    var sales = calSales(company);
    var tax = calTax(taxRates, company);

    if (result[company["name"]]){
      result[company["name"]].totalSales += sales;
      result[company["name"]].totalTaxes += tax;
    }
    else {
      st.totalSales = sales;
      st.totalTaxes = tax;
      result[company["name"]] = st;
    }

  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/