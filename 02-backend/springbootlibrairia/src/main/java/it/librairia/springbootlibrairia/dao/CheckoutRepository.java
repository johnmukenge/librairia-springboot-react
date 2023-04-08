package it.librairia.springbootlibrairia.dao;

import it.librairia.springbootlibrairia.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findBuUserEmailAndBookId(String userEmail, Long bookId);
}
