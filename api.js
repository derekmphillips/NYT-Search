
var searchTerm = $("#box1").val();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a1adcf23b0b64f0a9c094bbb2617804e&?q=" +
        searchTerm ;
      $.ajax({
          url: queryURL,
          method: "GET"
        })

      .done(function(response) {
      	console.log(response);
      });



      // https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a1adcf23b0b64f0a9c094bbb2617804e&?q=apple