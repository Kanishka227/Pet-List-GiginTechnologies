import styles from "./Pet.module.css"
import { useNavigate } from "react-router-dom";

const Pet = ({pet}) => {
  const navigate = useNavigate()
  const handlePetClick = (pet) => {
    navigate("/pet",{state: {pet}})
  }
  return (
    <div className={styles.card} onClick={()=>handlePetClick(pet)}>
      <img src={pet.images[0]} alt="pet image" />
      <h2>{pet.name}</h2>
      <h3>
        {pet.animal} , <span>{pet.breed}</span>
      </h3>
      <h4>
        <span>
          {pet.city} ,{pet.state}
        </span>
      </h4>
    </div>
  );
}
export default Pet