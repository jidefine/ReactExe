package org.mind.cardatabase.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "cars")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ownerId;
    private String firstName;
    private String lastName;

//    Car를 조회하면서 다시 연결된 OwnerId를 통해
//    부모를 조회하는 무한 반복에 빠지므로 cars는 json으로 보내지 않는 걸로
    @JsonIgnore
    //mappedBy 속성
    //- 양방향 관계에서 연관된 엔티티의 필드 이름을 지정 ex) "owner"
    //- 양방향 관계에서 연관된 엔티티 간의 관계를 서로 매핑하는 데 사용
    // CascadeType.ALL
    // - 부모 엔티티에 적용된 변경 사항이 모든 관련된 자식 엔티티에 전파.
    // - 부모 엔티티 삭제 시, 자식 엔티티도 삭제
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private List<Car> cars;
}
