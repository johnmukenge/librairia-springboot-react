package it.librairia.springbootlibrairia.dao;

import it.librairia.springbootlibrairia.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    /** Find Review based on the bookId*/

    Page<Review> findByBookId(@RequestParam("book_id") Long bookId, Pageable pageable);
}
