# 나만의 감정 일기장 
## 소개
- 일기를 작성하는 서비스
- 감정까지 함께 기록할 수 있음
- 배포 주소 : https://emotion-diary-idlal9yu8-minas-projects-1f523a49.vercel.app/
<br />

## 페이지 라우팅
1. "/" : 모든 일기를 조회하는 Home 페이지
2. "/new": 새로운 일기를 작성하는 New 페이지
3. "/diary": 일기를 상세히 조회하는 Diary 페이지
4. "/edit": 기존 일기를 수정하는 Edit 페이지
<br/> 

## 프로젝트 구조

```
public/                    # 정적 자산 및 데이터
src/
├── assets/                # 감정 이미지
├── components/            # 기능 별 컴포넌트
├── hooks/                 # 커스텀 훅
├── pages/                 # 페이지 컴포넌트
├── utils/                 # 상수, 공통 유틸 함수
```
