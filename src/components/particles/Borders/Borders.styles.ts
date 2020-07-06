import { css } from 'styled-components';

export const actionBorderCss = css`
  border-radius: ${4 / 16}rem;
`;

// Current style doesn't require any changes for primary or
// secondary, but should create the variables in case that
// changes later on.
export const primaryActionBorderCss = actionBorderCss;
export const secondaryActionBorderCss = actionBorderCss;
