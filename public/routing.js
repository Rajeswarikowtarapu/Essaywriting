var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider)
{
$routeProvider
.when('/emotion',
{
  templateUrl:'emotion.html',
  controller:'ctrl1'
})

.when('/categories',
{
  templateUrl:'categories.html',
  controller:'ctrl2'
})

.when('/concepts',
{
  templateUrl:'concepts.html',
  controller:'ctrl3'
})
.when('/sentiment',
{
  templateUrl:'sentiment.html',
  controller:'ctrl4'
})
.when('/tone',
{
  templateUrl:'tone.html',
  controller:'ctrl5'
})

})
