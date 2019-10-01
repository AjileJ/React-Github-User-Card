import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      followers: []
    };
  };

  

  componentDidMount(){
  this.fetchUser();
  this.FetchFollowers();
    
  }
  fetchUser = () => {
  axios
  .get("https://api.github.com/users/AjileJ")
  .then(res => {
    console.log(this.state.users)
    this.setState({
      users: res.data
      
    })
    
  })
  .catch(err => console.log(err));
  }
FetchFollowers = () => {
      axios
    .get("https://api.github.com/users/AjileJ/followers")
    .then(res => {
      console.log('f',this.state.followers)
      this.setState({
        followers: res.data
        
      })
      
    })
    .catch(err => console.log(err));
  }

  
  render(){
    console.log('u',this.state.users)
    console.log('f',this.state.followers)
  return (
    <div className="App">
     <UserCard  users= {this.state.users}/>
     <FollowersCard followers = {this.state.followers}/>
    </div>
  );
 }
}
export default App;
