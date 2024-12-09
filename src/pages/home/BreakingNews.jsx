import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex">
            <div className="mr-5">
            <button className="btn btn-secondary"> Breaking News</button>
            </div>
            <div>
            <Marquee pauseOnHover={true}>
                Now we working on ReactJS Projects.
            </Marquee>
            </div>
            
        </div>
    );
};

export default BreakingNews;