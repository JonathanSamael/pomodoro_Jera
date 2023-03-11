import React, { useContext } from 'react';
import { MainButton } from '../Buttons/MainButton';
import { OptionsContext } from '../Context/OptionsContext';
import { OptionsStyle } from './Options.styled';


export const Options = () => {
  const timesOption = useContext(OptionsContext);

  return (
    <OptionsStyle>
      <label htmlFor='timeToWork'>Work Time: </label> 
      <input autoFocus id='timeToWork' maxLength={2} defaultValue={timesOption.workMinutes} onChange={(newTimeToWork) => timesOption.setTimeToWork(newTimeToWork.target.value)}/>

      <label htmlFor='timeToBreak'>Break Time: </label>
      <input id='timeToBreak' maxLength={2} defaultValue={timesOption.breakMinutes}onChange={newTimeToBreak => timesOption.setTimeToBreak(newTimeToBreak.target.value)}/>

      <MainButton style={{fontSize: '1rem', marginTop: '20px'}} onClick={() => timesOption.setShowOptions(false)}>Back</MainButton>
    </OptionsStyle>
  )
}
