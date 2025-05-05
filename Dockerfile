# node 버전 설정
FROM node:20 as build

# 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 컨테이너 내부로 package.json 파일들을 복사
COPY package*.json ./

# 라이브러리 설치
RUN npm install

# 호스트 머신의 현재 디렉토리 파일들을 컨테이너 내부로 전부 복사
COPY . .

# 빌드
RUN npm run build

# prod environment
FROM nginx:stable-alpine

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
COPY --from=build /app/build /usr/share/nginx/html

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
RUN rm /etc/nginx/conf.d/default.conf

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY nginx.conf /etc/nginx/conf.d

# 컨테이너의 80번 포트를 열어준다.
EXPOSE 80

# nginx 서버를 실행하고 백그라운드로 동작하도록 한다.
CMD ["nginx", "-g", "daemon off;"]

## how to run
## 1. make image
## sudo docker build -t <image-name> .
## 2. run image on container
## sudo docker run -d -p <target-port>:<container-port> <image-name>
## named routing : /etc/hostname

## how to stop
## 1. check containers
## sudo docker ps
## 2. stop container
## sudo docker stop <id>
## 3. check images
## sudo docker images
## 4. delete image
## sudo docker rmi <id>