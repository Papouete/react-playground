//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const lastName = 'moreau';
const firstName = 'florian';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toUpperCase(string) {
    return string.toUpperCase();
}

const element = (
    <div>
        <span>Bonjour </span>
        <span class ="red">{toUpperCase(lastName)} </span>
        <span>{capitalizeFirstLetter(firstName)} !</span>
    </div>
)

ReactDOM.render(
    element,
    document.querySelector('#app')
    );
