import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from "react"
import styled from "styled-components"
import { useGetAllCharactersQuery,useGetHouseCharactersQuery } from "../features/apiSlice";


const Wrapper=styled.div`
margin: 50px auto;
max-width: 760px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`
const Card=styled.div`
width:calc((100% - 40px)/3);
height:400px;
display: flex;
flex-direction: column;

`

const PhotoDiv=styled.div`
width:100%;
height:300px;
background-image: url(${props=>props.imgUrl});
background-size: cover;
`
const NoPhoto = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgb(228 216 216);
`;

const Title=styled.div`
margin:10px;
font-weight: bold;
`

const Text=styled.div`
margin: 10px;
`

function DashBoard(){
  const houseName=useSelector(state=>state.characters.house)
  const thisPage = useSelector((state) => state.routePathName.routePath);
  
  const { data:houseCharacter, error, isLoading } = useGetHouseCharactersQuery(houseName?houseName:undefined);
  const {data:AllCharacters}=useGetAllCharactersQuery()
  const [roleState, setRoleState] = useState([]);

  useEffect(()=>{
  if(thisPage){
    setRoleState(houseCharacter);
  }else{
    setRoleState(AllCharacters);
  }  
  },[AllCharacters, houseCharacter, thisPage])


 
  return(
    <Wrapper>
      {roleState?.map((item)=>{
        return (
          <Card key={item.id}>
            {item.image ? <PhotoDiv imgUrl={item.image} /> : <NoPhoto />}
            <Title>{item.name}</Title>
            <Text>Date of Birth:{item.dateOfBirth}</Text>
          </Card>
        );
      })}
    </Wrapper>
  )
}

export default DashBoard