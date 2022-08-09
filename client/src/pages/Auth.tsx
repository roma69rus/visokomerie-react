import * as React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import {useNavigate} from 'react-router-dom'
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
 
export interface IAuthProps {
}

export const Auth = observer((props: IAuthProps) => {

  const {userData} = React.useContext(Context) as any
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const signIn = async () => {
    try{
      const response = await login(email, password);
      console.log(response)
      userData.setUser(JSON.parse(JSON.stringify(response)))
      userData.setIsAuth(true)
      console.log("userData.isAuth", userData.isAuth)
      navigate(ADMIN_ROUTE)
    }
    catch (e) {
      alert(e as string)
    }
    
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-2'
            placeholder='Введите ваш email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
            type="email"
          />
          <Form.Control
            className='mt-2'
            placeholder='Введите ваш пароль'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
            type="password"
          />
          <Button
            className='mt-3 align-self-end'
            variant='outline-secondary'
            onClick={() => signIn()}
          >
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  );
})

// export default{
//   Auth
// }


