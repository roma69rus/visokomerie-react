import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import './css/media-1024.css'
import './css/media-768.css'
import './css/media-320.css'
import './css/normalize.css'
import 'semantic-ui-css/semantic.min.css'
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';




const App = observer(() => {
  const { userData } = useContext(Context) as any
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check()
        .then(data => {
          userData.setUser(JSON.parse(JSON.stringify(data)))
          userData.setIsAuth(true)
          console.log("CHECK DATA", data)
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
      userData.setUser({})
      userData.setIsAuth(false)
    }
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App; 