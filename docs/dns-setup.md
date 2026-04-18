# home.jachinews.kr DNS 설정 요청서

**수신**: 앤디소프트 (DNS 관리)
**요청일**: 2026-04-19
**요청자**: 지방자치혁신연구원 원성묵 원장

---

## 요청 사항

`home.jachinews.kr` 서브도메인의 DNS 설정을 아래와 같이 변경 부탁드립니다.

### 현재 설정 (제거)

```
유형   호스트                   값
A      home.jachinews.kr       175.45.200.203
```

*현재는 경로 리다이렉트 서비스 IP로 연결돼 있어 서브패스(PDF, 이미지 등)가 모두 404가 나오는 상태입니다.*

### 변경 후 설정 (택 1)

**옵션 A · CNAME (권장)**

```
유형    호스트                  값
CNAME   home.jachinews.kr      simonsez9510.github.io
```

**옵션 B · A 레코드 4개 (CNAME 미지원 시)**

```
유형   호스트                   값
A      home.jachinews.kr       185.199.108.153
A      home.jachinews.kr       185.199.109.153
A      home.jachinews.kr       185.199.110.153
A      home.jachinews.kr       185.199.111.153
```

모두 GitHub Pages 공식 IP입니다. 서브도메인이므로 CNAME이 관리상 더 편합니다.

---

## 변경 이후 자동 진행될 작업

1. DNS 반영 (보통 10분 ~ 몇 시간)
2. GitHub Pages가 `home.jachinews.kr`를 인식
3. Let's Encrypt 인증서 자동 발급 (최대 24시간)
4. HTTPS 활성화

## 변경 이후 정상 작동하게 될 URL

```
https://home.jachinews.kr/
https://home.jachinews.kr/lairi-1pager.pdf       (소개서)
https://home.jachinews.kr/og-image.png           (소셜 카드)
https://home.jachinews.kr/fcia-apex/             (FCIA APEX)
```

---

## 참고 사항

- 레포 측 설정 파일 `CNAME`은 커밋 완료 (`simonsez9510/lairi-homepage@98035d2`)
- 현재 작동 중인 기본 URL: `https://simonsez9510.github.io/lairi-homepage/` (DNS 변경 전까지 이 URL로 접근 가능)
- 루트 도메인 `jachinews.kr` (지방자치혁신뉴스) 는 이번 요청 대상이 **아닙니다** — 그대로 유지
