import React from 'react'
import AppBar from 'material-ui/AppBar'

export default class Appbar extends React.Component{
  render(){
    return(
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
