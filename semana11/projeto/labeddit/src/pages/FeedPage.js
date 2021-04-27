import React from 'react'
import FeedCard from '../components/FeedCard'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import styled from 'styled-components'
import { goToPostPage } from '../routes/coordinator'
import { useHistory } from 'react-router'

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

const FeedPage = () => {
    const history = useHistory()
    const cards = useRequestData([], `${BASE_URL}/posts`)
    console.log(cards)
    useProtectedPage()

    const onClickCard = (id) => {
        goToPostPage(history, id)
    }

    const cardsFeed = cards.posts && cards.posts.map((post) => {
        return (
            <FeedCard
                key={post.id}
                title={post.title}
                text={post.text}
                username={post.username}

            />
        )
    })
    return (
        <ListContainer>
            {cardsFeed}
            <AddButton
                color={"primary"}

            >

            </AddButton>
        </ListContainer>
    )
}

export default FeedPage;