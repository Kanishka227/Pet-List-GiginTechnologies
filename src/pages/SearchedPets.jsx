import { useLocation } from "react-router-dom"
import Pets from "../components/Pets"

const SearchedPets = () => {
  const location = useLocation()
  const searchedPosts  = location.state?.searchedPost || [];
  return(
    <>
      {searchedPosts.length < 1 && <h1>Sorry , no pets matches the search !</h1>}
      <Pets petList={searchedPosts}/>
    </>
  )
}
export default SearchedPets
