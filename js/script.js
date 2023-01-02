$("#btn-buscar").click(function () {
  var searchInputData = $("#input-buscar").val();
  // cambia espacios en "+" si hay:
  var searchWord = searchInputData;
  searchWord = searchWord.split(" ");
  searchWord = searchWord.join("+");

  $("#resultados-busqueda").prepend(`
      <div class="results history">
      `)
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=C5cpMfxUdMXpWh2wFPR0W66BGmo2n65f&q=${searchWord}&limit=10&offset=0&rating=g&lang=es`,
  }).done( function (results) {
    $(".results").append(`
      <h2> Resultados de búsqueda de: ${searchInputData} </h2>
    `)
    var data = results.data;
    for ( const gif of data) {
      var url = gif.images.downsized_medium.url
      $(".results").append(`
      <img src="${url}">
      `)
    }
  });
});