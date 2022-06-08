import NavBar from './Components/NavBar'
import HeadComponent from "./Components/HeadComponent";
import Cards from "./Components/Cards";
import data from './Datafile/data'
import './App.css'

function App() {
    const speakerCard = data.map(speaker=>{
        return <Cards
                      key={speaker.id}
                      {...speaker} />
    })

    return (
        <>
            <NavBar />
            <HeadComponent />
            <section className="cards--list">
                {speakerCard}
            </section>

        </>

)
}

export default App
