import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import NavButton from './NavButton';

storiesOf('Atoms/NavButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <NavButton
      href={text('href', '/some/link')}
      onNavigate={action('onNavigate')}
    >
      {text('Text', 'New item')}
    </NavButton>
  ))
  .add('primary', () => (
    <NavButton.Primary
      href={text('href', '/some/link')}
      onNavigate={action('onNavigate')}
    >
      {text('Text', 'New item')}
    </NavButton.Primary>
  ))
  .add('secondary', () => (
    <NavButton.Secondary
      href={text('href', '/some/link')}
      onNavigate={action('onNavigate')}
    >
      {text('Text', 'New item')}
    </NavButton.Secondary>
  ));
