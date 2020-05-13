var customXMLHttpRequest = (function (myToken) {
    function getXMLHttpRequest (method, url, async) {
        console.log("here here here")
        console.log("method: " + method)
        console.log("url: " + url)
        console.log("myToken: " + myToken)
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open(method, url, async);
        xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + myToken);
        return xmlHttpRequest;
    }
    console.log("What about here?")
    return getXMLHttpRequest;
})('c44a4d563c34471db0f8ee1be61053daa5863142');
//request.open('GET', 'https://www.strava.com/api/v3/athlete', true)

//request.onload = function() {
//    // Access JSON data here
//}

var request = customXMLHttpRequest('GET', 'https://www.strava.com/api/v3/athlete', true);
console.log("am I here first?")
request.send()
