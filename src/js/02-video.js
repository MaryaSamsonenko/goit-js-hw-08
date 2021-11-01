import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEL = document.querySelector('iframe');
const player = new Vimeo.Player(iframeEL);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(recordingPlayingTime, 1000));

function recordingPlayingTime(event) {
  console.log(event);
  localStorage.setItem(STORAGE_KEY, event.seconds);
}
getValueFromlocalStorage();

function getValueFromlocalStorage() {
  const valueLocalStorage = localStorage.getItem(STORAGE_KEY);
  if (valueLocalStorage) {
    player.setCurrentTime(valueLocalStorage);
  }
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
