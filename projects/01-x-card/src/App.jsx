import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
      <TwitterFollowCard  userName="kevinrodriguezdev" name="Kevin Rodríguez" initialIsFollowing />
      <TwitterFollowCard  userName="midudev" name="Miguel Angel Durán" />
      <TwitterFollowCard  userName="elonmusk" name="Elon Musk" />
    </>
  );
}
