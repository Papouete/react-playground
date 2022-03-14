const name = 'FLORIAN';
const element = <h1>SALUT A TOI, {name}</h1>;


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(
    element, 
    document.querySelector('#app')
);
