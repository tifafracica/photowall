import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom'
import Single from './Single';


class Main extends Component {

  state = {loading: true}

  componentDidMount(){
    this.props.startLoadingPost().then(() => {
      this.setState({loading:false})
    })
    this.props.startLoadingComments()
  }
 
  render(){
    
    return (
          <div>
              <h1> <Link to="/"><Title title={'Photowall'}/></Link> </h1>
              <Route exact path = "/" render={() =>(
                <div>
                  <PhotoWall {...this.props} />
                </div>
              )}/>

              <Route path = "/AddPhoto" render={({history}) =>(
                <AddPhoto {...this.props} onHistory={history}/>

              )}/>
              <Route path="/single/:id" render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params}  />
              )}/>
              
            </div>
    )
  }
}

// function simulateFetchFromDatabase() {
//   return [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365"
//   }, {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://cnnespanol2.files.wordpress.com/2017/05/aliens-en-el-cine5.jpg?quality=100&strip=info&w=640"
//   }, {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2019/04/26/USATODAY/usatsports/MotleyFool-TMOT-510581ed-vacation.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"
//   }]
// }

export default Main