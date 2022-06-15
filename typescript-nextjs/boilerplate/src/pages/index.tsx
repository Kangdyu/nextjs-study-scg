import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 380px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

function HomePage() {
  return <Container>Hello SCG</Container>;
}

export default HomePage;
