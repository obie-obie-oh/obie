import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.onDrop.bind(this)
  }

  onDrop(files) {
    console.log('got the files ', files)
  }

  render() {
    return (
      <main className='dashboard'>
        Dashboard
        <Dropzone onDrop={this.onDrop}>
          <div>Drop a file here or click to select files to upload</div>
        </Dropzone>
      </main>
    )
  }
}

export default connect()(Dashboard)