var app = angular.module("filterApp", []);
app.controller("filterAppCtrlr", filterAppCtrlr);

function filterAppCtrlr() {

    var employees = [
        { name: "anusree", date: new Date(), gender: "Female", salary: "60000" },
        { name: "suleesh", date: new Date(), gender: "male", salary: "600000.00" },
        { name: "vinay", date: new Date(), gender: "male", salary: "1000000.490" },
        { name: "tuttu", date: new Date(), gender: "Female", salary: "700000" },
        { name: "nena", date: new Date(), gender: "Female", salary: "60000" }
    ];


    this.employees = employees;
    this.rowLimit = 3;
    this.properties = [
        { id: "+name", value: "Name Asc" },
        { id: "-name", value: "Name Desc " },
        { id: "date", value: "Date" },
        { id: "gender", value: "Gender" },
        { id: "salary", value: "Salary" }
    ];
    this.sortColumn = "+name";
    this.column  = false;
    this.ascending = true;
    this.arrowClass = "arrow-up";

    this.sortData = function(column){
        console.log("the arrow class is "+this.arrowClass );
        this.sortColumn = column;
        this.ascending = (this.ascending == true) ? !this.ascending : true;
        this.arrowClass = (this.arrowClass == "arrow-up") ? "arrow-down" : "arrow-up";
    }
   
}