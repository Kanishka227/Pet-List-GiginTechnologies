import Pet from "./Pet"
import styles from "./Pets.module.css"
const Pets = ({petList}) => {
  return(
    <div className={styles.container}>
        {
          petList.map(pet => {
            return <Pet pet={pet} key={pet.id} />
          })
        }
    </div>
  )
}
export default Pets