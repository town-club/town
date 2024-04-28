import css from "./index.module.css";
export default function index({ text, img }: { text: string; img: string }) {
  return (
    <div className={css.x}>
      <img className={css.img} src={img}></img>
      <p className={css.text}>{text}</p>
    </div>
  );
}
