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
          <p>This is the quiz geius Dashboard.</p>
          <button>Find Genius Ranking</button>
        </div>
      </div>
    </>
  );
}
