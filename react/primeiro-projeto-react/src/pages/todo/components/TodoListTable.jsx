import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function TodoListTable() {
  const [modalToggle, setModalToggle] = useState(false)
  const [todoList, setTodoList] = useState([
    {
      title: 'Desenvolver os critérios de avaliação dos projetos', status: 'doing', created_at: '08 /09 / 2026' },
    { title: 'Criar exemplos de testes unitários em React', status: 'doing', created_at: '08/09/2026' },
    { title: 'Realizar testes sobre React em sala de aula', status: 'doing', created_at: '08/09/2026' },
    { title: 'Ranckear os alunos com mais desempenho e adicionar ao histórico do curso', status: 'doing', created_at: '08/09/2026' }
  ])

  function closeModal() {
    setModalToggle(false)
  }

  function openModal() {
    setModalToggle(true)
  }
  
  return (
    <>
      <Modal
        show={modalToggle}
        onHide={closeModal}
        centered
      >
        <Modal.Header closeButton className='bg-success'>
          <Modal.Title className='text-white'>Nova atividade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Atividade</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant='secondary' size='sm' onClick={closeModal}>Cancelar</Button>
          <Button variant='success' size='sm'>Criar</Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex justify-content-end">
        <Button variant="primary" size='sm' onClick={() => openModal()}>Nova</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            todoList.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.created_at}</td>
                <td>
                  <Button variant='info' size='sm'>
                    Editar
                  </Button>
                  <Button variant='danger' size='sm'>
                    Excluir
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
}

export default TodoListTable;
