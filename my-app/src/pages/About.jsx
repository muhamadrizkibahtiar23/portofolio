import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>ini adalah About</h1>
               <Link to='/'> ke home</Link>
            </div>
        )
    }
}
