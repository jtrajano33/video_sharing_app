import styled from "styled-components";

export const Container = styled.div`
    width: 290px;
    margin-bottom: 45px;
    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`

export const Details= styled.div`
    display: flex;
    margin-top: 10px;
    gap: 12px;
`

export const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`

export const Texts = styled.div`

`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: ${({theme}) => theme.text};
`

export const ChannelName = styled.div`
    font-size: 13px;
    color: ${({theme}) => theme.textSoft};
    margin-top: 7px;
`

export const Info = styled.div`
    font-size: 13px;
    margin-top: 3px;
    color: ${({theme}) => theme.textSoft};
`