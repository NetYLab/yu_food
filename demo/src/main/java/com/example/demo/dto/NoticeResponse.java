package com.example.demo.dto;

public class NoticeResponse {
    private String titel;
    private String content;

    public NoticeResponse() {}

    public String getTitel() {
        return titel;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
