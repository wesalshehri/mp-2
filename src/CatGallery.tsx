import styled from "styled-components";

// Define the type for a Cat
interface Cat {
    url: string;
}

// Style components
const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CatCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

const CatImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

// Fix the function by adding explicit types
export default function CatGallery({ cats }: { cats: Cat[] }) {
    return (
        <GalleryContainer>
            {cats.length === 0 ? (
                <p>Loading...</p>
            ) : (
                cats.map((cat: Cat, index: number) => (
                    <CatCard key={index}>
                        <CatImage src={cat.url} alt="A cute cat" />
                    </CatCard>
                ))
            )}
        </GalleryContainer>
    );
}
