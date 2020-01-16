import React, { Component } from 'react'
import { connect } from "react-redux";

import { NavbarView } from "../views";

import "./NavbarContainer.css";

export default class StudentEditContainer extends Component {
    render() {
        return (
            <div>
                <NavbarView />
                <div class = "form">
                    <form>
                        <tr>
                            <td>
                                First Name:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Last Name:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Campus:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                GPA:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Image:
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <br/>
                        </tr>
                        <tr>
                            <button className="btn btn1" id="one">Submit</button>
                        </tr>
                    </form>
                </div>
            </div>
        )
    }
}

