import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');

    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

     const currentTime = (data) => {
        localStorage.setItem(
         "videoplayer-current-time",
         JSON.stringify(data.seconds)
        );
    let time = Number(localStorage.getItem("videoplayer-current-time"));
    console.log(time);
    }

    player.on('timeupdate', throttle(currentTime, 1000));

    player
    .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .then((seconds) => {})
    .catch((error) => {
        switch (error.name) {
            case 'RangeError':
            break;

            default:
            break;
        }
    })