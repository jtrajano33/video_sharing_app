import React from 'react'
import { ChannelImage, Container, Details, Image, Texts, Title, ChannelName, Info } from './styled/Card.styled'
import { Link } from 'react-router-dom';

export const Card = () => {
    return (
        <Link to={'/video/test'} style={{textDecoration: 'none'}}>
            <Container>
                <Image src="https://i.ytimg.com/vi/rpIsjz-oLOQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyqYp5mXPamJENQvjGjy41lJeoYA" />
                <Details>
                    <ChannelImage src='https://yt3.ggpht.com/ytc/AMLnZu9EXfu3i2eLweWHU7qpCN-PbE9SK1EX4P8Z6Iab8w=s88-c-k-c0x00ffffff-no-rj-mo' />
                    <Texts>
                        <Title>ヒロイン育成計画 feat. 涼海ひより / HoneyWorks</Title>
                        <ChannelName>Honeyworks OFFICIAL</ChannelName>
                        <Info>35M views . 2 years ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}
