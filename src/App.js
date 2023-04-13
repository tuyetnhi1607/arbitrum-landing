import "./App.css";
import Header from "./components/Header";
import SessionOne from "./components/Sessions/session1";
import SessionTwo from "./components/Sessions/session2";
import story_1 from "../src/assets/images/story_1.webp";
import story_2 from "../src/assets/images/story_2.webp";
import story_3 from "../src/assets/images/story_3.webp";
import story_4 from "../src/assets/images/story_4.webp";
import Stars from "./components/Stars";
import Ball from "./components/Ball";
import SessionThree from "./components/Sessions/session3";
import SessionFour from "./components/Sessions/session4";

function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      <main>
        <SessionOne />
        <SessionTwo
          description="A professor observed scalability issues in blockchain technology that predated Ethereum’s launch."
          image={story_1}
          reverse={false}
        />
        <SessionTwo
        reverse={false}
          description=" He crafted an idea for resolving conflicting blockchain updates with
            interactive fraud proofs. These proofs require back-and-forth
            communication between parties to find the true chain state."
        />
        <SessionTwo
        reverse={false}
          description="Years passed until two Ph.D. students met with their professor and
          committed to building out their vision for a scalable blockchain
          solution."
        />
        <SessionTwo
          description="Excited by Ethereum’s potential to be a credibly neutral settlement
          layer for the world, they started working on bringing Arbitrum to
          life."
          reverse={true}
          image={story_2}
        >
          <Ball
            x="calc(80%)"
            y="-15%"
            width="30%"
            maxWidth="350px"
            color="silver"
          />
        </SessionTwo>
        <SessionTwo
          description="After many iterations and a few new gray hairs, the entire system –
          fraud proofs and all – was alive."
          image={story_3}
          reverse={false}
        />
        <SessionTwo
          description="dApps launched, Discord exploded, crypto Twitter was ablaze. Entire
          ecosystems within Arbitrum were formed with their own languages,
          emojis, culture. Fueled by the thriving community, the team building
          Arbitrum itself expanded."
          reverse={false}
        />
        <SessionTwo
          description="Overwhelming amounts of “wen token” requests flooded in. However, building robust, stable infrastructure remained the top priority. The next year was spent honing in on key scalability improvements, leading to the release of Arbitrum Nitro."
          image={story_4}
          reverse={true}
        />
        <SessionTwo reverse={false} description="Armed with battle-tested infrastructure, Arbitrum is ready to decentralize and The Arbitrum Foundation will distribute voting power via the ARB token.">
          <Ball
            x="50%"
            y="-10%"
            width="50%"
            maxWidth="550px"
            color="blue"
          />
        </SessionTwo>
        <SessionTwo reverse={false} description="This token gives the community control in shaping the very foundation and future of Arbitrum and Ethereum." />
        <SessionTwo reverse={false} description="The Arbitrum DAO will be controlled by no single entity. Token holders can either delegate or retain their voting power. Decentralized governance is a nascent concept and we are purposefully allowing space for the community to guide its formation." />
        <SessionThree reverse={false} description="With great power comes great responsibility.">
          <Ball
            x="-30%"
            y="-50%"
            width="70%"
            maxWidth="850px"
            color="purple"
          />
        </SessionThree>
        <SessionFour />
      </main>
    </div>
  );
}

export default App;
