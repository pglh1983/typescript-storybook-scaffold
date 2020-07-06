import styled from 'styled-components';

import theme from '%utils/ThemeResolver';

// import {
//   inputTypographyCss
// } from '%particles/Typography';

export const LinkButtonA = styled.a`
  ${theme.typography.input}
  background: #2244AA;
  color: #FFFFFF;
  padding: 10px;
`;

export default LinkButtonA;
