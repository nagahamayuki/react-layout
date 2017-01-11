import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//components
import Appbar from './components/Appbar.js'
import Mains from './components/Mains/index.js'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class Layouts extends React.Component{

  constructor(){
    super();
    this.state = {
      drawerState: true
    }
    this._drawerOpen = this._drawerOpen.bind(this);
  }

  _drawerOpen(){
    this.setState({
      drawerState: !this.state.drawerState
    })
  }

  render(){
    return(
      <div>
        <Appbar openMenu={this._drawerOpen} />
        <Mains />
        <Drawer open={this.state.drawerState} containerStyle={{
          height: 'calc(100vh - 64px)',
          marginTop: 64
        }}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Layouts />
  </MuiThemeProvider>,
  document.getElementById("app")
)
