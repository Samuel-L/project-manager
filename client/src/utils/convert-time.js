function convertTime (mSec) {
  const seconds = Math.round(mSec / 1000)
  let minutes = Math.floor(seconds / 60)
  let sec = seconds % 60
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  sec = sec < 10 ? `0${sec}` : `${sec}`
  return `${minutes}:${sec}`
}

function getTimeDifference(startTime, endTime) {
  let difference = endTime - startTime;
  const seconds = Math.round(difference / 1000);
  const minutes = Math.floor(seconds / 60);

  return {seconds: seconds, minutes: minutes}
}

export { convertTime, getTimeDifference };
