import { Link } from "react-router-dom";
import ReviewModel from "../../models/ReviewModel";
import { Review } from "../Utils/Review";

export const LatestReviews: React.FC<{ reviews: ReviewModel[], bookId: number | undefined, mobile: boolean }> = (props) => {
    return (
        <div className={props.mobile ? 'mt-3' : 'row mt-3'}>
            <div className={props.mobile ? '' : 'col-cm-2 col-md-2'}>
                <h2>Ultimi visti: </h2>
            </div>
            <div className="col-sm-10 col-md-10">
                {props.reviews.length > 0 ?
                    <>
                        {props.reviews.slice(0, 3).map(eachReview => (
                            <Review
                                review={eachReview}
                                key={eachReview.id}></Review>
                        ))}
                        <div className="m-3">
                            <Link type="button"
                                className="btn main-color btn-md text-white"
                                to="#"
                            >
                                Vai a tutti i reviews.
                            </Link>
                        </div>
                    </>
                    :
                    <div className="m-3">
                        <p className="lead">
                            Attualmente non ci sono reviews per questo libro
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}