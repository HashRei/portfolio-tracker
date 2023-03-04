import { SectionGraphCard } from "./SectionGraphCard";

export function SectionGraphCardGallery() {
  return (
    <div>
      <div className="flex justify-center">
        <SectionGraphCard
          sectionName="Gold & Silver"
          currentSectionValue={46}
          currentSectionDelta={8}
          backgroundColor="rgb(0, 123, 255)"
          graphTension={0.4}
          fillGraph={false}
          graphType="Line"
          graphLabel="graphLabel"
        />
        <SectionGraphCard
          sectionName="Stocks"
          currentSectionValue={46}
          currentSectionDelta={14}
          backgroundColor="#17a2b8"
          graphTension={0.4}
          fillGraph={true}
          graphType="Line"
          graphLabel="graphLabel"
        />
      </div>
      <div className="flex justify-center">
        <SectionGraphCard
          sectionName="Crypto"
          currentSectionValue={46}
          currentSectionDelta={26}
          backgroundColor="#28a745"
          graphTension={0}
          fillGraph={true}
          graphType="Line"
          graphLabel="graphLabel"
        />
        <SectionGraphCard
          sectionName="Real Estate"
          currentSectionValue={46}
          currentSectionDelta={3}
          backgroundColor="#ffc107"
          graphTension={0.4}
          fillGraph={false}
          graphType="Bar"
          graphLabel="graphLabel"
        />
      </div>
    </div>
  );
}
