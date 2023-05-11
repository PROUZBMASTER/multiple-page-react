import React, { useEffect, useState } from 'react'
import './style.css'
import { Button, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

function About() {
  const [id, setId] = useState(0)
  // let [Username, setUsername] = useState("")
  let [value, setValue] = useState("")
  let [data, setData] = useState([])
  const [modal, setModal] = useState("scale(0)")
  const getData = () => {
    axios.get('http://localhost:9999/posts').then(res => {
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const DeleteData = id => {
    axios.delete(`http://localhost:9999/posts/${id}`).then(res => {
      setData(data?.filter(el => el.id !== id))
      alert(res.statusText)
    })
  }

  const editData = (id) => {
    axios.put(`http://localhost:9999/posts/${id}`, {
      username: value,
      email: "pro@gmail.com"
    })
    window.location.reload()
    alert(value)
  }
  const showModal = (n, str) => {
    setModal("scale(1)")
    setId(n)
    setValue(str)
    // setUsername(str)
  }

  return (
    <>
      <header>
        <div
          className="modal show"
          style={{ display: 'block', transform: `${modal}` }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title style={{ width: "90%" }} className="text-start">Modal title</Modal.Title>
              <button onClick={() => setModal("scale(0)")} style={{ background: "transparent", width: "10.5%", display: "inline", border: "2px solid black", borderRadius: "50%", color: "black" }}>X</button>
            </Modal.Header>

            <Modal.Body>
              <input onChange={(e) => setValue(e.target.value)} value={value} style={{ width: "100%" }} type="text" placeholder='enter edit text' />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={() => editData(id)}>Edit Username</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        <h1>Hello About Page</h1>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={7}>
              <ListGroup>
                {data?.map(item => (
                  <ListGroup.Item
                    key={item.id}
                    style={{
                      textAlign: 'start',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    {item?.username}
                    <div className='btnDiv'>
                      <button
                        onClick={() => showModal(item.id, item.username)}
                        style={{ background: 'transparent' }}>
                        <i id='iconca' className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        onClick={() => DeleteData(item.id)}
                        style={{ background: 'transparent' }}
                      >
                        <i id='ico'
                          style={{ color: 'black', fontSize: '26px' }}
                          className='fa-sharp fa-solid fa-trash'
                        ></i>
                      </button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default About
