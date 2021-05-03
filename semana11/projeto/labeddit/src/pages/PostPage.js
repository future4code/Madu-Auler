import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestDataId from '../hooks/useRequestDataId'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Button, TextField } from "@material-ui/core"
import useForm from '../hooks/useForm'
import axios from 'axios'
import Card from '@material-ui/core/Card'
const FeedCards = styled(Card)`

  margin: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
`


const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  border: 2px solid black; 
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

const PostPage = () => {
  const [form, onChange, clear] = useForm({ text: "" })
  useProtectedPage()
  const params = useParams()
  console.log('params', params)
  const post = useRequestDataId({}, `${BASE_URL}/posts/${params.id}`)
  console.log('post', post)

  const createComent = () => {
    axios.post(`${BASE_URL}/posts/${params.id}/comment`, form, {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    })
      .then((res) => {
        clear()
      })
      .catch((err) => console.log(err))
  }


  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    createComent()

  }




  return (
    <ScreenContainer>
      <PostContainer>
        <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{post.title}</Typography>
        <Typography align={'center'}>{post.text}</Typography>
        <Typography align={'center'}>{post.username}</Typography>
        <Typography align={'center'}>{post.votesCount}</Typography></PostContainer>
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
          <Button type={"submit"}
            variant={"contained"}
            color={"primary"}
            fullWidth
            margin={"normal"}>
            Post
                    </Button>
        </form>
      </InputsContainer>

    </ScreenContainer >
  )
}

export default PostPage;