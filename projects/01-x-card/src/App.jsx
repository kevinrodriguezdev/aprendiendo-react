import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "kevinrodriguezdev",
    name: "Kevin Rodríguez",
    initialIsFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Angel Durán",
    initialIsFollowing: false,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    initialIsFollowing: true,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, initialIsFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            i
            nitialIsFollowing={initialIsFollowing}
          />
        );
      })}
    </section>
  );
}
