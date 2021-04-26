import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";
import routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>{routes}</Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
