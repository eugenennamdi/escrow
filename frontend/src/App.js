import React from 'react';
import './App.css';
import {HashRouter as Router ,Route,Switch,} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Container} from 'react-bootstrap'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Profilescreen from './Screens/ProfileScreen';
//import QuizScreen from './Screens/QuizScreen';
import HomeScreen from './Screens/HomeScreen';
import CreateAddrressScreen from './Screens/CreateAddressScreen';
import HistoryScreen from './Screens/HistoryScreen'

function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path="/" component={HomeScreen} exact/>
       
        <Route path="/login" component={LoginScreen}/>
        <Route path="/createAddress" component={CreateAddrressScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/profile' component={HistoryScreen}/>
        


      </Container>

    </main>
    <Footer/>
  </Router>
  );
}

export default App;
