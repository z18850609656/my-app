import React, {Component} from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
// import NewsDetail from './pages/NewsDetail'
import Course from './pages/Course'
import JoinUs from './pages/JoinUs'
class Main extends Component {
  render() {
    return(
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/course" component={Course}/>
          <Route path="/joinUs"  render={(props) => <JoinUs {...props}/>}/>
          <Route path="/error" render={(props) => <div><h1>404 Not Found!</h1></div>}/>
          <Route path="*" render={(props) => <Redirect to="/error"/>}/>
        </Switch>
      </div>
    )
  }
}
export default Main
// <Route path="/news/:id" component={NewsDetail}/>