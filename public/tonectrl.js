app.controller('ctrl5',function($scope,$http)
{
               
                 var name=$scope.name;
                 var res = {
                   method : 'POST',
                   url : 'http://localhost:8081/sample5',

                   headers: {
                     'Content-Type': 'Application/json'
                   },
                   data: {
                     name: name,
                   }
                 }
                 $http(res).then(function(response){
                   $scope.names = response.data;
				   
				   var chart = new CanvasJS.Chart("chartContainer", {
					   backgroundColor:"transparent",
				    title:
				    {
					  text: "Basic Column Chart",
                      fontColor:"white"
                
				     },
				
				     data: [{
					     type: "column",
					     dataPoints: [
						 { y: $scope.names[0].tones[0].score, label: "Analytical" },
						 { y: $scope.names[0].tones[1].score, label: "Confident" },
						 { y: $scope.names[0].tones[2].score, label: "Tentative" },
					     ]
				        }]
			        });
			       chart.render();
                                     
                 })
})