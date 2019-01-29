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

app.controller('HomeCtrl', function($scope) {

/* Preparing the board */

//1. randomly place diamonds in 8x8=64 grid cells
//2. Create board

var diamonds = [];
var grid = [];
var maxDiamonds = 6; //maximum diamonds to be plotted
var gridsize = 64; //square root of this number decides grid size

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
  diamonds.push(temp);
}

//creating repeatable grid for board
for (var j = 1; j <= gridsize; j++) {
  grid.push(j);
}

if(diamonds.length < maxDiamonds){
    var singleTemp = generateRandomNumber();
    checkIfExists(diamonds,singleTemp);
    diamonds.push(singleTemp);
}

$scope.diamonds = diamonds;
$scope.grid = grid;

$scope.hasDiamond = function(cell,arr){
  if(arr.includes(cell)){
    return true;
  }
}


});