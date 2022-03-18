/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {
    React.useEffect(() => {
        tick();        
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [colorText, setColorText] = React.useState("grey");
    const defaultInterval = React.useRef();

    const tick = () => {
        defaultInterval.current = setInterval(() => {
            setDate(new Date())
        }, 1000)
    };

    const randomColor = () => {
        var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setColorText(randomColor);
    };

    // const defaultColor = () => {
    //     setColorText('grey');
    // };

    const stop = (e) => {
        e.preventDefault();
        clearInterval(defaultInterval.current);
    };
    const start = (e) => {
        e.preventDefault();
        tick();
    };

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style = {{color:colorText}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={randomColor}>randomColor</button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));






////////////// CORRECTION PROF ///////////////

function Clock(props) {
    const [color, setColor] = React.useState('teal');
    const [date, setDate] = React.useState(new Date());
    const intervalRef = React.useRef();

    React.useEffect(() => {        
        tick();     
    }, []);
    
   

    const tick = () => {
        intervalRef.current = setInterval(() => {
            setDate(new Date())
        }, 1000);
    }

    const changeColor = (reset) => {
        if(reset){
            setColor('black')
            return
        }
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }

    const stopClock = () => {
        clearInterval(intervalRef.current);
    }    

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{ color }}>Il est {date.toLocaleTimeString()}.</h2>
            <div>
            <button onClick={() => changeColor()}>Change color</button>
            <button onClick={() => changeColor(true)}>Reset color</button>
            </div>
            <div>
            <button onClick={stopClock}>Stop clock</button>
            <button onClick={tick}>Start clock</button>
            </div>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





