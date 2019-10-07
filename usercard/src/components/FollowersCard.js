import React from 'react';


const FollowersCard = (props) => { 
console.log('FF',props)
  return (
      <div className='card'>
      
       {props.followers.map(person => {
return(
        <div className = 'card-info'>
          <img></img>
          
          <h3 className = 'name'>
            Login:  {person.login}
          </h3>
          <p className = 'id'>
           ID: {person.id}
          </p>
          <p className = 'profile'>
            <a className ='link'>GitHub-Link: {person.url} </a>
          </p>
          <p className = 'followers'>
             Followers: {person.followers_url}
          </p>
          <p className = 'following'>
             following: {person.following_url}
          </p>
          <p className = 'type'>
            Type : {person.type}
          </p>
          </div>
       )})}
       
 
      </div>
   )
 }

export default FollowersCard