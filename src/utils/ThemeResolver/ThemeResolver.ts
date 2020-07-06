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

interface ThemeBorders {
  action(props : ThemeInjectedProps): any;
  primary(props : ThemeInjectedProps): any;
  secondary(props : ThemeInjectedProps): any;
}

interface ThemeFills {
  pageBackground(props : ThemeInjectedProps): any;
  primary(props : ThemeInjectedProps): any;
  secondary(props : ThemeInjectedProps): any;
  action(props : ThemeInjectedProps): any;
}

interface ThemeResolverInterface {
  borders: ThemeBorders;
  fills: ThemeFills;
  typography: ThemeTypography;
}

const themeResolver : ThemeResolverInterface = {
  borders: {
    action: ({ theme }) => theme.actionBorderCss,
    primary: ({ theme }) => theme.primaryActionBorderCss,
    secondary: ({ theme }) => theme.secondaryActionBorderCss,
  },
  fills: {
    pageBackground: ({ theme }) => theme.pageBackgroundFillCss,
    primary: ({ theme }) => theme.primaryFillCss,
    secondary: ({ theme }) => theme.secondaryFillCss,
    action: ({ theme }) => theme.actionFillCss,
  },
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
