package it.librairia.springbootlibrairia.dao;

import it.librairia.springbootlibrairia.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
