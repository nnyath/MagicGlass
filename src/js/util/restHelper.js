//Util factory that processes RESTful request with a provided function

angular.module('restHelper', [])
.service('restHelper', ['$http',function ($http){

    this.processGET = function(url, func){

        return $http.get(url).then(function(payload){
            return func(payload.data);
        },function(errorPayload){

        });
    };
}]);
