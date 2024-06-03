package org.mind.cardatabase;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mind.cardatabase.domain.Car;
import org.mind.cardatabase.domain.Owner;
import org.mind.cardatabase.domain.User;
import org.mind.cardatabase.repository.CarRepository;
import org.mind.cardatabase.repository.OwnerRepository;
import org.mind.cardatabase.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@Log4j2
@SpringBootApplication
@RequiredArgsConstructor
public class CarDataBaseApplication implements CommandLineRunner {

    private final OwnerRepository ownerRepository;
    private final CarRepository carRepository;
    private final UserRepository userRepository;

    public static void main(String[] args) {

        SpringApplication.run(CarDataBaseApplication.class, args);
        log.info("CardDataBaseApplication started......");
    }

    @Override
    public void run(String... args) throws Exception {
        Owner owner1 = Owner.builder()
                .firstName("John")
                .lastName("Johnson")
                .build();
        Owner owner2 = Owner.builder()
                .firstName("Marry")
                .lastName("Robin")
                .build();
        ownerRepository.saveAll(Arrays.asList(owner1, owner2));

        Car car1 = Car.builder()
                .brand("Ford")
                .model("Mustang")
                .color("green")
                .registerNumber("AAA-111")
                .year(2024)
                .price(6400)
                .owner(owner1)
                .build();
        Car car2 = Car.builder()
                .brand("Hyndai")
                .model("Genesis")
                .color("green")
                .registerNumber("HHH-111")
                .year(2024)
                .price(8500)
                .owner(owner2)
                .build();
        Car car3 = Car.builder()
                .brand("KIA")
                .model("Sorento")
                .color("green")
                .registerNumber("KKK-111")
                .year(2024)
                .price(7500)
                .owner(owner2)
                .build();
        carRepository.saveAll(Arrays.asList(car1, car2, car3));

        for(Owner owner : ownerRepository.findAll()){
            log.info(owner.toString());
        }
        for(Car car : carRepository.findAll()){
            log.info(car.toString());
        }

        User user1 = User.builder()
                .username("user")
                .password("$2y$10$f0CW5tHxfDG1H9Nv8tha/.8KPIFiAPBCAGTVRouZy..EFFWvmlNBS")
                .role("USER")
                .build();

        User user2 = User.builder()
                .username("admin")
                .password("$2y$10$ZQ8e0cuCenCAqXj6keZUMOKLdy.8s2b6tYnjfFFqEqr.EWUo3p.za")
                .role("ADMIN")
                .build();

        userRepository.save(user1);
    }
}
