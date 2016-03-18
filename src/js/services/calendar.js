angular.module('calendar', [])
.factory('calendar', function (){

    var calendar = {};

    calendar.process = function(data){

        var vevent = new ICAL.Component(ICAL.parse(data)).getAllSubcomponents('vevent');

        var dateMap = vevent.filter(function(obj){
            if(new Date().toDateString() === new Date(obj.getFirstPropertyValue('dtstart')).toDateString())
                return obj;
        });

        return dateMap.map(function(obj){
            return {'event':obj.getFirstPropertyValue('summary'),
                'time': new Date(obj.getFirstPropertyValue('dtstart'))};
        });
    };

    calendar.buildURL = function(url){
        return url;
    };

    return calendar;




});

