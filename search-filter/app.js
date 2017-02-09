var app = angular.module("filterApp", []);
app.controller("filterAppCtrlr", filterAppCtrlr);

function filterAppCtrlr() {
    var employees = [
        { name: "anusree", designation: "SE", gender: 2, city: "London" },
        { name: "suleesh", designation: "ASE", gender: 1, city: "London" },
        { name: "vinay", designation: "AM", gender: 1, city: "Delhi" },
        { name: "tuttu", designation: "SSE", gender: 2, city: "Washington" },
        { name: "nena", designation: "PM", gender: 2, city: "NewYork" }
    ];
    this.employees = employees;
};

app.filter("gender", function () {
    return function (value) {
        switch (value) {
            case 1: return "Male";

            case 2: return "Female";

            default: return "Not Defined"
        }
    }
});

