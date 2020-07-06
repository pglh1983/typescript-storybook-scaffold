import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Theme from './Theme';
import theme from '%utils/ThemeResolver';

const Swatches = {
  Typography: styled.p`${theme.typography.primaryHeading}`,
};

storiesOf('Atoms/Theme', module)
  .add(
    'default',
    () => (
      <Theme>
        <Swatches.Typography>Typography</Swatches.Typography>
      </Theme>
    ),
  );
