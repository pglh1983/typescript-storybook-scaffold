import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import NavButton from './NavButton';

describe('<NavButton/>', () => {
  describe('@render', () => {
    it('should contain the supplied text', () => {
      const { getByText } = render(<NavButton href="/">Brontosaurus</NavButton>);
      expect(getByText('Brontosaurus')).toBeTruthy();
    });
  });
  describe('@click', () => {
    it('should trigger the onNavigation prop', () => {
      const onNavigate = jest.fn();
      const { queryAllByText } = render(
        <NavButton href="!" onNavigate={onNavigate}>Brontosaurus</NavButton>,
      );
      const [link] = queryAllByText((_, element) => (
        element.textContent === 'Brontosaurus' && element.tagName.toLowerCase() === 'a'
      ));
      expect(onNavigate).toHaveBeenCalledTimes(0);
      fireEvent.click(link);
      expect(onNavigate).toHaveBeenCalledWith('!');
      expect(onNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
