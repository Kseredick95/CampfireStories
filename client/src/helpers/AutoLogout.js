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
              timeout={100 * 60 * 15}
              onActive={this.handleOnActive}
              onIdle={this.handleOnIdle}
              onAction={this.handleOnAction}
              debounce={250}
            />
          </div>
        )
      }
     
      handleOnAction (event) {
        console.log('user did something', event)
      }
     
      handleOnActive (event) {
        console.log('user is active', event)
        console.log('time remaining', this.idleTimer.getRemainingTime())
      }
     
      handleOnIdle (event) {
        console.log('user is idle')
        console.log('last active', this.idleTimer.getLastActiveTime())
        this.handleLogout()
      }

      handleLogout() {
        store.remove(`user`);
        window.location.replace("/login");
      }
}

export default Timer;