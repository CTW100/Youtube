const startBtn = document.getElementById('startBtn');
const video = document.getElementById('preview');

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  video.scrObject = stream;
  video.play();
};

startBtn.addEventListener('click', handleStart);
