$.ajax({
    url: "https://data.colorado.gov/resource/c7ve-fkni.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : ENV['APP_TOKEN']
    }
}).done(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
