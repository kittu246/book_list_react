
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigation } from 'react-router-dom'

const HomeLayout = () => {
    const navigation = useNavigation();
  return (
    <div>
        <Navbar/>
        {navigation.state=='loading' ? <div>Loading...</div> :<Outlet className='outlet'/>}

       
    </div>
  )
}

export default HomeLayout