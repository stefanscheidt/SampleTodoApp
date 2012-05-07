## index.html ##

    <!DOCTYPE html>
    <html ng-app>
    <head>
        <script src="lib/angular.js"></script>
        <script src="lib/underscore.js"></script>
        <script src="app/todo.js"></script>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/todo.css">
        <title>Todo App</title>
    </head>
    <body>
        <h1>Todo App</h1>
        <div ng-controller="TodoController">
            <h2>Total Todos: {{total()}}</h2>
            <ul class="unstyled">
                <li ng-repeat="todo in todos">
                    <input type="checkbox" ng-model="todo.done">
                    <span class="done-{{todo.done}}">{{todo.text}}</span>
                </li>
            </ul>
            <form class="form-horizontal">
                <input type="text" ng-model="inputTodo">
                <button class="btn" ng-click="add()" ng-disabled="!inputTodo"><i class="icon-plus"></i>Add</button>
            </form>
            <button class="btn" ng-click="clear()"><i class="icon-trash"></i>Clear</button>
        </div>
    </body>
    </html>
    
## todo.js ##

    function TodoController($scope) {
        $scope.todos = [
            {text:"Learn Angular", done:false},
            {text:"Build a Todo App", done: false}
        ];
        $scope.total = function() {
            return $scope.todos.length;
        }
        $scope.add = function() {
            $scope.todos.push({text:$scope.inputTodo, done:false});
            $scope.inputTodo = "";
        }

        $scope.clear = function() {
            $scope.todos = _.filter($scope.todos, function (todo) {
                return !todo.done;
            });
        }
    }    
    
## todo.css ##

    .done-true {
        text-decoration: line-through;
        color: gray;
    }
