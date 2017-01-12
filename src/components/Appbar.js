import React from 'react'
import AppBar from 'material-ui/AppBar'

export default class Appbar extends React.Component{
  render(){
    return(
      <AppBar
        title="Title"
        onLeftIconButtonTouchTap={this.props.menuHandler}
        style={{
          zIndex: 3000
        }}
      />
    );
  }
}
