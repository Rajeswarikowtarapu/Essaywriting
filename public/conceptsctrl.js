app.controller('ctrl3',function($scope,$http)
{
               
                 var name=$scope.name;
                 var res = {
                   method : 'POST',
                   url : 'http://localhost:8081/sample2',

                   headers: {
                     'Content-Type': 'Application/json'
                   },
                   data:
				   {
                     name: name,
                   }
                 }
				 $http(res).then(function(response)
				 {
			     console.log(response.data);
				 $scope.names = response.data;
                    console.log(JSON.stringify($scope.names.concepts[0].text));
                 })
               
})