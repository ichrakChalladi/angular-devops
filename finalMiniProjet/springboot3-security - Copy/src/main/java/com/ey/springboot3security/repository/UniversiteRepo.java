package com.ey.springboot3security.repository;


import com.ey.springboot3security.entity.Universite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversiteRepo extends JpaRepository<Universite,Long> {

    Universite findUniversiteByNomUniversite(String nom);

    Universite findUniversiteByIdUniversite(long idUniversite);



}
