import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3Footer from './BT3Footer'
import BT3Header from './BT3Header'
import BT3ProductList from './BT3ProductList'


export class BT3Layout extends Component {
    render() {
        return (
            <div>
                <BT3Header />
                <div className="container">
                <BT3Carousel />
                <BT3ProductList />
                </div>
                <BT3Footer />
            </div>
        )
    }
}

export default BT3Layout
