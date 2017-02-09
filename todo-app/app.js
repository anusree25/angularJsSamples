var app = angular.module("todoApp",[]);

app.controller("todoAppController",todoAppController);
this.editMode = false;

function todoAppController(){
    this.todoList = [] ;    
    this.show = true;   
    this.addTodo = function(){
        this.todoList.push(this.todo); 
        this.todo = "";
    }

    this.deleteTodo = function(index){
        this.todoList.splice(index,1);
    }

    this.editTodo = function(){
        this.editMode = !this.editMode ;  
    }

    this.saveTodos = function(listOfTodos){
        this.editMode = false;
    }
}