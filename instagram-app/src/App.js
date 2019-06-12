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

// Function to save the state of all the likes

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

  //Function to trigger user form if there is no local username state
  postaction = (e, username) => {
    e.preventDefault();
    if(this.state.local_user === "") {
      this.openForm()
    } else {
      this.savepost(e, username)
    }
  }

  //Function to open the form
  openForm() {
    document.getElementById("myForm").style.display = "block"
  }

  //Function to close the form
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //Function to save the state of the username in the form
  textchange = (e) => {
    this.setState({local_user: e.target.value})
    console.log(e.target.value)
  }

  //this is to close the form only.  state is already saved
  Submit = (e) => {
    e.preventDefault()
    this.closeForm()
    console.log(this.state.local_user)
  }









}

export default App;
