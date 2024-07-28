import axios from "axios"
import { useEffect, useState } from "react";
import Pets from "../components/Pets";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
const Home = () => {
  const [containsData, setContainsData] = useState(false)
  const [petList,setPetList] = useState([])
  useEffect(() => {
    const getPetsData = async() =>{
      try{
        const res = await axios.get("http://pets-v2.dev-apis.com/pets")
        setPetList(res.data.pets)
        setContainsData(true)
      }
      catch(error){
        console.log("Something went wrong in fetching the data from server ", error)
      }
    }
    getPetsData()
  },[])
 
  return (
    <div>
      <Heading/>
      <SearchBar/>
      {!containsData && <Loading/>}
      {containsData && <Pets petList={petList} />}
    </div>
  );
}
export default Home