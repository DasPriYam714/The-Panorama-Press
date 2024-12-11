import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex items-center bg-gray-200 rounded-lg w-full mt-4">
            <div className="mr-2 p-4">
            <button className="btn btn-secondary"> Breaking News</button>
            </div>
            <div className="w-full mr-3">
            <Marquee pauseOnHover={true}>
                Now we working on ReactJS Projects.
            </Marquee>
            </div>
            
        </div>
    );
};

export default BreakingNews;