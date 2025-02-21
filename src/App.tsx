import { useState, useEffect } from "react";
import styled from "styled-components";
import CatGallery from "./CatGallery";

const ParentDiv = styled.div`
  width: 100vw;
  margin: auto;
  padding: 20px;
  border: 5px darkgoldenrod solid;
  text-align: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const Controls = styled.div`
  margin: 15px 0;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  background-color: darkgoldenrod;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: goldenrod;
  }
`;

export default function App() {
    const [cats, setCats] = useState([]);

    const fetchData = async () => {
        try {
            console.log("Fetching new cat images...");
            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search?limit=10"
            );
            const data = await response.json();
            setCats(data);
        } catch (error) {
            console.error("Error fetching cat data:", error);
        }
    };

    // Fetch images immediately when the page loads
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ParentDiv>
            <StyledTitle>Cat Gallery</StyledTitle>
            <Controls>
                <StyledButton onClick={fetchData}>Load New Cats</StyledButton>
            </Controls>
            <CatGallery cats={cats} />
        </ParentDiv>
    );
}
