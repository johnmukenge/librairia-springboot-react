import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const LibraryServices = () => {

    const { authState } = useOktaAuth();
    return (
        <div className="container mt-5">
            <div className="row py-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">
                        Non riusciamo a trovare ciò che stai cercando
                    </h1>
                    <p className="lead"> Se non trovi ciò che stai cercando, mandaci una messaggio</p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        {authState?.isAuthenticated
                            ?
                            <Link type="button" className="btn main-color btn-lg px-4 me-md-2 fw-bold text-white" to='search'>Servizi librairia
                            </Link>
                            :
                            <Link className="btn main-color btn-lg text-white" to="/login">Collegarsi</Link>
                        }
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
            </div>
        </div>
    );
}