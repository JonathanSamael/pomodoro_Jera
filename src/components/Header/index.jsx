import React from 'react';
import { HeaderStyled } from './Header.styled';
import { useContext } from 'react';
import { OptionsContext } from '../Context/OptionsContext';
import { MainButton } from '../Buttons/MainButton';

export const Header = () => {
    const timesOption = useContext(OptionsContext);

    return (
        <HeaderStyled>
            <MainButton onClick={() => timesOption.setShowOptions(true)}>Settings</MainButton>
        </HeaderStyled>
    )
}


