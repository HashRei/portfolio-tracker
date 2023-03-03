import type { NextPage } from "next";
import { CumulativeGraphicCard } from "../components/cardGraphs/CumulativeGraphicCard";
import { Page } from "../components/Page";
const Home: NextPage = () => {
  return (
    <Page>

      <CumulativeGraphicCard />
    </Page>
  );
};

export default Home;
