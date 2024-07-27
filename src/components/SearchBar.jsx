import { useRef, useState } from "react";
import styles from "./SearchBar.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchedPost,setSearchedPosts] = useState([])
  const animal = useRef()
  const location = useRef()
  const breed = useRef()
  const navigate = useNavigate()
  const handleOnClick = () => {
    if(animal.current.value == "" || location.current.value == "" || breed.current.value == ""){
      alert("Please fill all the input fields!")
      return
    }
    const getSearchedPosts = async() => {
      try{
        const animalValue = animal.current.value.trim()
        const locationValue = location.current.value.trim()
        const breedValue = breed.current.value.trim()
        const res = await axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animalValue}&location=${locationValue}&breed=${breedValue}`)
        setSearchedPosts(res.data.pets)
        navigate("/search", {state: {searchedPost: res.data.pets}})
      }
      catch(error){
        console.log("error fetching data",error);
      }
    }
    getSearchedPosts()
  }
  return(
    <div className={styles.container}>
        <input type="text" ref={animal} placeholder="animal"/>
        <input type="text" ref={location} placeholder="location"/>
        <input type="text" ref={breed} placeholder="breed"/>
        <button onClick={handleOnClick}>Search</button>
    </div>
  )
}
export default SearchBar