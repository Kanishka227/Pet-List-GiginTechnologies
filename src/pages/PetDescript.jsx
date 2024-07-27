import { useLocation } from "react-router-dom"
import Pet from "../components/Pet"
import styled from "styled-components"

const PetDescript = () => {
  const location = useLocation()
  const {pet} = location.state
  return (
    <Container>
      <Pet pet={pet}/>
      <p>{pet.description}</p>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  p{
    width: 20%;
  }
`
export default PetDescript