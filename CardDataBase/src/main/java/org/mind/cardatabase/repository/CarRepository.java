package org.mind.cardatabase.repository;

import org.mind.cardatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


//Rest Repository 설정에 의해
//이 CarRepository는 json Controller 역할을 한다.

//[Postman을 이용한 CRUD]
//1. 전체 조회(GET) : http://localhost:12000/api/cars
//2. 특정 Car 조회(GET) : http://localhost:12000/api/cars/5
//3. Car의 OWNER 조회(GET) : http://localhost:12000/api/cars/5/owner
//4. 생성(POST): http://localhost:12000/api/cars
// Body > raw 변경 후 전송
// {
//    "brand": "Samsung",
//    "model": "SM-5",
//    "color": "white",
//    "registerNumber": "SSS-111",
//    "year": 2024,
//    "price": 3200
//}
//응답
//{
//    "brand": "Samsung",
//        "model": "SM-5",
//        "color": "white",
//        "registerNumber": "SSS-111",
//        "year": 2024,
//        "price": 3200,
//        "_links": {
//    "self": {
//        "href": "http://localhost:12000/api/cars/6"
//    },
//    "car": {
//        "href": "http://localhost:12000/api/cars/6"
//    },
//    "owner": {
//        "href": "http://localhost:12000/api/cars/6/owner"
//    }
//}
//}
//5. 업데이트(PATCH):http://localhost:12000/api/cars/6
//    Body > raw > JSON
//    전송
//{
//    "color" : "gold",
//}
//    응답
//{
//    "brand": "Samsung",
//    "model": "SM-5",
//    "color": "gold",
//    "registerNumber": "SSS-111",
//    "year": 2024,
//    "price": 3200,
//    "_links": {
//        "self": {
//            "href": "http://localhost:12000/api/cars/6"
//        },
//        "car": {
//            "href": "http://localhost:12000/api/cars/6"
//        },
//        "owner": {
//            "href": "http://localhost:12000/api/cars/6/owner"
//        }
//    }
//}
//6. Car의 OWNER 추가(PUT): http://localhost:12000/api/cars/6/owner
//Body > raw > text 변경
//작성 -> http://localhost:12000/api/owner/1 -> 전송
//7. 추가 요청(GET): http://localhost:12000/api/cars/search
//8. Car color 색상 조회(GET):  http://localhost:12000/api/cars/search/findByColor?color=white
//9. 삭제(DELETE) : http://localhost:12000/api/cars/6

//RESTful API에서 주로 사용되는 HTTP 메서드
//1. GET: 서버에서 데이터를 가져오는 데 사용
//2. POST: 서버에 데이터를 전송하여 새롭게 항목을 생성하는 데 사용
//3. PUT: 해당 항목의 전체를 업데이트할 때 사용
//4. PATCH: 해당 항목을 부분적으로 업데이트할 때 사용
//5. DELETE: 해당 항목을 제거


// 현재 Repository의 api 주소를 변경할 수 있다.
// @RepositoryRestResource(path="aaa")
@RepositoryRestResource
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByBrand(@Param("brand") String brand);

    List<Car>findByColor(@Param("color") String color);

}
