angular.module('tweet', [])
.factory('tweet', function (){

    var tweet = {};

    tweet.process = function(data){

        //Crude Tweet retrieve
        //Load the page of the user and parse HTML
        var result = data.match(/data-aria-label-part="0">(.*?)<\/p>/g).map(function(val){
            return val.replace(/<\/?b>/g,'');
        });

        return result[0].substring(25,result[0].length-4);
    };

    tweet.buildURL = function(user){
        return 'https://twitter.com/'+user;
    };

    return tweet;

});

