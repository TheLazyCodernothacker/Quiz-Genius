import { Schema, model, models } from "mongoose";

const QuizSchema = new Schema({
  scores: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  questions: {
    type: Array,
    required: [true, "Questions are required!"],
  },
});

const QuizGeniusQuiz = models.Quiz || model("Quiz", QuizSchema);

export default QuizGeniusQuiz;
