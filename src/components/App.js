import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form"

function App() {

  const[Items, setItems] = useState([]);
  const[filterItems, setFilterItems] = useState("");
  const[sort, setSort] = useState(false);

function handleSubmit(data){
  fetch("http://localhost:6001/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(data => setItems([...Items, data]))

}

  function sortByLocation(){
    console.log("hello")
    setSort(!sort)
    if (sort){
      const sortedItems = [...Items].sort((a, b) => {
        if (a.location < b.location) {
          return -1;
        }
        if (a.location > b.location) {
          return 1;
        }
        return 0;
      });
      setItems(sortedItems);

    }else {
      const sortedItems = [...Items].sort((a, b) => {
        if (a.location > b.location) {
          return -1;
        }
        if (a.location < b.location) {
          return 1;
        }
        return 0;
      });
      setItems(sortedItems);
    }
  };

  function handleType(str){
    console.log(str)
    setFilterItems(str.toLowerCase())
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(items => setItems(items.filter(item=> item.description.toLowerCase().includes(filterItems))))
  }, [filterItems])

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    setItems(Items.filter(item => item.id !== id))
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(items => setItems(items))
    setFilterItems(Items)
  }, [])

  return (
    <div className="app">
      <Header callback={handleType}/>
      <br />
      <span>Filter By Location:</span>
      <input  onChange={sortByLocation} type="checkbox" />
      <Form onSubmit={handleSubmit}/>
      <ListingsContainer callback={handleDelete} Items={Items}/>
    </div>
  );
}

export default App;
