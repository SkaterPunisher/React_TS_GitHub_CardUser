import { Container } from 'components/Container/Container';
import { Search } from 'components/Search/Search';
import { TheHeader } from 'components/TheHeader/TheHeader';
import { UserCard } from 'components/UserCard/UserCard';
import { defaultUser } from 'mock';

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => {}}/>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
