const { getYouTubeInfo } = require('./index');

getYouTubeInfo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(info => console.log(info))
  .catch(error => console.error('Error:', error));
