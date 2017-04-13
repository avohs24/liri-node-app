var keys = require('./keys.js');
var Twitter = require('twitter');
var params = {
    screen_name: 'A24V__',
    count: 20
};

var client = new Twitter({
    consumer_key: 'Ctj8Q6J6PHntzVlSRfRzh6ujo',
    consumer_secret: 'wJXXLOAWpR8ezvDTswTWDQ9u9OYuN5QYuEfsQkKrTIKJCo411N',
    access_token_key: '	852167073438552064-zk2kYJfI13ld387xocsnfjHcLpbG9z4',
    access_token_secret: 'p8M3sksDNuEreeF9XcnYTdntkXczeoW8NHGsC3i9JBYuI',
});

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});
