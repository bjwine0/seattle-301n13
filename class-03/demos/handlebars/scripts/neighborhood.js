







let neighborhoods = [];

function Neighborhood(rawDataObject) {
  debugger;
  for (let key in rawDataObject) {
    console.log('key', key);
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function () {
  let $template = $('#neighborhood-template').html();
  console.log('source', $template);
  let compiledTemplate = Handlebars.compile($template);
  console.log(compiledTemplate(this));
  return compiledTemplate(this);
};

neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
  console.log('neighbor', neighborhoodObject);
  console.log('neigh', neighborhoods);
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
  console.log('ourNewNeighbor', ourNewNeighborhoodObject )
});
