import style from './App.module.css'

export default function App() {
  return (
    <>
      <section className={style.section}>
        <div className={style.display}>DISPLAY</div>
        <div className={style.btn_navigation}>
          <div className={style.btn_wrapper}>
            <button type="button" className={style.btn}>
              PLAY
            </button>
            <button type="button" className={style.btn}>
              STOP
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
