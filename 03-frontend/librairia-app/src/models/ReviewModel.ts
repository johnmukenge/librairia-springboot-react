class ReviewModel{
    id: number;
    userEmail: string;
    date: string;
    rating: number;
    bookId: number;
    reviewDescritpion: string;

    constructor(id: number, userEmail: string, date: string, 
        rating: number, bookId: number, reviewDescritpion: string){
            this.id = id;
            this.userEmail = userEmail;
            this.date = date;
            this.rating = rating
            this.bookId = bookId;
            this.reviewDescritpion = reviewDescritpion;
    }

}

export default ReviewModel;