# Poom

> 자신이 가진 재능을 사고 팔 수 있는 재능공유 웹 사이트

********

### 개발환경

- OS : Windows
- Development Tool : WebStorm, Eclipse
- Framework : Spring
- Language/Skills : HTML, CSS, Javascript, Java
- DB : MyBatis, Oracle

********

### 맡은 부분

#### 프론트엔드

##### 상세페이지

<img alt="details_main" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/details_main.png" width="400"><img alt="details_main_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/details_main_result.png" width="400">
********
<img alt="details_review_popup" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/details_review_reply_popup.png" width="400"><img alt="details_review_popup_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/details_review_reply_popup_result.PNG" width="400">

- 마크업 및 CSS
- 시간표에서 일정 선택 시, 해당 일정 색깔 변경 및 시간 순서에 맞게 정렬되어 선택된 일정 표시(moment.js)
- 서비스 이미지 슬라이드(slick.js)
- 문의/리뷰 팝업창 on/off, 문의/리뷰 작성 시 template으로 div 생성(underscore.js)

##### 대시보드 - 코인, 충/환전 팝업창

<img alt="dashboard_coin_main" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_main.png" width="400"><img alt="dashboard_coin_main_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_main_result.png" width="400">
********
<img alt="dashboard_coin_charge_popup" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_charge_popup.png" width="400"><img alt="dashboard_coin_charge_popup_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_charge_popup_result.JPG" width="400">
********
<img alt="dashboard_coin_exchange_popup" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_exchange_popup.png" width="400"><img alt="dashboard_coin_exchange_popup_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_coin_exchange_popup_result.JPG" width="400">

- 마크업 및 CSS
- 그래프 삽입(billboard.js)
- 충/환전 팝업창 on/off
- 코인 내역 탭 클릭 시 해당 내용으로 변경


##### 대시보드 - 찜, 차단

<img alt="dashboard_likeservices" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_likeservices.png" width="400"><img alt="dashboard_likeservices_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_likeservices_result.png" width="400">
********
<img alt="dashboard_block_result" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_block_result.png" width="400">

- 마크업 및 CSS
- (찜) 찜 버튼 클릭 시 해당 페이지에서 서비스 카드 삭제 (front에서만)
- (차단) x 버튼 클릭 시 해당 페이지에서 유저 삭제 (front에서만)

##### 대시보드 - 계약

<img alt="dashboard_contract_result1" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_contract_result1.png" width="400"><img alt="dashboard_contract_result2" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_contract_result2.png" width="400">
********
<img alt="dashboard_contract_popup1" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_contract_popup1.JPG" width="400"><img alt="dashboard_contract_popup2" src="https://raw.githubusercontent.com/Nelljun/Spring_Poom/master/Images%20for%20readme/dashboard_contract_popup2.JPG" width="400">

- 마크업 및 CSS
- 서비스 카드의 계약목록 버튼 누를 시 li요소 underscore template으로 생성
- 수락/거절 팝업창 on/off, 계약 진행 내역 팝업창 on/off


#### 백엔드

> Spring Framework와 Oracle DB를 이용하여 작업 

##### 서비스 카드

- 서비스 상세 정보 가공해서 해당 서비스 카드에 띄우기

##### 대시보드 - 찜

- 찜한 서비스 불러와서 서비스 카드 띄우기(ajax, underscore.js)
- 찜 해제 시 찜 목록에서 삭제(ajax)

##### 대시보드 - 차단

- 차단한 유저 목록 불러와서 유저 정보 띄우기(ajax, underscore.js)
- 차단 해제 시 차단 목록에서 삭제(ajax)

##### 대시보드 - 계약

- 대기/진행/완료 탭에 맞는 서비스를 불러와서 서비스 카드 띄우기(ajax, underscore.js)
- 서비스 카드의 계약목록 클릭 시 해당 서비스의 계약 목록 불러와서 각 탭(대기/진행/완료)에 맞는 
  template으로 계약 목록 띄우기(ajax)
- 계약 수락/거절(ajax)
- 상세버튼 클릭 시 해당 계약 정보 불러와서 팝업창에 띄우기(ajax)
- 계약 완료 시 평점 및 리뷰 등록, 코인 거래(ajax)
