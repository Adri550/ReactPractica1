import React, {Component} from 'react';
import './Header.css'
import logo from '../Imagen/Logo1.jpeg'
class Header extends Component {
    render(){
        return(
            <div className="Header">
                <img className="Header-logo" src ={logo} alt= 'logotec'/>
            </div>
        );
    }
}

export default Header;