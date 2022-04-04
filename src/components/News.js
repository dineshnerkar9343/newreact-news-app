import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from 'prop-types';

export default class News extends Component {

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  prevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d01f6bf520634f6b903ad0b2a70fc8ac&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState ({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }

  nextClick= async()=>{
  if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize) ) {

  }
   else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d01f6bf520634f6b903ad0b2a70fc8ac&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState ({
      articles: parsedData.articles,
      page: this.state.page + 1
    })
   }
    
    
  }





async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d01f6bf520634f6b903ad0b2a70fc8ac&page=1&pageSize=${this.props.pageSize}`
  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState ({
    articles: parsedData.articles,
    totalResults : parsedData.totalResults
  })


}

  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
          
            {this.state.articles.map((element)=> {
                 return <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title?element.title:" "}
                  description={element.description?element.description:" "}
                  imageUrl={element.urlToImage?element.urlToImage:"https://media.defense.gov/2021/Sep/30/2002865254/1280/1280/0/210930-D-EX074-055.JPG"} 
                  newsUrl={element.url}
                />
                </div>
            })}
            
          </div>

          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.prevClick}>Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.nextClick}>Next</button>
          </div>
        </div>
      </>
    );
  }
}
