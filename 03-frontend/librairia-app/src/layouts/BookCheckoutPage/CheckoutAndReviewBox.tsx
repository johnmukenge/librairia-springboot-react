import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean }> = (props) => {
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <p>
                    <b>0/5 </b>
                    books checked out
                </p>
                <hr />
                {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0
                    ?
                    <h4 className="text-success">
                        Disponibile
                    </h4>
                    :
                    <h4 className="text-danger">
                        Lista di attesa
                    </h4>
                }
                <div className="row">
                    <p className="col-6 lead">
                        <b>{props.book?.copies} </b>
                        copie
                    </p>
                    <p className="col-6 lead">
                        <b>{props.book?.copiesAvailable} </b>
                        disponibili
                    </p>
                </div>
            </div>
            <Link to='/#' className="btn btn-success btn-lg">Connettersi</Link>
            <hr />
            <p className="mt-3">
                Questo numero potrebbe cambiare finchè non completi l'ordine
            </p>
            <p>
                Connettiti per dirci quanto ci valuti
            </p>
        </div>
    );
}