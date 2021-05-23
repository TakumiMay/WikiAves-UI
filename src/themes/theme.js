import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4AC66D',
        },
        secondary: {
            main: '#091B25',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#E5E5E5',
        },
    },
});

export default theme;