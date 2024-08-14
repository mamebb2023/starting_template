import { Inter } from "next/font/google";
import styles from "@/styles/style.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} h1`}>Hello World!</h1>
    </main>
  );
}
