import React from 'react'
import FeedCard from '../components/FeedCard'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import styled from 'styled-components'
import { goToPostPage } from '../routes/coordinator'
import { useHistory } from 'react-router'
import { Button, TextField } from "@material-ui/core"
import useForm from '../hooks/useForm'
import axios from 'axios'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`

export const AddButton = styled.button`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`
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

const FeedPage = () => {
    const [form, onChange, clear] = useForm({ text: "", title: "" })
    const history = useHistory()
    const cards = useRequestData([], `${BASE_URL}/posts`)
    useProtectedPage()

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
            .then((res) => {
                clear()
            })
            .catch((err) => console.log(err))
    }

    const onClickCard = (id) => {
        goToPostPage(history, id)
        console.log('id', id)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        createPost()

    }

    const cardsFeed = cards.posts && cards.posts.map((post) => {

        return (
            <FeedCard
                key={post.id}
                title={post.title}
                text={post.text}
                username={post.username}
                onClick={() => onClickCard(post.id)}
            />

        )
    })
    return (
        <ScreenContainer>
            <h1>Create Post</h1>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"text"}
                        value={form.text}
                        onChange={onChange}
                        label={"Text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                    />
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Title"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"title"}
                    />
                    <Button type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        fullWidth
                        margin={"normal"}>
                        Post
                    </Button>

                </form>

            </InputsContainer>



            <ListContainer>
                {cardsFeed}
                <AddButton
                    color={"primary"}

                >

                </AddButton>
            </ListContainer>
        </ScreenContainer>
    )
}

export default FeedPage;