import React, {useState, useEffect, useRef } from 'react';
import { Button, Card, FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';



function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const el = useRef(null);

  useEffect(() => {
      el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  });


  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
          //code
   setUsername(prompt('Please enter your name'));

  }, [] ) //condition

  const sendMessage = (event) => {  
    event.preventDefault();

    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

  return (
    
    <div className="App">

    {/* input field*/}
    <form className="app__form">
      <FormControl className="app__formcontrol">
        <Input className="app__input" placeholder='Enter your message...' value = {input} onChange = {event => setInput(event.target.value)}/>
       
       
        {/* button */}
        
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >
          <SendIcon /> 
        </IconButton>

      </FormControl>
    </form>
  

     
    {/* messages */}
  
 <FlipMove>

    {  
    
  
      messages.map(({id, message}) => (
        <Message key={id} username={username} message={message}/>
      
      ))
      
    }
</FlipMove>
   <div id={'el'} ref={el}></div>
    </div>
  );
}

export default App;
