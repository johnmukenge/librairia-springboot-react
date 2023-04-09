package it.librairia.springbootlibrairia.controller;

import it.librairia.springbootlibrairia.entity.Book;
import it.librairia.springbootlibrairia.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId) throws  Exception{
        String userEmail = "testuser@gmail.com";
        return bookService.checkBook(userEmail, bookId);
    }

    @GetMapping("/secure/ischeckedout/byUser")
    public Boolean checkOutBookByUser(@RequestParam Long bookId){
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @GetMapping("/secure/currentloans/count")
    public int currentLoanCount(){
        String userEmail = "testuser@gmail.com";
        return bookService.currentLoansCount(userEmail);
    }
}
