import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () => {


  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);


  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users) )
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)  
    })
    setfilteredMonsters(newFilteredMonsters)
}, [monsters, searchField])
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters = {filteredMonsters} /> 
    </div>
  )


}
// function App() {
// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField:''
//     }
//     // console.log( 1)
//   }


//   componentDidMount() {
//     // console.log( 3)
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },() => {
//         // console.log(this.state)
//       }))
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value)
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField }
//     })
//   }

//   render() {
//     // console.log( 2)

//     const {monsters, searchField} = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)  
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox onSearchChange = {onSearchChange}/>
//         <CardList monsters = {filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
