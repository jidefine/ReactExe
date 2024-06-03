package org.mind.cardatabase.repository;

import org.mind.cardatabase.domain.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
}
