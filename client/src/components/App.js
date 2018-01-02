import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Total from '../containers/Total'
import TopSection from '../containers/TopSection'
import ShowEdit from '../containers/ShowEdit'
import ShowFavorites from '../containers/ShowFavorites'
import Main from '../containers/Main'
import axios from 'axios'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      setImages: false
    }
  }

  async componentDidMount() {
    const res = await axios.put('/api/set_images', null) //on page refresh images are set back to original
    res ? this.setState({setImages: true}) : null
  }

  render() {
    const {setImages} = this.state
    if(setImages) {
      return(
        <BrowserRouter>
          <div>
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


