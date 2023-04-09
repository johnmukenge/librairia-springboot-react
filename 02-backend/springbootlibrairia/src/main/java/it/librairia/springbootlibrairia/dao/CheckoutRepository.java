package it.librairia.springbootlibrairia.dao;

import it.librairia.springbootlibrairia.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    // number of the items that the user has checked out
    // return every checked out that we already have
    List<Checkout> findBookByUserEmail(String userEmail);
}
