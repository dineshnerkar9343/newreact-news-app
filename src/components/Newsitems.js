import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {

let {title, description, imageUrl,newsUrl,auther} = this.props;


    return (
     <>
     <div className="card" style={{width: '18rem'}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="card-title">{auther}</h4>
        <hr></hr>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>

     </>
    )
  }
}
