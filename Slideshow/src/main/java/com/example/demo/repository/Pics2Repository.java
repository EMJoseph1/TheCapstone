package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Pics2;


@Repository
public interface Pics2Repository extends JpaRepository<Pics2,Integer>{

	List<Pics2> findByName(String name);
}
