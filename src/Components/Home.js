import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div class="wrapper">
                <img src={require('./download.jpg')}/>
                <div id="description">
                    <p>
                        Full Stack Crud App <br/>
                        Project Description Goes Here
                    </p>
                </div>
                <div>
                        <button class="btn btn1" id="one">View Campuses</button>
                        <button class="btn btn2" id = "two">View Students</button>
                </div>
                

            </div>
        )
    }
}
