var link = "https://api.tripadvisor.com/api/partner/2.0/location/155507?key=e8fe9217-3f08-4ed1-8edf-87adc35c424f"
function getData() {
  // locationdata = $.getJSON(link).done(function(data) {
  //     return data;
  //   });
  // document.getElementById("data").innerHTML = locationdata;
  
  function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    var response = JSON.parse(response);
    document.getElementById("data").innerHTML = response;
  });
}
}

