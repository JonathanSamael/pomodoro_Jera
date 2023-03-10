import React, { useContext } from 'react';
import { BackButton } from '../Buttons/BackButton';
import { OptionsContext } from '../Context/OptionsContext';
import { OptionsStyle } from './Options.styled';


export const Options = () => {
  const timesOption = useContext(OptionsContext);

  return (
    <OptionsStyle>
      <label htmlFor='timeToWork'>Work Minutes: </label>
      <input id='timeToWork' defaultValue={timesOption.workMinutes} min={1} max={120} onChange={(newValue) => timesOption.setTimeToWork(newValue)}/>

      <label htmlFor='timeToBreak'>Break Minutes: </label>
      <input id='timeToBreak' defaultValue={timesOption.breakMinutes} min={1} max={40} onChange={newValue => timesOption.setTimeToBreak(newValue)}/>

      <BackButton style={{fontSize: '1rem', marginTop: '20px'}} onClick={() => timesOption.setShowOptions(false)}/>
    </OptionsStyle>
  )
}
