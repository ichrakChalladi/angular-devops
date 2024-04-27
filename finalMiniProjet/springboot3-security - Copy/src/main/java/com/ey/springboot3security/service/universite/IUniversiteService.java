package com.ey.springboot3security.service.universite;


import com.ey.springboot3security.entity.Universite;

import java.util.List;


public interface IUniversiteService {

     Universite affecterFoyerAUniversite(long idFoyer , String nomUniversite);
     Universite desaffecterFoyerAUniversite (long idFoyer,  long idUniversite) ;

     List<Universite> retrivealluniversites();

     Universite addUniversite(Universite u);

     void removeUniversite(long idUniversite);

     Universite updateUniversite (Universite universite);


     Universite getUnivByid (long idUniversite);

}
