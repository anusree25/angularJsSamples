var app = angular.module("calculatorApp",[]);

app.controller("calculatorController",calculatorController);

function calculatorController(){
    console.log("inside controller");
    
    this.buttons=["+","-","*","/"];
    this.result = 0;

    this.giveOperation = function (){
        console.log("function called"+this.operation);   
    }

    this.calculate = function(){
        console.log("The calculate function called");
        if(this.operand == "+"){
            this.result = this.n1 + this.n2;
        }else if(this.operand == "-"){
            this.result = this.n1 - this.n2;

        }else if(this.operand == "*"){
            this.result = this.n1 * this.n2;

        }else if(this.operand == "/"){
            this.result = this.n1 / this.n2;
        }
    }

    this.getOperation = function(value){
        this.operand = value;
    }
}
