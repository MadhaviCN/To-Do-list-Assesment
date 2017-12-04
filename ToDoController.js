var app = angular.module('angularApp', []);
app.controller('HomeController', ['$scope', function($scope){
    $scope.todovalue = {'items':""};
	$scope.todolists = {'todoname':""}
	$scope.showSave = false;
	$scope.showEditFlag = false;
	$scope.newToDoListFlag = false;
	$scope.allItems = [];
	$scope.AllToDos = [];
	$scope.AllLists = [];
	$scope.AvailableDate = {'date':""};
	$scope.addNewFlag = false;
	$scope.showAddNewDiv = function(){
		$scope.addNewFlag = !$scope.addNewFlag;
		$scope.showEditFlag = false;
		$scope.createdNew = false;
	};
	$scope.submitToDo = function(){
		$scope.AllToDos = $scope.allItems;
		$scope.createdNew = true;
		$scope.addNewFlag = false;
		$scope.todovalue.items = "";
		$scope.AvailableDate.date = "";
	};
	$scope.editToDos = function(index){
		$scope.parentndex = index;						
		$scope.showSave = true;
		$scope.todovalue.items = $scope.allItems[index].itms;
		$scope.AvailableDate.date = $scope.allItems[index].newdate;
	};
	$scope.editToDoList = function(index){
		$scope.createdNew = true;
		$scope.newToDoListFlag = false;
		$scope.showEditFlag = true;
		$scope.addNewFlag = false;
	}
	$scope.removeToDos = function(index){s
		$scope.allItems.splice(index, 1)
	};
	$scope.removeToDoLists = function(index){
		$scope.AllLists.splice(index, 1)
	};
	$scope.saveToDos = function(){
		$scope.allItems[$scope.parentndex].itms = $scope.todovalue.items;
		$scope.allItems[$scope.parentndex].newdate = $scope.AvailableDate.date;
		$scope.addNewFlag = false;
		$scope.showEditFlag = false;
		$scope.todovalue.items = "";
		$scope.AvailableDate.date = "";
	};
	$scope.logout = function(){
		window.location.href = "loginPage.html";
	}
	$scope.addItems = function(){
		var obj = {
			itms : $scope.todovalue.items,
			newdate : $scope.AvailableDate.date
		}
		//$scope.AllToDos.push(obj);
		$scope.allItems.push(obj);
		console.log($scope.allItems);
		$scope.todovalue.items = "";
		$scope.AvailableDate.date = "";
	}
	$scope.submitListName = function(){
		$scope.newToDoListFlag = true;
		$scope.AllLists.push($scope.todolists.todoname);
		//$scope.todolists.todoname = "";
	}
	$scope.showAddedList = function(){
		if($scope.AllLists !== ""){
			$scope.newToDoListFlag = true;
			$scope.createdNew = false;
		}	else{
			$scope.newToDoListFlag = false;
		}	
	}
}]); 
app.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'DD, d  MM, yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
});
/* app.run(function($rootScope, $location, $state, LoginService) {
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
          console.log('Changed state to: ' + toState);
      });
    
      if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');   
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'home.html',
        controller : 'HomeController'
      });
  }]);
  
   app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
    
  });  
                                
  app.factory('LoginService', function() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  }); */
