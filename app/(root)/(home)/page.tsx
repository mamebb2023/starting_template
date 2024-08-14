import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <h1 className={`${style.title} h1`}>Hello World!</h1>
    </main>
  );
}
