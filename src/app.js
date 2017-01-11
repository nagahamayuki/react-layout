import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//components
import Appbar from './components/Appbar.js'
import Mains from './components/Mains/index.js'

class Layouts extends React.Component{
  render(){
    return(
      <div>
        <Appbar />
        <Mains />
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
