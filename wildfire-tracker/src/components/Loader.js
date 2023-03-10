import Spinner from './img/spinner.gif'
import '../index.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="Loading" />
            <h1>Loading</h1>

        </div>
    )
}

export default Loader
