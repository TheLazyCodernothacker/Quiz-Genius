import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <Image src={logo} alt="Quiz Genius Logo" width={40} height={40} />
      <h1>Quiz Genius</h1>
    </footer>
  );
}
