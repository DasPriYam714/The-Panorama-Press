
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;