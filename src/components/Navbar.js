import React , {useState}from 'react'



function Navbar() {
    // const menubtn = document.querySelector('.menu-btn');
    // let menuOpen = false;
    // menubtn.addEventListener('click', ()=> {
    //     if(!menuOpen) {
    //         menubtn.classList.add('open');
    //         menuOpen = true;
    //     } else {
    //         menubtn.classList.remove('open');
    //         menuOpen = false;
    //     }
    // })

    const [menuOpen, setmenuOpen] = useState(false)

   
    return (
        <div className="Navbar">
            <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setmenuOpen(!menuOpen)}>
                <div className="menu-btn_burger"></div>
            </div>

        </div>
    )
}

export default Navbar
