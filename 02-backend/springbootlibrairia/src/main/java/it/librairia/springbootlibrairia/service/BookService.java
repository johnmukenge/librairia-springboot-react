package it.librairia.springbootlibrairia.service;

import it.librairia.springbootlibrairia.dao.BookRepository;
import it.librairia.springbootlibrairia.dao.CheckoutRepository;
import it.librairia.springbootlibrairia.entity.Book;
import it.librairia.springbootlibrairia.entity.Checkout;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
@Transactional
public class BookService {

    private BookRepository bookRepository;

    private CheckoutRepository checkoutRepository;

    // constructor dependency injection to setup all of our repository

    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public Book checkBook(String userEmail, Long bookId) throws Exception{
        Optional<Book> book = bookRepository.findById(bookId);

        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        if(!book.isPresent() || validateCheckout != null || book.get().getCopiesAvailable() <= 0 ){
            throw new Exception("Il libro non esiste oppure è già stato scelto dall'utente");

        }

        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);

        bookRepository.save(book.get());

        //create a new checkout book

        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );

        // save that in the db

        checkoutRepository.save(checkout);

        // and return the book.

        return book.get();

    }

    // verify if the book is checked out by the user

    public Boolean checkoutBookByUser(String userEmain, Long bookId){
        Checkout validateCheckouut = checkoutRepository.findByUserEmailAndBookId(userEmain, bookId);
        if(validateCheckouut != null){
            return true;
        } else{
            return false;
        }
    }
}
