import NavBar from "../../components/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="heroContent">
          <h1>Quiz Genius</h1>
          <p>
            Quiz Genius is a quiz app that allows you to create your own quizzes
            and share them with your friends. Discover where you lie on the
            leaderboards and see if you are a quiz genius.
          </p>
          <button>Find Genius Ranking</button>
        </div>
      </div>
    </>
  );
}
