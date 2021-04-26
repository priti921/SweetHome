import React , {useState}from 'react';
import {SideBarData} from './SideBarData';
import {Link} from 'react-router-dom';
import Headroom from 'react-headroom';



function Navbar() {
   

    const [menuOpen, setmenuOpen] = useState(false)

   
    return (
        <Headroom>
        <div className="navbar">
            <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setmenuOpen(!menuOpen)}>
                <div className="menu-btn_burger"></div>
            </div>

            <Link to='/'>
                <h3 className="logo">Sweet Home</h3>
            </Link>

            <span></span>   {/*to align the logo in middle*/ }

        </div>
        <nav className={`sidebar ${menuOpen ? "open" : ""}`} >
            <ul className='sidebar-items'>
                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={() => setmenuOpen(!menuOpen)}>
                                {item.icon}
                                <span className="sidebar-title">{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </Headroom>
    )
}

export default Navbar
