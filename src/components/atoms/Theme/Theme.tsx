import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as particles from '%particles/index.ts';

interface ThemeProps {
  children : any;
}

const Theme = ({ children } : ThemeProps) => (
  <ThemeProvider theme={particles}>{children}</ThemeProvider>
);

export default Theme;
