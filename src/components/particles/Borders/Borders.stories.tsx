import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import {
  primaryActionBorderCss,
  secondaryActionBorderCss,
  actionBorderCss,
} from './Borders.styles';

const Swatch = styled.p`
  background: #999;
  margin: 0 0 10px 0;
  padding: 10px;
`;
const Swatches = {
  ActionBorder: styled(Swatch)`${actionBorderCss}`,
  PrimaryActionBorder: styled(Swatch)`${primaryActionBorderCss}`,
  SecondaryActionBorder: styled(Swatch)`${secondaryActionBorderCss}`,
}


storiesOf('Particles/Borders', module)
  .add(
    'all', () => (
      <>
        <Swatches.ActionBorder>Action</Swatches.ActionBorder>
        <Swatches.PrimaryActionBorder>Primary action</Swatches.PrimaryActionBorder>
        <Swatches.SecondaryActionBorder>Secondary action</Swatches.SecondaryActionBorder>
      </>
    ),
  );
