import React, {Component} from 'react'

import './App.css';
import Avatar from './Avatar'
import Article from './Article'
import Ad from './Ad'
import Links from './Links'
import ClickBait from './ClickBait'

class MainPage extends Component {
    render(){
        return(
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Avatar />
        <Article />
        <Links />
      </div>
        <Ad />
        <ClickBait />
    </main>
        )
    }
}
export default MainPage