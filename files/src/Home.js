import './home.css'
import Header from "./Header";
import Content from "./Content";
import Speakers from "./Speakers";


function Home() {
    return (
      <div className="home">
        <Header />
        <Content />
        <Speakers name="John" topic="Snowboarding in summer"/>
        <Speakers name="Jane" topic="Skateboarding in the workplace"/>
        <Speakers name="Bob" topic="Kitesurfing with no wind"/>
        <Speakers name="Marta" topic="Longboarding on a short board"/>
        <Speakers name="Anna" topic="Bodyboarding with no body"/>
        <Speakers name="Agata" topic="Surfing without straps"/>
        <Speakers name="Jessie" topic="Skiing with no boots"/>
        <Speakers name="Alex" topic="Skiing on grass"/>
      </div>
    );
  }
  
  export default Home;