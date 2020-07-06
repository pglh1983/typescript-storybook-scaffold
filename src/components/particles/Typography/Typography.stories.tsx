import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import {
  primaryHeadingTypographyCss,
  secondaryHeadingTypographyCss,
  normalTypographyCss,
  inputLabelTypographyCss,
  inputTypographyCss,
  mutedTypographyCss,
  activeTypographyCss,
  hoverTypographyCss,
} from './Typography.styles';

const Swatches = {
  PrimaryHeadingTypographyCss: styled.p`${primaryHeadingTypographyCss}`,
  SecondaryHeadingTypographyCss: styled.p`${secondaryHeadingTypographyCss}`,
  NormalTypographyCss: styled.p`${normalTypographyCss}`,
  InputLabelTypographyCss: styled.p`${inputLabelTypographyCss}`,
  InputTypographyCss: styled.p`${inputTypographyCss}`,
  MutedTypographyCss: styled.p`${normalTypographyCss} ${mutedTypographyCss}`,
  ActiveTypographyCss: styled.p`${normalTypographyCss} ${activeTypographyCss}`,
  HoverTypographyCss: styled.p`${normalTypographyCss} ${hoverTypographyCss}`,
};

storiesOf('Particles/Typography', module)
  .add(
    'default',
    () => (
      <>
        <Swatches.PrimaryHeadingTypographyCss>
          Primary headings
        </Swatches.PrimaryHeadingTypographyCss>
        <Swatches.SecondaryHeadingTypographyCss>
          Secondary headings
        </Swatches.SecondaryHeadingTypographyCss>
        <Swatches.NormalTypographyCss>Normal text</Swatches.NormalTypographyCss>
        <Swatches.InputLabelTypographyCss>Input label text</Swatches.InputLabelTypographyCss>
        <Swatches.InputTypographyCss>Input text</Swatches.InputTypographyCss>
        <Swatches.MutedTypographyCss>Muted text</Swatches.MutedTypographyCss>
        <Swatches.ActiveTypographyCss>Active text</Swatches.ActiveTypographyCss>
        <Swatches.HoverTypographyCss>Hovered text</Swatches.HoverTypographyCss>
      </>
    ),
  );
