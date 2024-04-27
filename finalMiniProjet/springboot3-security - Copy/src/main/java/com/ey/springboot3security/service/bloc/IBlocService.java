package com.ey.springboot3security.service.bloc;

import com.ey.springboot3security.entity.Bloc;
import com.ey.springboot3security.entity.Chambre;

import java.util.List;

public interface IBlocService {
    List<Bloc> retrieveAllBlocs();

    Bloc addBloc (Bloc b);

    Bloc updateBloc ( Bloc b);

    Bloc retrieveBloc (Long idBloc);
    void removeBloc(Long idBloc);

     Bloc affecterChambresABloc(List<Long> numeroChambre, String nomBloc) ;

     Bloc affecterBlocAFoyer(String nomBloc,String nomFoyer) ;

     List<Bloc> afficherBlocParIdFoyer(Long idFoyer);

    Bloc findBlocByChambresContaining(Chambre chambre);

}
