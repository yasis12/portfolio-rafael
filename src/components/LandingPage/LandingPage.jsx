//Styling Imports
import './LandingPage.css'
//MUI Imports
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
//React



function LandingPage() {

  const submitButton = () => {
    alert('COMPLETED');
  }

  const buttonOne = (event) => {
    alert('Hi these are my buttons. Feel free to click around there may be a secret or two (;')
  }

  const buttonTwo = (event) => {
    //todo: Add toast pop up.
  }

  return (
    <>
    <div className='LandingPage'>
      <div id='landingPageTitle'>
        <h1 id='landing-title'>Hi I'm Rafael</h1>
      </div>
      <div id='button-card'>
        <form onSubmit={submitButton}>
          <div className='button-row'>
            <div className='button-container'>
                <Button onClick={buttonOne} variant="contained" color="secondary" size="large">Click Me</Button>
            </div>
            <div className='button-container'>
            <Button variant="contained" color="error" size="large">Click Me</Button>
            </div>
            <div className='button-container'>
            <Button variant="contained" color="primary" size="large">Click Me</Button>
            </div>
            <div className='button-container'>
              <div id='radio-buttons'>
                <input type="radio" /> 
                <input type="radio" /> n
                <input type="radio" /> 
                <input type="radio" />
              </div>
            </div>
            <div className='button-container'>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            </div>
            <div className='button-container'>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            </div>
          </div>
          <div className='button-row'>
            <div className='button-container'>
              <input type="text" placeholder='Text' />
            </div>
            <div className='button-container'>
              <input type="checkbox" />
            </div>
            <div className='button-container'>
              <input type="date" />
            </div>
            <div className='button-container'>
              <input type="file" />
            </div>
            <div className='button-container'>
              <input type="password" placeholder='password'/> 
            </div>
            <div className='button-container'>
              <input type="week" />
            </div>
          </div>
          {/* Start bottom password thingy */}
          <div className='button-row'>
            <div className='button-container'>
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
            </div>
            <div className='button-container'>
              <input type="checkbox" />
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
              <input type="checkbox" />
            </div>
            <div className='button-container'>
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
            <div className='button-container'>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
            </div>
            <div className='button-container'>
                <input  type="checkbox" />
                <input className='passwordbutton' type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </div>
            <div className='button-container'>
              <input type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
              <input className='passwordbutton' type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LandingPage;