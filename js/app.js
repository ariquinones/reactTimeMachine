// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
    var AppView = React.createClass({

    	_subtractYear: function () {
    		if (this.state.ticking === false) {
    			var toThePast = function () {
    				this.setState({
    					ticking: true,
    					currentYear: this.state.currentYear - 1,
    					pastButton: "LET'S STOP HERE",
    				})
    			}
    			var boundToThePast = toThePast.bind(this)
    			this.intervalId = setInterval(boundToThePast, 500)
    		}
    		else {
    			clearInterval(this.intervalId)
    			this.setState({
    				ticking: false,
    				pastButton: "TO THE PAST!"
    			})
    		}
    	},
    	_addYear: function () {
    		if (this.state.ticking === false) {
    			var toTheFuture = function () {
    				this.setState({
    					ticking: true,
    					currentYear: this.state.currentYear + 1,
    					futureButton: "LET'S STOP HERE",
    				})
    			}
    			var boundToTheFuture = toTheFuture.bind(this)
    			this.intervalId = setInterval(boundToTheFuture, 500)
    		}
    		else {
    			clearInterval(this.intervalId)
    			this.setState({
    				ticking: false,
    				futureButton: "TO THE FUTURE!",
    				pastButton: "TO THE PAST!"
    			})
    		}
    	},
    	getInitialState: function() {
    		var yr = parseInt(new Date().getFullYear())
       		 return {
        		ticking: false,
         		currentYear: yr,
         		futureButton: "TO THE FUTURE!",
         		pastButton: "TO THE PAST!"

        	}
      	},
    	render: function() {
    		console.log(this)
    		return (
    				<div className="mainContainer">
    					<p>{this.state.currentYear} </p>
    					<button onClick={this._subtractYear}>{this.state.pastButton}</button>
    					<button onClick={this._addYear}>{this.state.futureButton}</button>
    				</div>
    			)
    	}
    })


    DOM.render(<AppView />, document.querySelector('.container'))
}

app()
