import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const currentTime = data => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
  let time = Number(localStorage.getItem(STORAGE_KEY));
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
