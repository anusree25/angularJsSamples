var app = angular.module("nestedControllers",[]);

app.controller("controller1",controller1);
app.controller("controller2",controller2);

function controller1(){
    this.testProp = "From controller1";
}

function controller2(){
    this.testProp = "From controller2";
}
