import React from "react";

export const ReturnBook = () => {
    return (
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
    );
}