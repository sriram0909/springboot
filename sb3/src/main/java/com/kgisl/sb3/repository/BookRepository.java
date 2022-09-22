package com.kgisl.sb3.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kgisl.sb3.entity.Book;
@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{
}