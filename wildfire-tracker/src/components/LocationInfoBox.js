const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info" >
            <h2>Event Location</h2>
            <ul>
                <li>ID: <strong>{info.ID}</strong></li>
                <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div >
    )
}

export default LocationInfoBox
