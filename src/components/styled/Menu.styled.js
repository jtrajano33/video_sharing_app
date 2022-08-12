import styled from 'styled-components'

export const Container = styled.div`
    flex: 1.5;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100%;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top:0;
`
export const Wrapper = styled.div`
    padding: 18px 26px;
` 
export const LogoWrapper = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 18px
` 
export const Logo = styled.img`
   height:25px
` 
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 5px;
    &:hover{
        background: ${({theme}) => theme.soft};
    }
`
export const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start
`

export const Button = styled.button`
    padding: 5px 15px;
    background: transparent;
    border: 2px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px
`

export const Title = styled.h2`
    font-size:14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`