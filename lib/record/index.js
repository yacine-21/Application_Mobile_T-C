import SoundPlayer from 'react-native-sound-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const onPausePlay = async () => {
  await audioRecorderPlayer.pausePlayer();
};

export const onStopPlay = async () => {
  console.log('record stopped');
  audioRecorderPlayer.stopPlayer();
  audioRecorderPlayer.removePlayBackListener();
};

export const onStartRecord = async () => {
  const result = await audioRecorderPlayer.startRecorder();
  audioRecorderPlayer.addRecordBackListener(e => {
    setRecordSecs(e.currentPosition);
    setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    return;
  });
};

export const onStopRecord = async () => {
  const result = await audioRecorderPlayer.stopRecorder();
  audioRecorderPlayer.removeRecordBackListener();
  setRecordSecs(0);
};

export const onStartPlay = async () => {
  console.log('onStartPlay');
  const msg = await audioRecorderPlayer.startPlayer();
  audioRecorderPlayer.addPlayBackListener(e => {
    setCurrentPositionSec(e.currentPosition);
    setCurrentDurationSec(e.duration);
    setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    return;
  });
};

export const playSound = item => {
  try {
    SoundPlayer.playSoundFile(`${item.sound}`, 'mp3');
  } catch (error) {
    console.log(error);
  }
};
