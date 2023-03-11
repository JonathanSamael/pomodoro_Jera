import { useState } from 'react'
import { OptionsContext } from './components/Context/OptionsContext'
import { Options } from './components/Settings/Options'
import { Timer } from './components/Timer'
import { GlobalStyled } from './Global.styled'

function App() {

  const [ showOptions, setShowOptions] = useState(false)
  const [ timeToWork, setTimeToWork ] = useState(25);
  const [ timeToBreak, setTimeToBreak ] = useState(5);

  return (
    <>
      <GlobalStyled />
      <OptionsContext.Provider value={{
        showOptions,
        setShowOptions,
        workMinutes: timeToWork,
        breakMinutes: timeToBreak,
        setTimeToWork,
        setTimeToBreak,
      }}>
      {showOptions ? <Options /> : <Timer />}
      </OptionsContext.Provider>
    </>
  )
}

export default App
