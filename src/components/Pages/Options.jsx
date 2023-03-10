import React, { useContext } from 'react';
import { BackButton } from '../Buttons/BackButton';
import { OptionsContext } from '../Context/OptionsContext';
import { OptionsStyle } from './Options.styled';


export const Options = () => {
  const timesOption = useContext(OptionsContext);

  return (
    <OptionsStyle>
      <label htmlFor='timeToWork'>Work Minutes: </label>
      <input id='timeToWork' defaultValue={timesOption.workMinutes} min={1} max={120} onChange={(newTimeToWork) => timesOption.setTimeToWork(newTimeToWork.target.value)}/>

      <label htmlFor='timeToBreak'>Break Minutes: </label>
      <input id='timeToBreak' defaultValue={timesOption.breakMinutes} min={1} max={40} onChange={newTimeToBreak => timesOption.setTimeToBreak(newTimeToBreak.target.value)}/>

      <BackButton style={{fontSize: '1rem', marginTop: '20px'}} onClick={() => timesOption.setShowOptions(false)}/>
    </OptionsStyle>
  )
}
