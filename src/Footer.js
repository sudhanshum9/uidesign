import React from 'react'
import './Footer.css'
import HomeIcon from '@material-ui/icons/Home';
import TimerIcon from '@material-ui/icons/Timer';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BarChartIcon from '@material-ui/icons/BarChart';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Footer() {
    return (
        <div className = 'footer'>
        
            < HomeIcon />
            < TimerIcon />
            < LocalHospitalIcon />
            <BarChartIcon />
            <MoreHorizIcon />
            
        </div>
    )
}

export default Footer
