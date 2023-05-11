import React, { useEffect, useState } from 'react'
import './style.css'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import axios from 'axios'

function About () {
  const [data, setData] = useState([])

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

  return (
    <>
      <header>
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
                        onClick={() => DeleteData(item.id)}
                        style={{ background: 'transparent' }}
                      >
                        <i
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
