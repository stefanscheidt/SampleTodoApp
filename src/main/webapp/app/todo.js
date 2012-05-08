function TodoController($scope) {
    $scope.todos = [
        {text:"Learn Angular", done:false},
        {text:"Write Todo App", done:false}];
    $scope.total = function () {
        return $scope.todos.length;
    }
    $scope.add = function() {
        $scope.todos.push({text:$scope.inputTodo, done:false});
        $scope.inputTodo = "";
    }
    $scope.cleanUp = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        })
    }
}