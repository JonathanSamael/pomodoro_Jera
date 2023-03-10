import React from 'react';
import { ButtonStyled } from '../Buttons/Button.styled';
import { HeaderStyled } from './Header.styled';
import { useContext } from 'react';
import { OptionsContext } from '../Context/OptionsContext';

export const Header = () => {
    const timesOption = useContext(OptionsContext);

    return (
        <HeaderStyled>
            <ButtonStyled onClick={() => timesOption.setShowOptions(true)}>Settings</ButtonStyled>
        </HeaderStyled>
    )
}


