import story_1 from "../src/assets/images/story_1.webp";
import story_2 from "../src/assets/images/story_2.webp";
import story_3 from "../src/assets/images/story_3.webp";
import story_4 from "../src/assets/images/story_4.webp";
import "./App.css";
import Ball from "./components/Ball";
import Header from "./components/Header";
import SectionOne from "./components/Sections/section1";
import SectionTwo from "./components/Sections/section2";
import SectionThree from "./components/Sections/section3";
import SectionFour from "./components/Sections/section4";
import Sidebar from "./components/Sidebar";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="App">
      <Stars />
      <main>
        <Header />
        <Sidebar />
        <SectionOne id={"section-1"} />
        <SectionTwo
          id={"section-2"}
          description="A professor observed scalability issues in blockchain technology that predated Ethereum’s launch."
          image={story_1}
          reverse={false}
        />
        <SectionTwo
          id={"section-3"}
          reverse={false}
          description=" He crafted an idea for resolving conflicting blockchain updates with
            interactive fraud proofs. These proofs require back-and-forth
            communication between parties to find the true chain state."
        />
        <SectionTwo
          id={"section-4"}
          reverse={false}
          description="Years passed until two Ph.D. students met with their professor and
          committed to building out their vision for a scalable blockchain
          solution."
        />
        <SectionTwo
          id={"section-5"}
          description="Excited by Ethereum’s potential to be a credibly neutral settlement
          layer for the world, they started working on bringing Arbitrum to
          life."
          reverse={true}
          image={story_2}
        >
          <Ball x="80%" y="-10%" width="25%" maxWidth="350px" color="silver" />
        </SectionTwo>
        <SectionTwo
          id={"section-6"}
          description="After many iterations and a few new gray hairs, the entire system –
          fraud proofs and all – was alive."
          image={story_3}
          reverse={false}
        />
        <SectionTwo
          id={"section-7"}
          description="dApps launched, Discord exploded, crypto Twitter was ablaze. Entire
          ecosystems within Arbitrum were formed with their own languages,
          emojis, culture. Fueled by the thriving community, the team building
          Arbitrum itself expanded."
          reverse={false}
        />
        <SectionTwo
          id={"section-8"}
          description="Overwhelming amounts of “wen token” requests flooded in. However, building robust, stable infrastructure remained the top priority. The next year was spent honing in on key scalability improvements, leading to the release of Arbitrum Nitro."
          image={story_4}
          reverse={true}
        />
        <SectionTwo
          id={"section-9"}
          reverse={false}
          description="Armed with battle-tested infrastructure, Arbitrum is ready to decentralize and The Arbitrum Foundation will distribute voting power via the ARB token."
        >
          <Ball x="50%" y="-10%" width="50%" maxWidth="550px" color="blue" />
        </SectionTwo>
        <SectionTwo
          id={"section-10"}
          reverse={false}
          description="This token gives the community control in shaping the very foundation and future of Arbitrum and Ethereum."
        />
        <SectionTwo
          id={"section-11"}
          reverse={false}
          description="The Arbitrum DAO will be controlled by no single entity. Token holders can either delegate or retain their voting power. Decentralized governance is a nascent concept and we are purposefully allowing space for the community to guide its formation."
        />
        <SectionThree
          id={"section-12"}
          reverse={false}
          description="With great power comes great responsibility."
        >
          <Ball x="-30%" y="-50%" width="70%" maxWidth="850px" color="purple" />
        </SectionThree>
        <SectionFour id={"section-13"} />
      </main>
    </div>
  );
}

export default App;
