import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {

    const { authState } = useOktaAuth();

    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h2>Cosa stavi leggendo</h2>
                            <p className="lead">
                                Vorremo sapere cosa stavi leggendo. Un libro per imparare nuovi skills oppure approffondirne alcuni
                                Vorremo anche proporti dei libri con contenuti di qualità
                            </p>
                            {authState?.isAuthenticated
                                ?
                                <Link type="button" className="btn main-color btn-lg text-white" to='search'>Scopri i migliori libri
                                </Link>
                                :
                                <Link className="btn main-color btn-lg text-white" to="/login">Collegarsi</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>La nostra collezione sta sempre cambiando!</h1>
                            <p className="lead">
                                Aggiornati ogni giorno in quanto la nostra collezione cambia sempre.
                                Lavoriamo senza sosta per offirvi i migliori libri possibile sul mercato.
                                La scelta accurata dei libri è sempre la nostra priorità.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>
            {/** Mobile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left">
                            <div className="mt-2">
                                <h2>Cosa stavi leggendo</h2>
                                <p className="lead">
                                    Vorremo sapere cosa stavi leggendo. Un libro per imparare nuovi skills oppure approffondirne alcuni
                                    Vorremo anche proporti dei libri con contenuti di qualità
                                </p>
                                {authState?.isAuthenticated
                                    ?
                                    <Link type="button" className="btn main-color btn-lg text-white" to='search'>Scopri i migliori libri
                                    </Link>
                                    :
                                    <Link className="btn main-color btn-lg text-white" to="/login">Collegarsi</Link>
                                }

                            </div>
                        </div>
                        <div className="m-2">
                            <div className="col-image-right"></div>
                            <div className="mt-2">
                                <h1>La nostra collezione sta sempre cambiando!</h1>
                                <p className="lead">
                                    Aggiornati ogni giorno in quanto la nostra collezione cambia sempre.
                                    Lavoriamo senza sosta per offirvi i migliori libri possibile sul mercato.
                                    La scelta accurata dei libri è sempre la nostra priorità.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}