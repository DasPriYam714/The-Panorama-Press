import { useEffect, useState } from "react";
import { Link } from "react-router";


const LeftNavbar = () => {
    const[categories, setCategories]= useState([])
    useEffect(() =>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div>
            <h2  className="text-2xl mb-3">All Category:{categories.length}</h2>
            <div className="p-4 text-lg mb-3 space-y-6" >
                {
                    categories.map(category=><Link 
                        to={`/categories/${category.id}`}
                        className="block "
                        key={category.id}
                        >
                            <button className="btn w-full">{category.name}</button></Link>)
                }

            </div>
            </div> 
            <div>

            </div>
        </div>
    );
};

export default LeftNavbar;