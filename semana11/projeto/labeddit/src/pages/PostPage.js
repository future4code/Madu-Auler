import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestDataId from '../hooks/useRequestDataId'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

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


const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    console.log('params', params)
    const post = useRequestDataId({}, `${BASE_URL}/posts/${params.id}`)
    console.log('post', post)



    return (
        <ScreenContainer>
            <PostContainer>
                <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{post.title}</Typography>
                <Typography align={'center'}>{post.text}</Typography>
                <Typography align={'center'}>{post.username}</Typography></PostContainer>
        </ScreenContainer >
    )
}

export default PostPage;