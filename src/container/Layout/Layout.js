import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Layout.css'
export default function layout ( props ) {

    return ( 
            <div className = "Layout">  
                <div className = "Header">
                    <Navbar />
                </div>
                <div className = "Divider" />
                
                <div className = "Body">
                    {props.children}
                </div>
                <div className = "Divider" />
                <div className = "Footer">
                    <Footer> Developed using ReactJS </Footer>
                </div>
            </div>
    )
}