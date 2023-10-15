
export default async function QuizPage({ params }) {
  const { id } = params;
  const req = await fetch(`${process.env.URL}api/getQuiz`, {
    method: "POST",
    body: JSON.stringify({ id }),
  });
  const data = await req.json();
  console.log(data);
  return (
    <>
      {data.message === "Could not find quiz" ? (
        <div className="container">
          <h1>Quiz {id}</h1>
          <h2>Quiz not found</h2>
        </div>
      ) : (
        <div className="container">
          <h1>Quiz {id}</h1>
          <h2>{data.title}</h2>
        </div>
      )}
    </>
  );
}
