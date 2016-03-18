//Weather service to process OpenWeatherMap 5 Day Forecast/3 Hour forecast
//Returns current weather data as well as hi and lo's for the day in JSON form


angular.module('weather', [])
.factory('weather', function (){

    var weather = {};


    //TODO Fix Timezone Issue
    weather.process = function(data){

        //Reduce helper functions
        function getHi(a,b){
            if(a>b) return a;
            else return b;
        }

        function getLo(a,b){
            if(a<b) return a;
            else return b;
        }

        //Filter to today's date then map today's temp
        var dateMap = data.list.filter(function(obj){
            if(new Date().toDateString() === new Date(obj.dt*1000).toDateString())
                return obj;
        });

        //Pluck temps from filtered date
        var tempMap = dateMap.map(function(obj){
            return obj.main.temp;
        });

        //Build weather data object
        return {
                'icon': dateMap[0].weather[0].icon,
                'description' : dateMap[0].weather[0].description,
                'current' : dateMap[0].main.temp,
                'hi' : tempMap.reduce(getHi),
                'lo' : tempMap.reduce(getLo)
               };
    };

    weather.buildURL = function(loc, appid, unit){
        return 'http://api.openweathermap.org/data/2.5/forecast?'+loc+'&appid='+appid+'&units='+unit;
    };

    return weather;

});

