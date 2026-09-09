import Container from 'react-bootstrap/Container'
import NavBar from '../../components/navbar/NavBar'
import TodoListTable from './components/TodoListTable'

function ToDo() {
  return (
    <>
      <NavBar />
      <Container className='mt-5'>
        <TodoListTable />
      </Container>
    </>
  )
}

export default ToDo