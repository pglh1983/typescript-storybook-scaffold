import styled from 'styled-components';

import theme from '%utils/ThemeResolver';

export const NavButtonA = styled.a`
  ${theme.borders.action}
  ${theme.typography.input}
  ${theme.fills.action}
  padding: ${9 / 16}rem 1rem;
  text-decoration: none;
`;

export const PrimaryNavButtonA = styled(NavButtonA)`
  ${theme.borders.primary}
  ${theme.fills.primary}
`;

export const SecondaryNavButtonA = styled(NavButtonA)`
  ${theme.borders.secondary}
  ${theme.fills.secondary}
`;