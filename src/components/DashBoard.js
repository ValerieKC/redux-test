import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAllCharactersQuery,
  useGetHouseCharactersQuery,
} from "../features/apiSlice";

const Wrapper = styled.div`
  margin: 50px auto;
  max-width: 760px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Card = styled.div`
  width: calc((100% - 40px) / 3);
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.61);
`;

const PhotoDiv = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
`;
const NoPhoto = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgb(228 216 216);
`;

const Title = styled.div`
  margin: 10px;
  font-weight: bold;
`;

const Text = styled.div`
  margin: 10px;
`;

const End = styled.div``;

function DashBoard() {


  const [houseNameState, setHouseNameState] = useState("");
  const location = useLocation();
  const isHousePage = location.pathname.startsWith("/house/");

  useEffect(() => {
    if (isHousePage) {
      setHouseNameState(location.pathname.split("/")[2]);
    } else {
      setHouseNameState("");
    }
  }, [isHousePage, location.pathname]);

  const {
    data: houseCharacter,
    error,
    isLoading,
  } = useGetHouseCharactersQuery(houseNameState ? houseNameState : undefined);
  const { data: AllCharacters } = useGetAllCharactersQuery();
  const [roleState, setRoleState] = useState([]);
  const [paginationState, setPaginationState] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    if (isHousePage) {
      if (!houseCharacter) return;
      setRoleState(houseCharacter);
      const page1 = houseCharacter?.slice(0, 21);
      setPaginationState(page1);
    } else {
      if (!AllCharacters) return;
      setRoleState(AllCharacters);
      const page1 = AllCharacters?.slice(0, 21);
      setPaginationState(page1);
    }
  }, [AllCharacters, houseCharacter, isHousePage]);

  const addPage = useCallback(() => {
    const count = paginationState.length;
      const singlePage = roleState?.slice(
        count,
        Math.min(count + 21, roleState.length)
      );
      setPaginationState((prev) => [...prev, ...singlePage]);

  }, [paginationState.length, roleState]);

  const handlePaginated = useCallback(
    (entries) => {
      const target = entries[0];

      if (target.isIntersecting) {
        addPage();
      }
    },
    [addPage]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(handlePaginated, options);

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [handlePaginated]);

  return (
    <>
      <Wrapper>
        {paginationState?.map((item) => {
          return (
            <Card key={item.id}>
              {item.image ? <PhotoDiv imgUrl={item.image} /> : <NoPhoto />}
              <Title>{item.name}</Title>
              <Text>Actor:{item.actor}</Text>
            </Card>
          );
        })}
      </Wrapper>
      <End ref={ref} />
    </>
  );
}

export default DashBoard;
