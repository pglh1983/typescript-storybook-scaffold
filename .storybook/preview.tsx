import React from 'react';
import { addDecorator } from '@storybook/react';

import Theme from '%atoms/Theme';

const dependencies = (story : Function) => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600&display=swap" rel="stylesheet"/>
    {story()}
  </>
);

const theme = (story : Function) => (
  <Theme>
    {story()}
  </Theme>
)

addDecorator(dependencies);
addDecorator(theme);
