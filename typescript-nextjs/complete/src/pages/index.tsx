import styled from "@emotion/styled";
import Button from "components/Button";
import List from "components/List";
import useReqresApi from "hooks/useReqresApi";
import { useState } from "react";
import { Resource, User } from "types/api";

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

const CounterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 240px;
  margin-bottom: 16px;
`;

const Count = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Home() {
  const [count, setCount] = useState<number>(0);

  const users = useReqresApi<User[]>("users?per_page=12");
  const resources = useReqresApi<Resource[]>("resources?per_page=12");

  return (
    <Container>
      <CounterContainer>
        <Button onClick={() => setCount(count - 1)}>- 1</Button>
        <Count>{count}</Count>
        <Button onClick={() => setCount(count + 1)}>+ 1</Button>
      </CounterContainer>

      <Button type="stretch" onClick={() => setCount(0)}>
        Reset
      </Button>

      <ListContainer>
        {users && (
          <List
            items={users.slice(0, count)}
            renderItem={(user) => <li key={user.id}>{user.first_name}</li>}
          />
        )}
        <ul>
          {resources?.slice(0, count).map((resource) => (
            <li key={resource.id}>{resource.name}</li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
}

export default Home;
