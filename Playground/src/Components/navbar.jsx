import { NavLink } from "react-router-dom"
import '../styles/nav.css'
import { BadgePlus } from 'lucide-react';
import { House } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { Compass } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { Laugh } from 'lucide-react';



const Navbar=()=>{

    return(
        <>
            <div className="nav">
                 <div className="logo">
                    <h1><Laugh/> <span className="gradient-text">HeeHeee</span></h1>
                    <p>Your meme destination</p>
                </div>
                <NavLink className='page' to='/'> <House/> Memezz</NavLink>
                <NavLink className='page' to='/popup'> <BellRing/> Popup</NavLink>
                <NavLink className='page' to='/create'><BadgePlus/> Create</NavLink>
                <NavLink className='page' to='/hexplore'><Compass/>Hexplore</NavLink>
                <NavLink className='page' to='/profile'><CircleUserRound/> My Profile</NavLink>
                <button className="button"><NavLink className='navlink' to='/login'><LogIn/> Login</NavLink></button>
            </div>
        </>
    )
}
export default Navbar