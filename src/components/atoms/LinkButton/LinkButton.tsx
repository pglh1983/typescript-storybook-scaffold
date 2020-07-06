import React from 'react';

import { LinkButtonA } from './LinkButton.styles';

export interface LinkButtonProps {
  children: any;
  href: string;
  onclick?: Function;
}

const LinkButton = ({
  children,
  href,
  onclick = () => { }, // This is how you specify defaults
} : LinkButtonProps) => (
  <LinkButtonA href={href} onClick={(e) => onclick(e)}>{children}</LinkButtonA>
);

export default LinkButton;
