var request = new XMLHttpRequest()
request.open('GET', 'https://www.strava.com/athletes/290433?access_token=2a556674325dc9297b06a62435678d2222b55837', true)

request.onload = function() {
    // Access JSON data here
}

request.send()
