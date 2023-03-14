import styled from "styled-components";

const Wrapper = styled.div`
  height:140px;
  background-color: #764abc;
`;

const Container=styled.section`
max-width: 760px;
height:100%;
margin: 0 auto;
display: flex;
flex-direction: column;
`

const Title = styled.div`
  width: 100%;
  height:calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 3px;
`;

const BtnDiv=styled.div`
width:100%;
height:40px;
display: flex;
justify-content: space-between;
`

const Btn = styled.button`
  width: 180px;
  height: 100%;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #481499;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #926bcf;
  }
`;

const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const Header=()=>{

  return (
    <Wrapper>
      <Container>
        <Title>Redux Message Board</Title>
        {/* <BtnDiv>
          {house.map((item) => (
            <Btn key={item}>{item}</Btn>
          ))}
        </BtnDiv> */}
      </Container>
    </Wrapper>
  );
}

export default Header