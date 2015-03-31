(function() {
  module.exports.register = function(Handlebars, options) {

    /*
      Type: "rectangle", "square" or "person"
    */
    function getRandomImageUrl(type) {
      var image = '';
      var numberOfImages = 21; // Max number of images to randomize amongst
      if (type === 'person') {
        numberOfImages = 7;
      }
      var item = Math.floor(Math.random() * numberOfImages) + 1;
      if (type === 'rectangle') {
        image = 'rectangle{X}.jpg'.replace('{X}', item);
      } else if (type === 'square') {
        image = 'square{X}.jpg'.replace('{X}', item);
      } else if (type === 'person') {
        image = 'person{X}.jpg'.replace('{X}', item);
      }
      return image;
    }

    Handlebars.registerHelper('image', function (type, block) {
      var image = getRandomImageUrl(type);
      return image;
    });
  };
}).call(this);
