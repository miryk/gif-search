var searchInputData = $("#keyword").text();
console.log(searchInputData);

var searchWord = searchInputData;
searchWord = "cat";

// for test
$.ajax({
  url: `https://api.giphy.com/v1/gifs/search?api_key=C5cpMfxUdMXpWh2wFPR0W66BGmo2n65f&q=${searchWord}&limit=10&offset=0&rating=g&lang=en`,
}).done( function (results) {
  console.log(results.data);
});



$("#search").click(function () {
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=C5cpMfxUdMXpWh2wFPR0W66BGmo2n65f&q=${searchWord}&limit=10&offset=0&rating=g&lang=en`,
  }).done( function (results) {
    results.data;
  });
});
