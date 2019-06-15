import React from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import BarSearch from './components/SearchBar/searchbar';
import PostCont from './components/PostContainer/postcontainer';
import '../src/components/login.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        mydata: dummyData,
        local_user: "",
        post_comment: "",
      }
  }

  //function to save the state of the likes

  triggerlikes = (e, username) => {
    e.preventDefault();
      this.setState(preState => {
        const updatedlike = preState.mydata.map(mydataupdated => {
          if (mydataupdated.username === username) {
            mydataupdated.liked = !mydataupdated.liked
            mydataupdated.liked ? mydataupdated.likes = mydataupdated.likes + 1 : mydataupdated.likes = mydataupdated.likes - 1
          }
          return mydataupdated;
        })
        return {
          mydata : updatedlike
        }
      })
  }

  //function to trigger user form if there is no local username state
  postaction = (e, username) => {
    e.preventDefault();
    if(this.state.local_user === "") {
      this.openForm()
    } else {
      this.savepost(e, username)
    }
  }
  //function to open the form 
  openForm () {
    document.getElementById("myForm").style.display = "block"
  }
  //function to close the form
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
}