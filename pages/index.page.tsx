import { Center, DanteLogo, Page } from '../components';

const Home = () => {
  return (
    <Page>
      <Center>
        <DanteLogo />
      </Center>

      <section>
        <h2 className="font-bold">Head</h2>
        <div>description</div>
      </section>
    </Page>
  );
};

export default Home;
