import type { NextPage } from "next";
import { CumulativeGraphicCard } from "../components/cardGraphs/CumulativeGraphicCard";
import { Page } from "../components/Page";
import { SectionGraphCardGallery } from "../components/cardGraphs/SectionGraphCardGallery";

const Home: NextPage = () => {
  return (
    <Page>
      <SectionGraphCardGallery />
      <CumulativeGraphicCard />
    </Page>
  );
};

export default Home;
