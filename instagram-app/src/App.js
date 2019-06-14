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

  //function to save the state of the post message
  postchange = (e) => {
    this.setState({
      post_comment: e.target.value
    })
  }

  //this is to save the post comment, and username
  savepost = (e, username) => {
    e.preventDefault()
    const currentuser = this.state.local_user;
    const comment = this.state.post_comment;
    const mydate = Date.now();
      this.setState(prevState => {
        const myupdatepost = prevState.mydata.map(updatepost => {
          if (updatepost.username === username) {
            updatepost.comments.push({'com_id':mydate, 'username':currentuser, 'text':comment})
            console.log(mydata, currentuser, comment)
          }
          this.setState({
            post_comment: ""
          })

          return updatepost
        })
        return {
          mydata : myupdatepost
        }
  })
}

render() {
  return(
    <div className="app_css">
    <div className="form-popup" id="myForm">
      <form onSubmit={(e) => this.Submit(e)} className="form-container">
        <h2>Enter User Name first</h2>
        <h3>Click on "Post" after submit</h3>
        <input onChange={this.textchange} style={{width: '90%'}} className="usernameinput" type="text" placeholder="Enter user name" name="username"></input>
        <button onClick={this.submit} type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
      </form>
    </div>

    <BarSearch />
      {this.state.mydata.map((postmap,i) => {
        <PostCont mydata = {postmap} key={postmap.username} postaction={this.postaction} postchange={this.postchange} triggerlikes = {this.triggerlikes} post_comment={this.state.post_comment}/>
      ))}
      </div>
    );
  }
}


export default App;
