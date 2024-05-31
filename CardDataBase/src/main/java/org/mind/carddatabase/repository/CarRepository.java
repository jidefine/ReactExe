package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {

}
