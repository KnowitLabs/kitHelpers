function getRandomImageUrl(type) {
  var image = '';
  var item = Math.floor(Math.random() * 7) + 1;
  if (type === 'rectangle') {
    image = 'rectangle{X}.png'.replace('{X}', item);
  } else if (type === 'square') {
    image = 'square{X}.png'.replace('{X}', item);
  } else if (type === 'slide') {
    image = 'slide{X}.png'.replace('{X}', item);
  } else if (type === 'person') {
    image = 'person{X}.png'.replace('{X}', item);
  }
  return image;
}

Handlebars.registerHelper('image', function (type, block) {
  var image = getRandomImageUrl(type);
  return image;
});
