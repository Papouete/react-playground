function App(props) {
  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersObject => setUsers(usersObject))
  }, [])

  const [users, setUsers] = React.useState([]);

  return(
      <React.Fragment>
      {
          users.map((u) =>(
              <UserCard key={u.id} user={u}/>
          ))
      }
      </React.Fragment>
  )
}

function UserCard({user}) {
  
  return (
      <ul className="user-card">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
      </ul>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))







////////////  La correction très sale ////////////////


const App = (props) => {
    const [ users, setUsers] = React.useState([])
    const [ user, setUser] = React.useState({
      name: '',
      company: {},
      website : '',
      phone : '',
      email: ''
    })
  
    const [selectedUserID, setSelectedUserID] = React.useState(1)
  
    React.useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then(response => response.json())
      //   .then(data => setUsers(data));
    }, []);
  
    React.useEffect(() => {
      console.log(users)
    }, [users]);
  
    React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserID}`).then(r => r.json()).then(data => setUser(data))
  
    }, [selectedUserID])
    
    const handleChange = (e) => {
      setSelectedUserID(e.target.value)
    }
  
    return <React.Fragment>
  
      <select value={selectedUserID} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      {/* {users.map((u) => (
        <UserCard key={u.id} user={u}/>
      ))} */}
  
      <UserCard user={user} />
    </React.Fragment>;
  };
  
  const UserCard = ({ user }) => {
    let {name, website, email, phone, company} = user;
  
    React.useEffect(() => {console.log(company)}, [company])
    // let {name} = company;
  
  
    return(
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{company.name}</li>
        <li>{phone}</li>
        <li>{website}</li>
      </ul>
    )
  }
  
  ReactDOM.render(<App />, document.querySelector("#app"));