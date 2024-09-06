import Roster from './Roster'

function Homepage() {
  return (
    <>
      <header className="header">
        <h1>WWE Universe Mode Tracker</h1>
      </header>
      <section className="main">
        <Roster />
        {/* <AddWrestler />
        <DeleteWrestler /> */}
      </section>
    </>
  )
}

export default Homepage
