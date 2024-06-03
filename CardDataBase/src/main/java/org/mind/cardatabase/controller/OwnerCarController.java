package org.mind.cardatabase.controller;

import lombok.RequiredArgsConstructor;
import org.mind.cardatabase.domain.Car;
import org.mind.cardatabase.domain.Owner;
import org.mind.cardatabase.repository.CarRepository;
import org.mind.cardatabase.repository.OwnerRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OwnerCarController {
    private final OwnerRepository ownerRepository;
    private final CarRepository carRepository;

    @RequestMapping("/owners")
    public List<Owner> getAllOwners(){
        return ownerRepository.findAll();
    }

    @RequestMapping("/cars")
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }
}
