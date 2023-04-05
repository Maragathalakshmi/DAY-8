import React, { Component } from 'react';
export default function Hoc(HocComponent) {
    return class extends Component {
        render() {
            return (
                <div>
                    <h1 style={{color:"Yellow",fontFamily:"cursive",position:"center"}}>Welcome</h1>
                    <HocComponent></HocComponent>
                </div>
            );
        }
    }
}
