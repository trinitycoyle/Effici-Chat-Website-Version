'use strict';

angular.module('efficiChatWeb')

//Controller for page content
.controller('CompanyController', ['$scope', '$state', '$stateParams', 'companyFactory', 'ngDialog', function($scope, $state, $stateParams, companyFactory, ngDialog) {
    $scope.showDepartments= true;
    $scope.showProjects= true;
    $scope.message = "Loading ...";
    $scope.departments = companyFactory.getDepartments().query();
    $scope.projects = companyFactory.getProjects().query();

    //Alert for entering department 1
    $scope.dept1Alert = function () {
      ngDialog.open({ template: 'views/dept1Alert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlert1 = function() {
      ngDialog.close();
    }

    //Alert for entering department 2
    $scope.dept2Alert = function () {
      ngDialog.open({ template: 'views/dept2Alert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlert2 = function() {
      ngDialog.close();
    }

    //Alert for entering department 3
    $scope.dept3Alert = function () {
      ngDialog.open({ template: 'views/dept3Alert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlert3 = function() {
      ngDialog.close();
    }

    //Alert for entering project A
    $scope.projAAlert = function () {
      ngDialog.open({ template: 'views/projAAlert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlertA = function() {
      ngDialog.close();
    }

    //Alert for entering project B
    $scope.projBAlert = function () {
      ngDialog.open({ template: 'views/projBAlert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlertB = function() {
      ngDialog.close();
    }

    //Alert for entering project C
    $scope.projCAlert = function () {
      ngDialog.open({ template: 'views/projCAlert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlertC = function() {
      ngDialog.close();
    }

    //Project progress alerts
    $scope.openAlerts = function () {
      ngDialog.open({ template: 'views/alert1.html', scope: $scope, className: 'ngdialog-theme-default'});
      ngDialog.open({ template: 'views/alert2.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeProjAlert1 = function () {
      ngDialog.close();
    }

    //File upload
    $scope.uploadedFile = function(element) {
      $scope.$apply(function($scope) {
      $scope.files = element.files;         
      });
    }
}])

//controller for page header
.controller('NavbarController', ['$scope', '$state', '$rootScope', 'ngDialog', 'AuthFactory', function ($scope, $state, $rootScope, ngDialog, AuthFactory) {

    $scope.loggedIn = false;
    $scope.username = '';
    
    if(AuthFactory.isAuthenticated()) {
      $scope.loggedIn = true;
      $scope.username = AuthFactory.getUsername();
    }

    //Alert for returning to home chat via navbar link
    $scope.homeAlert = function () {
      ngDialog.open({ template: 'views/homeAlert.html', scope: $scope, className: 'ngdialog-theme-default'});
    }

    $scope.closeAlertHome = function () {
      ngDialog.close();
    }

    //Login dialog
    $scope.openLogin = function () {
      ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController"});
    };

    $scope.closeLogin = function () {
      ngDialog.close();
    }
   
    //Login auth
    $scope.pageLogin = function() {
      AuthFactory.login();
      $scope.loggedIn = true;
    };
    
    $scope.pageLogout = function() {
       AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
    
    $rootScope.$on('login:Successful', function () {
      $scope.loggedIn = AuthFactory.isAuthenticated();
      $scope.username = AuthFactory.getUsername();
    });
        
    $rootScope.$on('registration:Successful', function () {
      $scope.loggedIn = AuthFactory.isAuthenticated();
      $scope.username = AuthFactory.getUsername();
    });
    
    $scope.stateis = function(curstate) {
      return $state.is(curstate);  
    };
}])

//Controller for home chat list
.controller('ListCtrl', ['$scope', 'messages', function ($scope, messages) {
    var self = this;
    self.messages = messages.list;
}])

//Controller for home chat post
.controller('PostCtrl', ['$scope', 'messages', function ($scope, messages){
    var self = this;
    self.addMessage = function(message) {
      messages.add(message);
      self.newMessage = '';
      };
}])

//Controller for department 1 list
.controller('DeptOneListCtrl', ['$scope', 'messagesOne', function ($scope, messagesOne) {
    var self = this;
    self.messagesOne = messagesOne.list;
}])

//Controller for department 1 post
.controller('DeptOnePostCtrl', ['$scope', 'messagesOne', function ($scope, messagesOne){
    var self = this;
    self.addMessage = function(messageOne) {
      messagesOne.add(messageOne);
      self.newMessage = '';
    };
}])

//Controller for department 2 list
.controller('DeptTwoListCtrl', ['$scope', 'messagesTwo', function ($scope, messagesTwo) {
    var self = this;
    self.messagesTwo = messagesTwo.list;
}])

//Controller for department 2 post
.controller('DeptTwoPostCtrl', ['$scope', 'messagesTwo', function ($scope, messagesTwo){
    var self = this;
    self.addMessage = function(messageTwo) {
      messagesTwo.add(messageTwo);
      self.newMessage = '';
    };
}])

//Controller for department 3 list
.controller('DeptThreeListCtrl', ['$scope', 'messagesThree', function ($scope, messagesThree) {
    var self = this;
    self.messagesThree = messagesThree.list;
}])

//Controller for department 3 post
.controller('DeptThreePostCtrl', ['$scope', 'messagesThree', function ($scope, messagesThree){
    var self = this;
    self.addMessage = function(messageThree) {
      messagesThree.add(messageThree);
      self.newMessage = '';
    };
}])

//Controller for project A list
.controller('ProjAListCtrl', ['$scope', 'messagesA', function ($scope, messagesA) {
    var self = this;
    self.messagesA = messagesA.list;
}])

//Controller for project A post
.controller('ProjAPostCtrl', ['$scope', 'messagesA', function ($scope, messagesA){
    var self = this;
    self.addMessage = function(messageA) {
      messagesA.add(messageA);
      self.newMessage = '';
    };
}])

//Controller for project B list
.controller('ProjBListCtrl', ['$scope', 'messagesB', function ($scope, messagesB) {
    var self = this;
    self.messagesB = messagesB.list;
}])

//Controller for project B post
.controller('ProjBPostCtrl', ['$scope', 'messagesB', function ($scope, messagesB){
    var self = this;
    self.addMessage = function(messageB) {
      messagesB.add(messageB);
      self.newMessage = '';
    };
}])

//Controller for project C list
.controller('ProjCListCtrl', ['$scope', 'messagesC', function ($scope, messagesC) {
    var self = this;
    self.messagesC = messagesC.list;
}])

//Controller for project C post
.controller('ProjCPostCtrl', ['$scope', 'messagesC', function ($scope, messagesC){
    var self = this;
    self.addMessage = function(messageC) {
      messagesC.add(messageC);
      self.newMessage = '';
    };
}])

//Controller for login dialog
.controller('LoginController', ['$scope','$localStorage', 'ngDialog', 'AuthFactory', '$timeout', function ($scope, $localStorage, ngDialog, AuthFactory, $timeout) {
    
    $scope.loginData = $localStorage.getObject('userinfo','{}');
    
    //Save loginData to localstorage
    $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $localStorage.storeObject('userinfo',$scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  
    AuthFactory.login($scope.loginData);

    };
    
    //Open register dialog        
    $scope.openRegister = function () {
      ngDialog.open({ template: 'views/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
    };

    $scope.closeRegister = function () {
      ngDialog.close();
    }
    
}])

//Controller for register dialog
.controller('RegisterController', ['$scope', '$localStorage', 'ngDialog', 'AuthFactory', function ($scope, $localStorage, ngDialog, AuthFactory) {
    
    $scope.register={};
    $scope.loginData={};
    
    $scope.doRegister = function() {
      console.log('Doing registration', $scope.registration);
      AuthFactory.register($scope.registration);  
      ngDialog.close();
    };
}])
;
