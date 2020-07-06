// import { ThemedCssFunction, DefaultTheme } from 'styled-components';

interface ThemeInjectedProps {
  theme: any;
}

interface ThemeTypography {
  primaryHeading(props : ThemeInjectedProps): any; // ThemedCssFunction<DefaultTheme>;
  secondaryHeading(props : ThemeInjectedProps): any;
  normal(props : ThemeInjectedProps): any;
  input(props : ThemeInjectedProps) : any;
  inputLabel(props : ThemeInjectedProps): any;
  muted(props : ThemeInjectedProps): any;
  active(props : ThemeInjectedProps): any;
  hover(props : ThemeInjectedProps): any;
}

interface ThemeResolverInterface {
  typography: ThemeTypography;
}

const themeResolver : ThemeResolverInterface = {
  typography: {
    primaryHeading: ({ theme }) => theme.primaryHeadingTypographyCss,
    secondaryHeading: ({ theme }) => theme.secondaryHeadingTypographyCss,
    normal: ({ theme }) => theme.normalTypographyCss,
    inputLabel: ({ theme }) => theme.inputLabelTypographyCss,
    input: ({ theme }) => theme.inputTypographyCss,
    muted: ({ theme }) => theme.mutedTypographyCss,
    active: ({ theme }) => theme.activeTypographyCss,
    hover: ({ theme }) => theme.hoverTypographyCss,
  },
};

export default themeResolver;
