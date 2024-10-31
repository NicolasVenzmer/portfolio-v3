import NavBarDesktop from "./components/navBar/NavBarDesktop";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NavBarMobile from "./components/navBar/NavBarMobile";
import Navigation from "./components/navigation/Navigation";

const App = () => {
    return (
        <>
            <NavBarDesktop/>
            <NavBarMobile/>
            <Navigation/>
            <Profile/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
