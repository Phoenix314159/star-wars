import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.scss'
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetImages } from '../actions'
import Total from './Total'
import TopSection from './TopSection'
import ShowEdit from './ShowEdit'
import ShowFavorites from './ShowFavorites'
import Main from './Main'

class App extends Component {

  async componentDidMount () {
    this.props.resetImages('/api/set_images')
  }

  render () {
    const {main: {setImages}} = this.props
    if(setImages) {
      return (
        <BrowserRouter>
          <div className="total">
            <div className="stars"/>
            <div className="twinkling"/>
            <TopSection/>
            <Switch>
              <Route exact path="/edit" component={ShowEdit}/>
              <Route exact path="/main" component={Main}/>
              <Route exact path="/favorites" component={ShowFavorites}/>
              <Route exact path="/" component={Total}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
    return <div className="initialLoading">Loading...</div>
  }
}

const mapStateToProps = ({main}) => ({main})
const mapDispatchToProps = dispatch => ({resetImages: url => dispatch(resetImages(url))})
export default connect(mapStateToProps, mapDispatchToProps)(App)
