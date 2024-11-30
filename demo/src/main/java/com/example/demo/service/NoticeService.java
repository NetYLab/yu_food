package com.example.demo.service;

import com.example.demo.dto.NoticeRequest;
import com.example.demo.entity.Notice;
import com.example.demo.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;

    @Transactional
    public Notice createNotice(NoticeRequest request) {
        String author = request.getAuthor();
        if (author == null || author.trim().isEmpty()) {
            author = "관리자";  // 기본값 설정
        }

        Notice notice = new Notice(
                request.getTitle(),
                request.getContent(),
                author,
                request.getUsername()
        );
        return noticeRepository.save(notice);
    }
}