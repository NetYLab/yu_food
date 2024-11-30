package com.example.demo.controller;

import com.example.demo.dto.NoticeRequest;
import com.example.demo.entity.Notice;
import com.example.demo.repository.NoticeRepository;
import com.example.demo.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NoticeController {
    private final NoticeService noticeService;
    private final NoticeRepository noticeRepository;

    @Autowired
    public NoticeController(NoticeService noticeService, NoticeRepository noticeRepository) {
        this.noticeService = noticeService;
        this.noticeRepository = noticeRepository;
    }

    // 모든 공지사항 조회 (공지사항 메인페이지)
    @GetMapping("/notices")  // /api/notices로 접근
    public List<Notice> getAllNotices() {
        return noticeRepository.findAll();
    }

    // 특정 공지사항 조회
    @GetMapping("/notice/{id}")  // /api/notice/{id}로 접근
    public ResponseEntity<?> getNoticeById(@PathVariable("id") Long id) {
        return noticeRepository.findById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("공지사항을 찾을 수 없습니다."));
    }

    // 공지사항 생성
    @PostMapping("/notice")  // /api/notice로 접근
    public ResponseEntity<Notice> createNotice(@RequestBody NoticeRequest request) {
        Notice notice = noticeService.createNotice(request);
        return ResponseEntity.ok(notice);
    }
}