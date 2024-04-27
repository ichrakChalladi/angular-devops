package com.ey.springboot3security.service.universite;


import com.ey.springboot3security.entity.Foyer;
import com.ey.springboot3security.entity.Universite;
import com.ey.springboot3security.repository.FoyerRepo;
import com.ey.springboot3security.repository.UniversiteRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor

public class UniversiteServiceImpl implements IUniversiteService {

    UniversiteRepo universiterepo;
    FoyerRepo foyerrepo;

    public Universite affecterFoyerAUniversite(long idFoyer, String nomUniversite) {
        Foyer foyer = foyerrepo.findById(idFoyer).orElse(null);
        if(foyer != null){
            desaffecterFoyerAUniversite(idFoyer,foyer.getUniversite().getIdUniversite());
        }
        Universite universtie = universiterepo.findUniversiteByNomUniversite(nomUniversite);
        universtie.setFoyer(foyer);

        return universiterepo.save(universtie);
    }

    @Override
    public Universite desaffecterFoyerAUniversite(long idFoyer, long idUniversite) {
        Universite universite = universiterepo.findById(idUniversite).orElse(null);

        if (universite != null) {

            Foyer foyer = universite.getFoyer();
            if (foyer != null && foyer.getIdFoyer() == idFoyer) {

                universite.setFoyer(null);
                universiterepo.save(universite);
                return universite;
            } else {

                return null;
            }
        } else {

            return null;
        }
    }

    @Override
    public List<Universite> retrivealluniversites() {
        return universiterepo.findAll();
    }

    @Override
    public Universite addUniversite(Universite u) {
        return universiterepo.save(u);
    }

    @Override
    public void removeUniversite(long idUniversite) {
        universiterepo.deleteById(idUniversite);
    }

    @Override
    public Universite updateUniversite(Universite universite) {
        return universiterepo.save(universite);
    }

    @Override
    public Universite getUnivByid(long idUniversite) {
        return universiterepo.findUniversiteByIdUniversite(idUniversite);
    }


}
