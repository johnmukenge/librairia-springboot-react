import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Trova la tua prossima avventura</h1>
                    <p className="col-md-8 fs-">Dove vogliamo andare la prossima volta?</p>
                    <Link type="button" className="btn main-color btn-lg text-white" to="/search">Scopri i libri</Link>
                </div>
            </div>
        </div>
    );
}