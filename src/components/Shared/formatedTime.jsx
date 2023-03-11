export function getFotmatedTime(timeLeft) {
    
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
        timerMinutes + ':' + timerSeconds
    )
}