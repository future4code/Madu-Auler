import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './header-styled'
import { goToLoginPage, goToFeedPage } from '../routes/coordinator'
import { useHistory } from 'react-router-dom'


const Header = ({ rightButtonText, setRightButtonText }) => {
    const history = useHistory()
    const token = localStorage.getItem("token")


    const logout = () => {
        localStorage.removeItem('token')
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header