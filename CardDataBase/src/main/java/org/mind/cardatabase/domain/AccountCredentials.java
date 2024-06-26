package org.mind.cardatabase.domain;

import lombok.Getter;
import lombok.Setter;

// 클라이언트가 전송하는 username / password를 저장하기 위한 클래스(엔티티 아님)
@Getter
@Setter
public class AccountCredentials {
    private String username;
    private String password;
}
