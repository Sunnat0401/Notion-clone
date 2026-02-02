import Image from "next/image";
import PricingCard from "./pricing-card";

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-wxl">
        One tool for your whole company . Free for teams to try
      </h1>
      <p className="upparcase opacity-70"> TRUSTED BY TEAMS AT</p>
      <div className="flex gap-4 flex-row flex-wrap mt-4">
        {teams.map((team, idx) => (
          <Image src={team} width={50} height={50} key={idx} alt="team" />
        ))}
      </div>
      <div className="mt-6">
        <div className="space-y-8  lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {cards.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const teams = ["/teams/1.svg", "/teams/2.svg", "/teams/3.svg", "/teams/4.svg"];

const cards = [
  {
    title: "Free",
    subtitle: "For organizing every corner of your work & life .",
    options:
      "Collabrative workspave , INtegrate width Slack , Github & more , Basic page analytics , 7 day page history , Invite 10 hugest",
    price: "Free",
  },
  {
    title: "Plus",
    subtitle: "A plane for small groups to plan & get organized",
    options:
      "Unlimited blocks  for teams , UNlimited fule upload  , 30 day page history , Invite 100 guests ",
    price: "8",
  },
  {
    title: "Bussiness",
    subtitle: "For companies using Notion to connect several teams & tools",
    options:
      "SAML SSO , Private teamspace , Bulk PXF export , Advanced page analytics , 90 day page history , Invite 250 guests",
    price: "15",
  },
];
