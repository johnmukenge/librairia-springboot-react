export const Carousel = () => {
    return (
        <div className="container mt-5" style={{ height: 550 }}>
            <div className="homepage-carousel-title">
                <h3>Trova il tuo prossimo libro che ti terrà occupato la notte.</h3>
            </div>
            <div id="carouselExampleControls"
                className="carousel carousel-dark slide mt-5 d-none d-lg-block"
                data-bd-interval='false'
            >
                {/** Desktop */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                        height='233'
                                        width='151'
                                        alt=""
                                    />
                                    <h6 className="mt-2">Libro</h6>
                                    <p>AmoLeggere</p>
                                    <a className="btn main-color text-white" href="#">Riservato</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                        height='233'
                                        width='151'
                                        alt=""
                                    />
                                    <h6 className="mt-2">Libro</h6>
                                    <p>AmoLeggere</p>
                                    <a className="btn main-color text-white" href="#">Riservato</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                        height='233'
                                        width='151'
                                        alt=""
                                    />
                                    <h6 className="mt-2">Libro</h6>
                                    <p>AmoLeggere</p>
                                    <a className="btn main-color text-white" href="#">Riservato</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev"
                    type="button"
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='prev'
                >
                    <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                    <span className="visually-hidden">Indietro</span>
                </button>
                <button className="carousel-control-next"
                    type="button"
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='next'
                >
                    <span className="carousel-control-next-icon" aria-hidden='true'></span>
                    <span className="visually-hidden">Avanti</span>
                </button>
            </div>
            {/** Mobile */}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                            width='151'
                            height='233'
                            alt="libro"
                        />
                        <h6 className="mt-2">
                            <b>Libro</b>
                        </h6>
                        <p>AmoLeggere</p>
                        <a className="btn main-color text-white" href="#">Riservato</a>
                    </div>
                </div>
            </div>
            <div className="homepage-carousel-title mt-3">
                <a className="btn btn-outline-secondary btn-lg" href="#">Di più</a>
            </div>
        </div>
    );
}