import React from 'react'

import ClassNames from 'classnames'

export default class Mains extends React.Component{
  render(){
    const styles = {
      parentTrue: {
        marginLeft: 0,
        display: 'flux',
        transitionDuration: '450ms'
      },
      parentFalse: {
        marginLeft: 256,
        display: 'flex',
        transitionDuration: '250ms'
      },
      boxLeft: {
        flex: '2 0 0%',
        height: 'calc(100vh - 64px)',
        overflow: 'auto'
      },
      boxRight: {
        flex: '0 2 33.33%',
        height: 'calc(100vh - 64px)',
        overflow: 'auto'
      }
    }

    return(
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          background: '#EFEFEF'
        }}
      >
        <div style={this.props.shownMenu === 'false' ? styles.parentTrue : styles.parentFalse} >
          <div style={styles.boxLeft}>
            hello
          </div>
          <div style={styles.boxRight}>
            world
          </div>
        </div>
      </div>
    );
  }
}
