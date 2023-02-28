import React, {useState} from "react";

function Form({onSubmit}){
const [newdata, setNewData] = useState({
    description: "",
    image: "",
    location: ""
});

   return ( <form onSubmit={(e) => { e.preventDefault()
   onSubmit(newdata)}}>
        <label>Description:</label>
        <input name="description" onChange={(e) => {setNewData({...newdata, [e.target.name]: e.target.value})}} value={newdata.description}/>
        <label>Image:</label>
        <input name="image" onChange={(e) => {setNewData({...newdata, [e.target.name]: e.target.value})}} value={newdata.image} />
        <label>Location:</label>
        <input name="location" onChange={(e) => {setNewData({...newdata, [e.target.name]: e.target.value})}} value={newdata.location} />
        <input type="submit"/>
    </form>)
}

export default Form;