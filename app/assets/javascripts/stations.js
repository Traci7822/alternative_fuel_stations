$.ajax({
    url: "https://data.colorado.gov/resource/c7ve-fkni.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
