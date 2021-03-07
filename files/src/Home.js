import Header from "./Header";
import Content from "./Content";
import Speakers from "./Speakers";


function Home() {
    return (
      <div className="Home">
          <Header />
          <Content />
          <Speakers />
      </div>
    );
  }
  
  export default Home;