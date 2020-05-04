import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Provider} from 'react-redux';
import {ConfigureStore} from "./redux/configureStore";
import Menu from "./components/Menu";

const store = ConfigureStore();

function App() {
       
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">HappyMeals</NavbarBrand>
                    </div>
                </Navbar>
                
                <Menu />                
            </div>
        </Provider>
    );
}

export default App;
