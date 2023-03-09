import React from 'react';
import { PauseButton } from '../Buttons/PauseButton';
import { PlayButton } from '../Buttons/PlayButton';
import { TimerStyled, ButtonContainer } from './Timer.styled';
import { Header } from '../Header';

export const Timer = () => {
  return (
    <div>
      <Header/>
      
      <TimerStyled>Timer</TimerStyled>
      <ButtonContainer>
        <PlayButton />
        <PauseButton />
      </ButtonContainer>
    </div>
  )
}
