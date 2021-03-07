import './header.css';


function Header() {
  return (
    <div className="header">
        <h1>Boards conference</h1>
        <div className="info">
       <button>Location</button> 
       <button>Contact</button> 
       <button>Manage</button> 
        </div>
    </div>
  );
}

export default Header;
