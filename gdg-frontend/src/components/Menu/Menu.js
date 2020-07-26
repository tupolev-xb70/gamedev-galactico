import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📺</span>
        Vídeos
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🏫</span>
        Cursos
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🎮</span>
        Jogos
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contato
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;