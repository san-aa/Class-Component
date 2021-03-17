import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';


class App extends React.Component
{ 
    render()
    {
      return(
        <div>
         
        <h1 className="mainHead">
          Hello Sir! 
        </h1>
        <Button color="primary">Hello World</Button>;
     
        </div>
      )
    }
  
    }
export default App;
