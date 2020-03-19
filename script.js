var request = new XMLHttpRequest()
request.open('GET', 'https://www.strava.com/oauth/authorize', true)

request.onload = function() {
    // Access JSON data here
}

request.send()