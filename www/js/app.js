// Ionic Starter App
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
       .state('home', {
           url: '/home',
           templateUrl: 'index.html',
           controller: 'HomeCtrl',
       })
       /*.state('gameover', {
           url: '/game-over',
           views: {
               'menuContent': {
                   templateUrl: 'game-over.html',
                   controller: 'GameOverCtrl'
               }
           }
       })*/
    $urlRouterProvider.otherwise('/home');
});

app.controller('MenuCtrl', function($scope) {
//menu controller
});

app.controller('GameOverCtrl', function($scope) {
  
  //game over controller
  
  $scope.score = localStorage.getItem("score");

});

app.controller('HomeCtrl', function($scope, $state) {

/* Preparing the board */

//1. randomly place diamonds in 8x8=64 grid cells
//2. Create board

var diamonds = [];
var grid = [];
var maxDiamonds = 8; //maximum diamonds to be plotted
var gridsize = 64; //square root of this number decides grid size
$scope.score = 64;

//function to check if value exists in the array
function checkIfExists(arr,n){
  if(arr.includes(n)){
    return true;
  }else{
    generateRandomNumber();
  }
}

//random number generator for plotting diamonds
function generateRandomNumber(){
  return Math.floor(Math.random() * 64) + 1;
}

//creating random diamonds location array
for (var i = 0; i < maxDiamonds; i++) {
  var temp = generateRandomNumber();
  checkIfExists(diamonds,temp);    
  diamonds.push({id:temp, found: false});
}

//creating repeatable grid for board
for (var j = 1; j <= gridsize; j++) {
  grid.push(j);
}

if(diamonds.length < maxDiamonds){
    var singleTemp = generateRandomNumber();
    checkIfExists(diamonds,singleTemp);
    diamonds.push({id:singleTemp, found: false});
}

$scope.diamonds = diamonds;

localStorage.setItem("map", diamonds);
console.log($scope.diamonds);

$scope.grid = grid;

$scope.hasDiamond = function(cell,arr){
  var hd = arr.filter(function(d){
    return d.id == cell
  });

  if(hd.length){
    return true;
  }
}

$scope.count = diamonds.length;


$scope.calcScore = function(c){

  $scope.score = $scope.score - 1;
  //set score in localstorage

  //calculate remaining 
  var totalDiamonds = $(".cell.diamond").length;
  var remainingDiamonds = $(".cell.diamond.open").length;

  if (totalDiamonds == remainingDiamonds) {
    alert("Game Over. Your score is " + $scope.score + ".");
    location.reload();
  }

}


});