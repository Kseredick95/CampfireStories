import React, { Component } from 'react'
import IdleTimer from 'react-idle-timer'
import store from "store"

class Timer extends Component {
    constructor(props) {
        super(props)
            this.idleTimer = null
            this.handleOnAction = this.handleOnAction.bind(this)
            this.handleOnActive = this.handleOnActive.bind(this)
            this.handleOnIdle = this.handleOnIdle.bind(this)
            this.handleLogout = this.handleLogout.bind(this)
    }

    render() {
        return (
          <div>
            <IdleTimer
              ref={ref => { this.idleTimer = ref }}
              //Change the int on the right to change timeout amount by minutes
              timeout={60000 * 10}
              onActive={this.handleOnActive}
              onIdle={this.handleOnIdle}
              onAction={this.handleOnAction}
              debounce={250}
            />
          </div>
        )
      }
     
      //On action commands (console log purposes)
      handleOnAction (event) {
      }
      
      //User is active (console log purposes)
      handleOnActive (event) {
      }
     
      //When user has switched to idle then run logout function
      handleOnIdle (event) {
        this.handleLogout()
      }

      handleLogout() {
        store.remove(`user`);
        window.location.replace("/login");
      }
}

export default Timer;