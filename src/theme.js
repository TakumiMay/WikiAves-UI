import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
    black: "black",
    white: "white",
    primary: "#4AC66D",
    secondary: "#091B25",
    red500: "rgb(244,67,54)",
}

const themeOptions = {
    palette: {
        primary: {
            main: colors.primary,
            white: colors.white,
        },
        secondary: {
            main: colors.secondary,
        },
        error: {
            main: colors.red500,
        },
        background: {
            default: '#E5E5E5',
            green: colors.primary,
        },
    },
};

const theme = createMuiTheme(themeOptions);
export default theme;