
import logo from '../assets/logo.png'
import bell from '../assets/bell.png'
import profile from '../assets/Profile.png'
import diamond from '../assets/diamond.png'
import bookHeart from '../assets/bookHear.png'

const Navbar = () => {
  return (
    <nav>
        <div className="leftNav">
        <img src={logo} alt='logo'/>
        <h3>KeazoN<span style={{fontSize:'16px',color:'wheat'}}>BOOKS </span>
        </h3>
        </div>
        <div className="centerNav">
            <form >
                <input type='text' placeholder='Search for book you want and read it now...Serlock Holmes ,Harry potter' name='search'/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="rightNav">
        <img src={bell} alt='logo'/>
        <img src={diamond} alt='logo'/>
        <img src={bookHeart} alt='logo'/>
        <img src={profile} alt='logo'/>

        </div>

    </nav>
  )
}

export default Navbar