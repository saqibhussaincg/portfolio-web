import React from 'react'
import './topbar.scss'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'> genius. </a>

          <div className='itemContainer' >
            <PersonIcon className='icon' />
            <span>+92 123 456 789</span>
          </div>

          <div className='itemContainer'>
            <EmailIcon className='icon' />
            <span>saqib@genius.com</span>
          </div>

        </div>
        <div className='right'>
        </div>
      </div>
    </div>
  )
}

export default Topbar