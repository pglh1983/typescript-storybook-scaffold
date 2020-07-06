import React from 'react';

import anchorClickHandler from '%utils/AnchorClickHandler';

import {
  NavButtonA,
  PrimaryNavButtonA,
  SecondaryNavButtonA
} from './NavButton.styles';

interface NavButtonProps {
  href: string;
  onNavigate?: Function;
  children?: any;
}

const renderNavButton = (StyledA : Function, {
  href,
  onNavigate,
  children = null,
} : NavButtonProps) => (
  <StyledA
    href={href}
    onClick={anchorClickHandler(href, onNavigate)}
  >
    {children}
  </StyledA>
);

const NavButton = (props : NavButtonProps) => renderNavButton(NavButtonA, props);
NavButton.Primary = (props : NavButtonProps) => renderNavButton(PrimaryNavButtonA, props);
NavButton.Secondary = (props : NavButtonProps) => renderNavButton(SecondaryNavButtonA, props);

export default NavButton;
