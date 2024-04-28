import css from "./index.module.css"
export default function index({
    title,
    text,
    img
}:
{
    title:string,
    text:string,
    img:string
}) {
  return (
    <div className={css.x}>
      <img className={css.img} src={img}></img>
      <h1 className={css.title}>
        {title}
      </h1>
      <p className={css.text}>
        {text}
      </p>
    </div>
  )
}
