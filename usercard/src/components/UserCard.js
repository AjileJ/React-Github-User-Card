import React from 'react';

const UserCard = (props) => {
  
  
    console.log(props.users)
    return(
      <div className='card'>
      
       
          <div className = 'card-info'>
          <img></img>
          
          <h3 className = 'name'>
            Login:  {props.users.login}
          </h3>
          <p className = 'user-name'>
           Name: {props.users.name}
          </p>
          <p className ='location'>
           Location: {props.users.location}
          </p>
          <p className = 'profile'>
            <a className ='link'>GitHub-Link: {props.users.html_url}</a>
          </p>
          <p className = 'followers'>
             Followers: {props.users.followers}
          </p>
          <p className = 'following'>
             following: {props.users.following}
          </p>
          <p className = 'bio'>
            Bio :{props.users.bio}
          </p>
          </div>
      
      
          
        
      </div>
  )
}
  
  




export default UserCard

/*
  const card = document.createElement('div');
  const imgSrc = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  card.appendChild(imgSrc);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  profile.appendChild(link);
  cardInfo.appendChild(profile);
  
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  card.appendChild(cardInfo);

*/