import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Equipments from './components/Equipments/Equipments';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  Signup from './components/Signup/Signup';
import AuthProvider from './components/Context/AuthProvider';
import SingleServices from './components/SingleService/SingleServices';
import Home from './components/Home/Home/Home';
import PrivateRoute from './PrivaeRoute/PrivateRoute';
import LogIn from './components/LogIn/LogIn';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <SingleServices></SingleServices>
            </PrivateRoute>
            <Route exact path="/equipment">
              <Equipments></Equipments>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/signup">
              < Signup></ Signup>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
