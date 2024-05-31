package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

// 현재 Repository의 api 주소를 변경할 수 있다.
// @RepositoryRestResource(path="aaa")
public interface CarRepository extends JpaRepository<Car, Long> {

}
