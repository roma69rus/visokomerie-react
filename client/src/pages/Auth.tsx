import * as React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IAuthProps {
}

export default function Auth(props: IAuthProps) {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight-54}}
    >
      <Card style={{width:600}} className = "p-5">
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
            className='mt-2'
            placeholder='Введите ваш email'
          />
          <Form.Control 
            className='mt-2'
            placeholder='Введите ваш пароль'
          />
          <Button className='mt-3 align-self-end' variant='outline-secondary'>
            Войти
          </Button>
        </Form>
    


      </Card>

    </Container>
  );
}



