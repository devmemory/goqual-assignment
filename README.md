## 과제 전형
### 실행방법
- 같이 첨부된 env를 최상위 폴더에 붙여넣기(api proxy 사용중, device id)
#### 실행방법1
- 라이브러리 설치 yarn or npm i
- yarn dev or npm run build
#### 실행방법2
- nginx /api 부분 url 입력 예시: http://localhost:8080;
- 이미지 빌드: docker build -t <image-name> .
- 이미지 실행: docker run -d(opt) -p <target-port>:<container-port> <image-name>

### 사용한 URL
1. /login: 로그인 화면
2. /dashboard: 메인 차트 dashboard
3. /dashboard-light: 조명제어 화면

### 문제점
1. API 스펙 상이
```
// 명시된 스펙
// [post], body unknown
`/api/plugins/telemetry/DEVICE/${this.deviceId}/SERVER_SCOPE?brightness=value`

// 실제 작동 스펙
// [post], body = {brightness: value}
`/api/plugins/telemetry/DEVICE/${this.deviceId}/SERVER_SCOPE`
```
2. API response 빈 값
```
// 스펙
GET :: /api/plugins/telemetry/DEVICE/{deviceId}/values/timeseries
REQ PARAM :: keys, startTs, endTs

// 요청 url
[get] /api/plugins/telemetry/DEVICE/${this.deviceId}/values/timeseries?keys=baromrelin,rainratein,wh40batt,soilad1&startTs=1746493205000&endTs=1746492605000
```
- 현재 mock데이터로 처리

### 추가한 라이브러리
- typescript: 정적 타이핑
- axios: api call 조금 더 편리하게
- tanstack query: 서버 상태관리 및 캐싱 처리
- js-cookie: JWT 세팅용도
- react-datepicker: 날짜 시간 입력 전용

### 추가한 폴더
- constants: mock 추가
- hoosk: useDebounce, useInterval과 같이 많이 사용할만한 hooks
- models: type정의
- provider: 토큰여부에 따른 navigate, tanstack query provider
- services: api 공통 모듈
- utils: 공통적으로 많이 사용하는 유틸