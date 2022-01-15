var app = angular.module('Tourism',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
       templateUrl:"homepage.html"
    })

    .when('/Blueorgin',{
        templateUrl:"Blueorgin.html"
     })
    
     .when('/login',{
        templateUrl:"login.html"
     })

     .when('/Booktrip',{
        templateUrl:"Booktrip.html"
     })

     .when('/book',{
        templateUrl:"BookingPage.html"
     })
     .when('/completed',{
        templateUrl:"last.html"
     })

     .when('/contacts',{
        templateUrl:"contact.html"
     })

})

app.controller('cardCtrl',function($scope,$http,$location){
    

    $http(
        {
            method:"GET",
            url:"/modal/card.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })

    $scope.myFunc4 = function() {
     
        $location.path('/Blueorgin');
      };


})



app .controller('navCtrl',  function($scope,$location) {
    
  

      $scope.contacts = function() {
        $location.path('/contacts');
      };
      $scope.booking = function() {
        $location.path('/Booktrip');
      };

      $scope.logout = function() {
        $location.path('/login');
      };
  });

  app.controller('blueCtrl',function($scope,$http,$location){
    

    $http(
        {
            method:"GET",
            url:"/modal/blue.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })

    $scope.login = function() {
        
        $location.path('/login');
      };


})


app.controller('loginCtrl',function($scope,$location){
    $scope.submit=function(){
        
        var username=$scope.username;
        var password=$scope.password;
        if(username=="admin"&& password=="admin"){
            
            $location.path('/Booktrip');
        }else{
            console.log(username)
            console.log(password)
            alert("password is incorrect ")
        }
    }
})

app.controller('bookCtrl',function($scope,$http,$location){
    

    $http(
        {
            method:"GET",
            url:"/modal/Book.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })

    $scope.bookslot = function() {
       
        $location.path('/book');
       
      };


})

app.controller('bookslotCtrl',function($scope,$http,$location){
    

 

    $scope.book = function() {
       
        $location.path('/completed');
       
      };


})


