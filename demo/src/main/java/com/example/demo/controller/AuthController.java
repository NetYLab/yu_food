package com.example.demo.controller;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entity.User;
import com.example.demo.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.repository.UserRepository;
import com.example.demo.Role;

import java.util.Map;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public AuthController(JwtUtil jwtUtil, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @GetMapping("/check-admin")
    public ResponseEntity<?> checkAdminRole(@RequestHeader("Authorization") String token) {
        try {
            if (token != null && token.startsWith("Bearer ")) {
                String username = jwtUtil.validateTokenAndGetUsername(token.substring(7));
                if (username != null) {
                    User user = userRepository.findByEmail(username)
                            .orElseThrow(() -> new ResourceNotFoundException("사용자를 찾을 수 없습니다"));

                    // Role.ADMIN의 role 값("ROLE_ADMIN")과 비교
                    return ResponseEntity.ok(Map.of(
                            "isAdmin", user.getRole().getRole().equals("ROLE_ADMIN"),
                            "currentRole", user.getRole().getRole()
                    ));
                }
            }
            return ResponseEntity.ok(Map.of("isAdmin", false));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("error", e.getMessage()));
        }
    }
}