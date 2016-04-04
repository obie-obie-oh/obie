import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.onDrop.bind(this)
  }

  onDrop(files) {
    const data = new FormData()
    _.each(files, (file, i) => {
      data.append(`file-${i}`, file)
    })
    $.ajax({
      url: 'http://localhost:6969/upload',
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(data){
        console.log(data);
        let list = ''
        data.forEach(link => {
          list += `<li><img src="${link}" height="150px" /></li>`
        })
        $('.uploaded-images').html(list)
      },
      error: function(err) {
        console.log('error: ', err);
      }
    });
  }

  render() {
    return (
      <main className='dashboard'>
        <h2>Dashboard</h2>
        <h4>No Sidebar here</h4>
        <br/>
        <p>
          This drop zone is for photo upload to Amazon S3.
          It needs the server to be running to test out.
          Run 'npm run dev' if you want to test out the server and photo upload
        </p>

        <Dropzone onDrop={this.onDrop}>
          <p>Drop a file here or click to select files to upload</p>
        </Dropzone>

        <p>
          Photos will render here once successfully uploaded to Amazon S3
        </p>

        <ul className="uploaded-images">
        </ul>
      </main>
    )
  }
}

export default connect()(Dashboard)