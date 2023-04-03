import BookModel from "../../models/BookModel";
import { useState } from "react";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = (window.location.pathname).split('/')[2];


    return (
        <div className="">
            <h3>Hello world!</h3>
        </div>
    );
}