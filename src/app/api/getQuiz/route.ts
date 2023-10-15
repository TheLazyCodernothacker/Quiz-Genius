import { connectToDataBase } from "../../../lib/db";
import QuizGeniusQuiz from "../../../models/quiz";

export async function POST(req: Request) {
  const data = await req.json();
  await connectToDataBase();
  try {
    const quiz = await QuizGeniusQuiz.findOne({ _id: data.id });
    return Response.json(quiz);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Could not find quiz" });
  }
}
