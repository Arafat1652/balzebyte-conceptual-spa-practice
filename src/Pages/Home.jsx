import Hero from "../component/Hero/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
    return (
        <div className="flex relative justify-center items-center min-h-[calc(100vh-116px)]">
            <Hero></Hero>
          <img className="absolute bottom-0 w-full" src={wave} alt=""/>
        </div>
    );
};

export default Home;