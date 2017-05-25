app.controller('ctrl2',function($scope,$http){

                 var name=$scope.name;
                   var res = {
                   method : 'POST',
                   url : 'http://localhost:8081/sample1',
                    data : $scope.name,
					
                   headers: {
                     'Content-Type': 'Application/json'
                   },
                   data:{
                     name : name,
                   }
                 }
                 $http(res).then(function(response){
                   $scope.names = response.data;
				   
                 })
               
             })