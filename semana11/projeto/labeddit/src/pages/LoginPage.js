import React from 'react'
import styled from 'styled-components'
import { Button, TextField } from "@material-ui/core"
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from "../routes/coordinator"
import useForm from '../hooks/useForm'
import { login } from '../services/user'
import useUnprotectedPage from '../hooks/useUnprotectedPage'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`


const LoginPage = ({ setRightButtonText }) => {
    const history = useHistory()
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }



    return (
        <ScreenContainer>

            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}>
                        Login
                    </Button>

                </form>
                <Button
                    onClick={() => goToSignUpPage(history)}
                    type={"submit"}
                    color={"primary"}
                    fullWidth
                    margin={"normal"}
                >
                    Don't have an account? Sign Up
                </Button>
            </InputsContainer>


        </ScreenContainer>
    )
}

export default LoginPage;