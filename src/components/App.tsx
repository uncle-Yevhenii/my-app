import { NewStopwatch } from './stopwatch/new'
import { Stopwatch } from './stopwatch/stopwatch'

export default function App() {
  return (
    <section>
      <div>
        <Stopwatch />
        <NewStopwatch />
      </div>
    </section>
  )
}
