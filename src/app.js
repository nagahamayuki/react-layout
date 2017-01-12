import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

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

/* redux */
//action
const openMenu = {
  type: 'OPEN_MENU'
}

//reducer
const reducer = (state = {openState: true}, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return{
        openState: !state.openState
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

class AllComponent extends React.Component{
  render(){
    const { openState, menuHandler } = this.props;
    return(
      <div>
        <Appbar menuHandler={this.props.menuHandler} />
        <Drawer open={this.props.openState} containerStyle={{
          height: 'calc(100vh - 64px)',
          marginTop: 64
        }}>
          <Link to="a"><MenuItem>Menu Item</MenuItem></Link>
          <Link to="b"><MenuItem>Menu Item 2</MenuItem></Link>
        </Drawer>
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            shownMenu: String(this.props.openState)
          })}
        </div>
      </div>
    );
  }
}

//react-redux
const mapStateToProps = (state) => {
  return{
    openState: state.openState
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    menuHandler:() => {dispatch(openMenu)}
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComponent)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Mains} />
          <Route path="a" component={Content} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
)
