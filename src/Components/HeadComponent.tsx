import photo_schema from '../../public/Assets/Images/Group77.png'

export default function HeadComponent() {
    return (
        <div className="main_container">
            <img src={photo_schema} className="main--schema" alt=""/>
            <h1 className="info-title">Online Experiences</h1>
            <p className="info-explain">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}
