import React, {Component} from 'react';
import{ Route, Redirect } from 'react-router-dom'
class NewsDetail extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
    this.id = props.match.params.id;
    this.state = {
      data: '',
      hasData: false
    }
    this.data = props.location.state.data; // 获取父组件传递的过来的数据
    console.log('this.data', this.data)
  }
  // 在render之前调用
  componentWillMount() {
    this.getNewsDetail()
  }
  getNewsDetail() {
    // 是用this.id作为调用的详情的参数；
    // if (res.data.data !== null) {
    //   this.setState({data: res.data.data})
    // } else {
    //   this.setState({hasData: false})
    // }
  }
  renderNoDataView() {
    return <Route path="*" render={() => <Redirect to="/error"/>}/>
  }
  renderView() {
    const title = this.state.data && this.state.data.title;
    const content = this.state.data && this.state.data.content;
    return <div className="newsDetail"><h1>{title}</h1><p>{content}</p></div>
  }
  render() { 
    return this.state.hasData ? this.renderView() : this.renderNoDataView()
  }
}
export default NewsDetail