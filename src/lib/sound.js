import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg';

let gameSound = null;

export const soundManager = ({ sound = solarisSoundTrack, loop = false, volume = 0.3, status }) => {
  if (!sound) return;

  if (!gameSound) {
    gameSound = new Audio(sound);
    gameSound.volume = volume;
    gameSound.loop = loop;
  }

  if (status === 'pause') {
    gameSound.pause();
  } else if (status === 'play') {
    gameSound.play();
  } else if (status === 'stop') {
    gameSound.pause();
    gameSound.currentTime = 0;
  }
};

export function playSound(sound, volume = 0.3) {
  const _sound = new Audio(sound)
  _sound.volume = volume
  _sound.play()
}
