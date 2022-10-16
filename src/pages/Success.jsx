import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border: 5px solid rgb(0, 255, 13);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Info = styled.div`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    font-size: 27px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Desc = styled.span`
    width: 400px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
`;

const Success = () => {
    const location = useLocation();

    console.log(location);
  return (
    <Container>
        <Image src="https://images.pexels.com/photos/1339366/pexels-photo-1339366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Info>Successfull</Info>
        <Desc>Your order is being prepared. Thanks for choosing Inda Shop</Desc>
    </Container>
  )
}

export default Success;