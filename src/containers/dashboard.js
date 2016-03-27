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
    console.log('got the files ', typeof files)
    const data = new FormData()
    _.each(files, (file, i) => {
      console.log(file);
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
        Dashboard
        <Dropzone onDrop={this.onDrop}>
          <div>Drop a file here or click to select files to upload</div>
        </Dropzone>
        <ul className="uploaded-images">
        </ul>
      </main>
    )
  }
}

export default connect()(Dashboard)