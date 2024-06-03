package org.mind.cardatabase.domain;

import lombok.*;

import javax.persistence.*; // Java Persistence API (JPA)에서 사용되는 주요 인터페이스와 클래스를 포함하는 패키지

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor // 모든 필드를 인자로 받는 생성자(Lombok의 어노테이션)
@NoArgsConstructor  // 인자를 받지 않는 기본 생성자 생성(Lombok의 어노테이션)
@ToString(exclude = "owner") // 필요할 때 따로 조회
public class Car {

    @Id // primary key = 엔티티의 식별자(identifier)
    @GeneratedValue(strategy = GenerationType.AUTO) // JPA 엔터티의 주요 키(primary key) 값을 자동으로 생성
    private long id;
    private String brand;
    private String model;
    private String color;
    private String registerNumber;

    private int year;
    private int price;

    // 지연 로딩(Lazy Loading) : 연관된 엔티티가 필요한 경우에만 데이터를 로드하고, 그 전까지 로딩을 지연
    // VS
    // 즉시 로딩(Eager Loading) : 연관된 엔티티를 항상 로딩, 성능에 영향을 줄 수 있음, 비효율적일 수 있음
    @ManyToOne(fetch = FetchType.LAZY)
    // Owner 테이블의 id 컬럼을 참조하여 해당 이름으로 외래 키(Foreign Key) 설정(매핑)
    @JoinColumn(name="ownerId")
    // JPA에서 관계를 매핑할 때 사용, DB에 직접적으로 반영되지 않음
    // 아래의 owner 필드를 통해 Owner 엔티티에 접근 가능
    private Owner owner;
}