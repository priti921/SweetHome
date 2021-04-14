import React , {useState}from 'react'



function Navbar() {
   

    const [menuOpen, setmenuOpen] = useState(false)

   
    return (
        <>
        <div className="Navbar">
            <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setmenuOpen(!menuOpen)}>
                <div className="menu-btn_burger"></div>
            </div>
        </div>
        <nav className={`sideber ${menuOpen ? "open" : ""}`} >
            <ul className='sidebar-items'>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar
