import { useState } from 'react'
import styled from 'styled-components'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../database/Firebase'
import AnimatedButton from './AnimatedButton'

const Form = () => {
  const valorInicial = {
    nombre: '',
    email: '',
    numero: ''
  }
  const [user, setUser] = useState(valorInicial)

  const capturarInputs = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const guardarDatos = async e => {
    e.preventDefault()
    console.log(user)
    setLoader(true)

    addDoc(collection(db, 'registro'), {
      ...user
    })
      .then(() => {
        setLoader(false)
        alert('Estas inscrito a la lista de espera.👍')
      })
      .catch(error => {
        alert(error.message)
        setLoader(false)
      })

    setUser({ ...valorInicial })
  }

  const [loader, setLoader] = useState(false)

  return (
    <FormStyles>
      <form className='form' onSubmit={guardarDatos}>
        <h4 className='secondary-heading'>Registrate en la lista de espera.</h4>
        <div className='form-register'>
          <input
            type='text'
            name='nombre'
            placeholder='Ingresa tu nombre'
            onChange={capturarInputs}
            value={user.nombre}
          />
          <input
            type='text'
            name='email'
            placeholder='Ingresa tu email'
            onChange={capturarInputs}
            value={user.email}
          />
          <input
            type='text'
            name='numero'
            placeholder='Ingresa tu numero'
            onChange={capturarInputs}
            value={user.numero}
          />
          <AnimatedButton className='btn' name={'Enviar'} />
        </div>
      </form>
    </FormStyles>
  )
}

const FormStyles = styled.div`

  .form-register {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
    @media screen and (max-width: 1347px) {
        padding: 5rem 14rem;
        font-size: 3rem;
      }
      @media screen and (max-width: 1186px) {
        padding: 5rem 8rem;
        font-size: 3rem;

      }
      @media screen and (max-width: 990px) {
        padding: 5rem 4rem;
        font-size: 2rem;

    }
      @media screen and (max-width: 760px) {
        padding: 5rem 4rem;
        font-size: 2rem;
      
    }
  }
  input {
    border-radius: 20px;
    border: 1px solid var(--border-colour);
    padding: 0.5rem;
    margin: 0.5rem;
  }
  background-color: white;
  border-radius: 50px;
  border: 1px solid var(--border-colour);
  height: 25rem;
  padding: 2rem;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  h4 {
    font-size: 3rem;
    color: var(--purple-primary);
  }
  p {
    color: black;
  }
`

export default Form
