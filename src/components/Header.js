import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setRoutesName } from "../features/routeSlice";

const Wrapper = styled.div`
  height: 140px;
  background-color: #764abc;
`;

const Container = styled.section`
  max-width: 760px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Link)`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 3px;
  text-decoration: none;
`;

const BtnDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled(Link)`
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${(props) => props.choose};

  border: none;
  cursor: pointer;
  &:hover {
    background-color: #926bcf;
  }
`;

const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const Header = () => {
  const dispatch = useDispatch();
  
  const pageName = useSelector((state) => state.routePathName.routePath);

  const clickHandler = (houseName) => {
    if(houseName){
    dispatch(setRoutesName(`/house/${houseName}`))
    }else{
      dispatch(setRoutesName(""))
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title to="/" onClick={()=>clickHandler("")}>
          Redux Message Board
        </Title>

        <BtnDiv>
          {house.map((item) => {
            return (
              <Btn
                to={`house/${item}`}
                key={item}
                onClick={() => clickHandler(item)}
                choose={pageName.split("/")[2] === item ? "#926bcf" : "#481499"}
              >
                {item}
              </Btn>
            );
          })}
        </BtnDiv>
      </Container>
    </Wrapper>
  );
};

export default Header;
