import Navbar from "./components/Navbar";
import NavLeftItem from "./components/NavLeftItem";
import Topbar from "./components/Topbar";
import Why from "./components/Why";
import "./styles/main.css";
import News from "./components/News";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductContainer from "./components/ProductContainer";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import CustomizedMenus from "./components/FloatNavigation";


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: deepOrange,
  },
})

function App() {
  
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>

      <Topbar />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <NavLeftItem />
            <CustomizedMenus />
            <ProductContainer />
            <News/>
            <Why />
          </Route>
       

        </Switch>
      </Router>
      <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
