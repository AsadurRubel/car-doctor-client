import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <h2>This Is Home</h2>
        </div>
    );
};

export default Home;