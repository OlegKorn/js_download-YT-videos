//https://github.com/CodeDotJS/youtube-playlist
//https://www.npmjs.com/package/youtube-dl


const fs = require('fs')
const youtubedl = require('youtube-dl')
const ytlist = require('youtube-playlist');

const url = 'https://www.youtube.com/watch?v=msq8hdujoYc&list=PLr7Q87cc6WsQXnDrLF03FzlRbZX3WINzo';

ytlist(url, 'url').then(res => {
  
  listOfUrls = res.data.playlist;

  listOfUrls.forEach(function(url) {
    var video = youtubedl(url);
    // Will be called when the download starts.
    video.on('info', function(info) {
      var title = info.title;
      console.log(title);
      video.pipe(fs.createWriteStream(title + '.mp4'));
    })
  })

});
