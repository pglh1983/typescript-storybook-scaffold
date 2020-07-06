import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LinkButton from './LinkButton';

describe('<LinkButton/>', () => {
  describe('@render', () => {
    it('should contain the supplied text', () => {
      const { getByText } = render(<LinkButton href="/">Look for this</LinkButton>);
      expect(getByText('Look for this')).toBeTruthy();
    });
  });
  describe('@click', () => {
    it('should trigger the onClick event', () => {
      const onclick = jest.fn();
      const { getByText } = render(<LinkButton href="/" onclick={onclick}>Look for this</LinkButton>);
      expect(onclick).toBeCalledTimes(0);
      fireEvent.click(getByText('Look for this'));
      expect(onclick).toBeCalledTimes(1);
    });
  });
});
