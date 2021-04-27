import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const FeedCards = styled(Card)`

  margin: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const CardContents = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`


const FeedCard = (props) => {


    return (
        <Container>
            <FeedCards onClick={props.onClick}>
                <CardActionArea>
                    <CardMedia
                        key={props.id}
                        title={props.title}
                        text={props.text}
                        username={props.username}
                    />
                    <CardContents>
                        <Typography align={'center'}>
                            {props.title.toUpperCase()}
                        </Typography>
                    </CardContents>
                </CardActionArea>
            </FeedCards>
        </Container>
    )
}

export default FeedCard
