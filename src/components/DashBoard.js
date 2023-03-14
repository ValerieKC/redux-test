import styled from "styled-components"
import { useGetAllPostsQuery } from "../features/apiSlice"

const Wrapper=styled.div`
margin: 50px auto;
max-width: 760px;
outline: 1px solid salmon;
display: flex;
flex-wrap: wrap;
gap: 20px;
background-color: aqua;
`
const Card=styled.div`
width:calc((100% - 40px)/3);
height:400px;
outline: 1px solid navy;
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

function DashBoard(){
  console.log(useGetAllPostsQuery())



 
  return(
    <Wrapper>
      <div>hello</div>
      {/* {data?.map((item)=>{
        return (
          <Card key={item.id}>
            {item.image ? <PhotoDiv imgUrl={item.image} /> : <NoPhoto />}
            <Title>{item.name}</Title>
          </Card>
        );
      })} */}
    </Wrapper>
  )
}

export default DashBoard