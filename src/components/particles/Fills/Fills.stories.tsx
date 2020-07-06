import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import {
  pageBackgroundFillCss,
  primaryFillCss,
  secondaryFillCss,
  actionFillCss,
} from './Fills.styles';

const Swatch = styled.p`
  margin: 0 0 10px 0;
  padding: 10px;
`;
const Swatches = {
  PageBackground: styled(Swatch)`${pageBackgroundFillCss}`,
  PrimaryFill: styled(Swatch)`${primaryFillCss}`,
  SecondaryFill: styled(Swatch)`${secondaryFillCss}`,
  ActionFill: styled(Swatch)`${actionFillCss}`,
}


storiesOf('Particles/Fills', module)
  .add(
    'all', () => (
      <>
        <Swatches.PageBackground>Page background</Swatches.PageBackground>
        <Swatches.PrimaryFill>Primary</Swatches.PrimaryFill>
        <Swatches.SecondaryFill>Secondary</Swatches.SecondaryFill>
        <Swatches.ActionFill>Action</Swatches.ActionFill>
      </>
    ),
  );
