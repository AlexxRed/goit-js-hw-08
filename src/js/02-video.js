

import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
console.log(throttle);


const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (e) {
    console.log(e.seconds);
    console.log(e);

    
    localStorage.setItem("videoplayer-current-time", `${e.seconds}`);

});
const time = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


        // const currentTime = {
    //     "videoplayer-current-time": `${e.seconds}`,
    // };
    // console.log(currentTime);