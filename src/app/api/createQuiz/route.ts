import { connectToDataBase } from "../../../lib/db";
import QuizGeniusQuiz from "../../../models/quiz";

export async function POST(req: Request) {
  const data = await req.json();
  const { title, description, questions } = data;
  await connectToDataBase();
  const newQuiz = new QuizGeniusQuiz({ title, description, questions });
  try {
    const savedQuiz = await newQuiz.save();
    return Response.json(savedQuiz);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Could not create quiz" });
  }
}
