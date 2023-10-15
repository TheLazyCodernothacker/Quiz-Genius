import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <header>
        <div className="hero">
          <div className="heroContent">
            <h1>Quiz Genius</h1>
            <p>
              Quiz Genius is a quiz app that allows you to create your own
              quizzes and share them with your friends. Discover where you lie
              on the leaderboards and see if you are a quiz genius.
            </p>
            <button>Find Genius Ranking</button>
          </div>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col">
            <h2>A range of quizzes</h2>
            <p>
              Quiz Genius allows you to search through a range of quizzes from
              personality quizzes to knowledge quizzes.
            </p>
          </div>
          <div className="col">
            <h2>Sharing Quizzes</h2>
            <p>
              Quiz Genius allows you to share your quizzes with your friends and
              see how they rank on the leaderboards.
            </p>
          </div>
          <div className="col">
            <h2>Leaderboards</h2>
            <p>
              Quiz Genius allows you to see where you rank on the leaderboards
              and see if you are a quiz genius.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
