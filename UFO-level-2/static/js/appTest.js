// from data.js
var tableData = data;

newData = tableData; 

function populateTable(){
  //This is selecting where the table will be inserted
  
  var tbody = d3.select("tbody");
  console.log("Running Function");

  // BONUS: Refactor to use Arrow Functions!

  newData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
populateTable();


//This sets up the button and the function that will run once it is clicked
var button = d3.select("#filter-btn");

function handleClick(){
  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  var userdate = d3.select("#datetime").property("value");
  var usercity = d3.select("#city").property("value");
  var userstate = d3.select("#state").property("value");
  var usercountry = d3.select("#country").property("value");
  var usershape = d3.select("#shape").property("value");

  function userFilter (input){
    if(input.datetime===userdate||input.city===usercity||input.state===userstate||input.country===usercountry||input.shape===usershape){
      return input;
      console.log("Data Inputted");
    }
    else{
      console.log("Data Excluded");
    }
  };
  
  newData = tableData.filter(userFilter);
  console.log(newData);
  
  //This should clear the table
  var tbody = d3.select("tbody");
  tbody.html("");

  populateTable();

};

// This handles the button click
button.on("click", handleClick);


