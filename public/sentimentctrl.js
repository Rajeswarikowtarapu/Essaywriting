app.controller('ctrl4',function($scope,$http)
{
                 var name=$scope.name;
                 var res = {
                   method : 'POST',
                   url : 'http://localhost:8081/sample3',

                   headers: {
                     'Content-Type': 'Application/json'
                   },
                   data: {
                     name: name,
                   }
                 }
                 $http(res).then(function(response)
				 {
                   $scope.names = response.data;
					console.log(JSON.stringify($scope.names));
                 })
               
})