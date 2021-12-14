// ================== imports ==================
import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
// const trottled = throttle(func, [wait = 0], [options = {}])



// ================== player ==================
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);


// ================== taketime ==================
player.on('timeupdate', throttle(function (e) {
    console.log(e.seconds);//only for check

    localStorage.setItem("videoplayer-current-time", `${e.seconds}`);

}, 1000));



// ================== continue_play ==================
const continueTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(continueTime).then(function(seconds) {
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





// 
        // const currentTime = {
    //     "videoplayer-current-time": `${e.seconds}`,
    // };
