import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      
        
      <div className="container mt-3">
        <div className="row">
            <div className="col-md-4">
              <NewsItem title="News" description="News Description" imageUrl="https://www.marketscreener.com/images/reuters/2024-05/2024-05-07T070144Z_1_LYNXMPEK4607F_RTROPTP_3_TOYOTA-RESULTS.JPG"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="News2" description="News Description2"/>
            </div>
            <div className="col-md-4">
            <NewsItem title="News3" description="News Description3"/>
            </div>
        </div>
      </div>
    )
  }
}
