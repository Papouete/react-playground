function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous connecter</h1>;
}
function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

  return(
      <React.Fragment>
          {isLoggedIn ? 
          <React.Fragment>
              <UserGreeting />
              <button onClick={handleLogOut}>Se déconnecter</button>
          </React.Fragment> : 
          <React.Fragment>
              <GuestGreeting />
              <button onClick={handleLogIn}>Se connecter</button>
          </React.Fragment> }
      </React.Fragment>
  )
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.querySelector('#app')
);




// CORRECTION 

function UserGreeting({toggleIsLoggedIn}) {
    return (
      <React.Fragment>
        <h1>Bienvenue !</h1>
        <button onClick={toggleIsLoggedIn}>Se déconnecter</button>
      </React.Fragment>
    );
  }
  
  function GuestGreeting({toggleIsLoggedIn}) {
    return (
      <React.Fragment>
        <h1>Veuillez vous inscrire.</h1>
        <button onClick={toggleIsLoggedIn}>Se connecter</button>
      </React.Fragment>
    );
  }
  
  function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
    const toggleIsLoggedIn = () => {
      setIsLoggedIn((prevState) => !prevState);
    };
  
    return (
      <React.Fragment>
        {isLoggedIn ? <UserGreeting toggleIsLoggedIn={toggleIsLoggedIn} /> : <GuestGreeting toggleIsLoggedIn={toggleIsLoggedIn}/>}
      </React.Fragment>
    );
  }
  
  ReactDOM.render(
    // Essayez de changer ça vers isLoggedIn={true} :
    <Greeting />,
    document.getElementById("app")
  );