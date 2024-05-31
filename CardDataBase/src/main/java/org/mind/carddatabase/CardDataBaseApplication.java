package org.mind.carddatabase;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mind.carddatabase.domain.Car;
import org.mind.carddatabase.domain.Owner;
import org.mind.carddatabase.repository.CarRepository;
import org.mind.carddatabase.repository.OwnerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@Log4j2
@SpringBootApplication
@RequiredArgsConstructor
public class CardDataBaseApplication implements CommandLineRunner {

    private final OwnerRepository ownerRepository;
    private final CarRepository carRepository;

    public static void main(String[] args) {

        SpringApplication.run(CardDataBaseApplication.class, args);
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
                .registerNumber("AAA-111")
                .year(2024)
                .price(6400)
                .owner(owner1)
                .build();
        Car car2 = Car.builder()
                .brand("Hyndai")
                .model("Genesis")
                .registerNumber("HHH-111")
                .year(2024)
                .price(8500)
                .owner(owner2)
                .build();
        Car car3 = Car.builder()
                .brand("KIA")
                .model("Sorento")
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
    }
}
