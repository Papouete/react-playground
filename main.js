//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;


/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

// ReactDOM.render(helloWorld, document.querySelector('#app'));


function FirstName(props) {
    return <span>{capitalizeFirstLetter(props.prenom)}</span>;
}

function LastName(props) {
    return <span class="red-text">{toUpperCase(props.nom)}</span>;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function App() {
    return (
      <div>
        <FirstName prenom="florian " />
        <LastName nom="moreau"/>
      </div>
    );
  }


ReactDOM.render(
    <App />,
    document.querySelector('#app')
    );