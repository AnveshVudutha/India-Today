import React, { Component } from 'react'
import Navbarr from './components/Navbarr';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Newitem from './components/Newitem';


export default class App extends Component {
  apiKey=process.env.REACT_APP_KEY
  state=
  {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbarr />
          <LoadingBar
            color='#fff'
            progress={this.state.progress}   
          />
          <Routes>
            <Route exact path="/" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />}></Route>
            <Route exact path="/entertainment" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />}></Route>
            <Route exact path="/health" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" />}></Route>
            <Route exact path="/science" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<Newitem setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

