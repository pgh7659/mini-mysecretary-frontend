## 프로젝트 명 : MySecretary

> [Mysecretary Service URL](http://ec2-13-209-26-145.ap-northeast-2.compute.amazonaws.com/, 'project')

> back-end project git address: [Mysecretary_back_gitrepository](https://github.com/pgh7659/mini-mySecretary-backend/, 'back link')

---

#### 개요

```
SNS계정(google, naver)으로 일자별로 나만의 TODO LIST를 관리하는 서비스입니다.
```

---

#### 프로젝트 목표

1. 달력 생성

   - Date() 함수를 활용하여 calendar-modal 생성

2. todo list
   - 조회 - 선택된 날짜의 목록 표출
   - 생성 - +버튼을 통해 새로운 todo 생성
   - 수정 - 체크박스 선택을 통해 완료여부 변경
   - 삭제 - hover 시, delete 아이콘 표출 및 클릭 시 삭제
3. AWS EC2에 배포하기

   - nginx 활용

---

#### stack

- react(hook, contextAPI, styled-component, axios 활용)
- nginx
