import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//react-router
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

//components
import Appbar from './components/Appbar.js'
import Mains from './components/Mains/index.js'
import Content from './components/Mains/Content.js'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class App extends React.Component{

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
        <Drawer open={this.state.drawerState} containerStyle={{
          height: 'calc(100vh - 64px)',
          marginTop: 64
        }}>
          <Link to="a"><MenuItem>Menu Item</MenuItem></Link>
          <Link to="b"><MenuItem>Menu Item 2</MenuItem></Link>
        </Drawer>
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            drawerState: String(this.state.drawerState)
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Mains} />
        <Route path="a" component={Content} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("app")
)
