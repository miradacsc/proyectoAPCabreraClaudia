package com.portfolio.csc.Interface;

import com.portfolio.csc.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //Traer una lista de peersonas
    public List<Persona> getPersona();
    
    //Guardar un objeeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un usuario pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
