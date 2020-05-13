var customXMLHttpRequest = (function (myToken) {
    function getXMLHttpRequest (method, url, async) {
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open(method, url, async);
        xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + myToken);
        return xmlHttpRequest;
    }
    return getXMLHttpRequest;
})('c44a4d563c34471db0f8ee1be61053daa5863142');
//request.open('GET', 'https://www.strava.com/api/v3/athlete', true)

//request.onload = function() {
//    // Access JSON data here
//}

var request = customXMLHttpRequest('GET', 'https://www.strava.com/api/v3/athlete', true);
request.send()
