import React , {Component} from 'react';
import {
  NavLink,
  Route
} from 'react-router-dom'
import NewsDetail from './NewsDetail';
const data = [
  {
    id: 1,
    title: '春运抢票模式开启',
    content: '春运来临'
  },
  {
    id: 2,
    title: '寒潮来袭，你冻成狗了吗？',
    content: '寒潮来临，被子离不开我'
  }
]
class NewsPages extends Component {
  render() {
    return(
      <div className="news">
        <h1>请选择一条新闻：</h1>
        {data.map((item) =>(
          <div key={item.id}>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/${item.id}`,
                state: {data: item}
              }}>
                {item.title}
              </NavLink>
          </div>
        ))}
      </div>
    )
  }
}
// 根据不同条件进行加载不同组件
const News = ({match}) => {
  return (
    <div>
      <Route exact path={match.path} render={(props) =><NewsPages {...props}/>}/>
      <Route path={`${match.path}/:id`} component={NewsDetail}/>
    </div>
  )
}
export default News;
// <Route path={`${this.props.match.path}/:id`} render={(props) => {
//   let data = props.location.state && props.location.state.data;
//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.content}</p>
//     </div>
//   )
// }}/>