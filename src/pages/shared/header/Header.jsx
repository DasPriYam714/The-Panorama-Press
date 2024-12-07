import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            
            <img src={logo} alt="" />
            <h2>Journalism without Fear and Favour</h2>
            <p className='text-2xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
    );
};

export default Header;