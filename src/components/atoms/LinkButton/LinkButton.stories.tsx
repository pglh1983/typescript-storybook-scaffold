import React from 'react';
import { storiesOf } from '@storybook/react';

import LinkButton from './LinkButton';
import Theme from '%atoms/Theme';

storiesOf('Atoms/LinkButton', module)
  .add('default', () => <Theme><LinkButton href="http://www.google.com/">Link</LinkButton></Theme>);
