import React , {Component} from 'react';
import { NavLink, Route } from 'react-router-dom'
class Course extends Component {
  render() {
    let { match } = this.props;
    console.log('this.props', this.props)
    return(
      <div className="course">
        <h1>course页面</h1>
        <NavLink to={`${match.url}/front-end`}>前端技术</NavLink>
        <NavLink to={`${match.url}/big-data`}>大数据</NavLink>
        <NavLink to={`${match.url}/algorithm`}>算法</NavLink>
        <Route path={`${match.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/>
      </div>
    )
  }
}
export default Course;