var app = angular.module("moreDirectivesApp",[]);
app.controller("moreDirectivesController",moreDirectivesController);

function moreDirectivesController(){
    this.myList = [
        {name:"anusree",age:"26"},
        {name:"aishu",age:"29"},
        {name:"suleesh",age:"30"},
        {name:"chandra",age:"10"},
        {name:"tuttu",age:"6"}
    ]

}