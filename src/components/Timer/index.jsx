import React, { useState, useEffect, useContext, useRef } from 'react';
import { OptionsContext } from '../Context/OptionsContext';
import { Header } from '../Header';
import { MainContainer, TimerContainer, TimerStyled, ButtonContainer } from './Timer.styled';
import { MainButton } from '../Buttons/MainButton';
import sound from '../../assets/notification-song.mp3'

export const Timer = () => {
  const timesOption = useContext(OptionsContext);

  const [isActive, setIsActive] = useState(true);
  const [mode, setMode] = useState('work');
  const [timeLeft, setTimeLeft] = useState(0);

  const timeLeftRef = useRef(timeLeft);
  const isActiveRef = useRef(isActive);
  const modeRef = useRef(mode);

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? timesOption.workMinutes : timesOption.breakMinutes) * 60;

      modeRef.current = nextMode;
      setMode(nextMode);

      timeLeftRef.current = nextSeconds;
      setTimeLeft(nextSeconds);
    }

    timeLeftRef.current = timesOption.workMinutes * 60;
    setTimeLeft(timeLeftRef.current);

    let interval = setInterval(() => {
      if (isActiveRef.current) return;

      if (timeLeftRef.current === 0) {
        const audio = new Audio(sound);
        audio.play();
        switchMode()
      };

      setTimeLeft(timeLeftRef.current--)

    }, 1000)

    return () => clearInterval(interval);
  }, [timesOption])

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <MainContainer>
      <Header />
      <TimerContainer>
        <TimerStyled >{timerMinutes + ':' + timerSeconds}</TimerStyled>
      </TimerContainer>

      <ButtonContainer>
        <MainButton onClick={() => {
          const newIsActive = !isActive;
          setIsActive(newIsActive);
          isActiveRef.current = newIsActive;
          }}>{isActive ? 'Play' : 'Pause'}
        </MainButton>
      </ButtonContainer>
    </MainContainer>
  )
}
