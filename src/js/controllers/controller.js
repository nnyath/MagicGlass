angular.module('controller', ['ngAnimate','constants','restHelper','weather','tweet', 'calendar'])
.controller('mainCtrl', ['$scope','$http','conf','$filter','$interval','restHelper','weather','tweet', 'calendar',
                         function ($scope,$http,conf, $filter,$interval,restHelper,weather,tweet, calendar){

    var iconArr = {"01d":'wi-day-sunny',
                  "01n":'wi-night-clear',
                  "02d":'wi-day-sunny-overcast',
                  "02n":'wi-night-partly-cloudy',
                  "03d":'wi-day-cloudy-windy',
                  "03n":'wi-night-alt-cloudy-windy',
                  "04d":'wi-day-cloudy-windy',
                  "04n":'wi-night-cloudy-windy',
                  "09d":'wi-day-showers',
                  "09n":'wi-night-alt-showers',
                  "10d":'wi-day-rain',
                  "10n":'wi-night-alt-rain',
                  "11d":'wi-day-thunderstorm',
                  "11n":'wi-night-alt-thunderstorm',
                  "13d":'wi-day-snow',
                  "13n":'wi-night-alt-snow',
                  "50d":'wi-day-fog',
                  "50n":'wi-night-fog'};


    $scope.title = conf.title;
    $scope.subtitle = conf.subtitle;

    $scope.description = 'Loading';
    $scope.current = 0;
    $scope.hi = 0;
    $scope.lo = 0;
    $scope.id1 = 0;
    $scope.id2 = 3;
    $scope.tweet = 'Loading';



    function setWeather(){

    restHelper.processGET(weather.buildURL(conf.weather.location,conf.weather.appid,conf.weather.units), weather.process).then(function(payload){


            if(payload!==null){
                $scope.icon = iconArr[payload.icon];
                $scope.description = payload.description;
                $scope.current = payload.current.toFixed(0);
                $scope.hi = payload.hi.toFixed(0);
                $scope.lo = payload.lo.toFixed(0);
            }

        });
    }

    function setTweet(){
        restHelper.processGET(tweet.buildURL(conf.tweet.user), tweet.process).then(function(payload){
            if(payload!==null){
                $scope.tweet = payload;
            }

        });
    }

    function setCalendar(){
       restHelper.processGET(calendar.buildURL(conf.calendar.url), calendar.process).then(function(payload){
            if(payload!==null){
                $scope.events = payload;
            }
        });

    }

    function cycleEvents(){
        if($scope.events!==null && $scope.events.length>4){
                if($scope.id2>$scope.events.length-1){
                    $scope.id1 = 0;
                    $scope.id2 = 3;
                }
                else{
                    $scope.id1+=4;
                    $scope.id2+=4;
                }
            }
    }

    function setClock(){
        $scope.currentTime = Date.now();
    }

    function setTasks(){

        $interval(setTweet, 1000*60*5, 0);
        $interval(setWeather, 1000*60*30, 0);
        $interval(setCalendar, 1000*60*5, 0);
        $interval(cycleEvents, 1000*10,0);
        $interval(setClock, 1000,0);

    }

    setWeather();
    setTweet();
    setCalendar();
    setTasks();

}]);
