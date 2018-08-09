<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>검색페이지</title>
<%@ include file="/WEB-INF/view/templates/link.jsp"%>
<link rel="stylesheet" href="/css/common/paginate.css" />
<link rel="stylesheet" href="/css/calendar/tui-date-picker.css">
<link rel="stylesheet" href="/css/calendar/tui-time-picker.css" />
<link rel="stylesheet" href="/css/slick/slick.css" />
<link rel="stylesheet" href="/css/slick/slick-theme.css" />
<link rel="stylesheet" href="/css/search.css?date=2018051801" />
<link rel="stylesheet"
	href="/css/card_giver_level_first.css?date=201804191" />
<link rel="stylesheet"
	href="/css/card_taker_level_first.css?date=201802344" />
<style>
#cardBox {
	width: 1200px;
	min-height: 400px;
	margin: auto;
	/*background-color: #4b96e6;*/
	padding: 20px;
}

#cardBox .card, .taker_card {
	float: left;
	margin-left: 35px;
	margin-bottom: 35px;
} 
</style>
</head>
<body>
	<%@ include file="/WEB-INF/view/templates/header.jsp"%> 
	<div id="menuContents">
		<div id="menuFileterWrap">
			<div id="menuFilter">
				<!-- 역할 부분 입니다-->
				<div class="filter_role">
					<h3>역 할</h3>
					<!--기버 테이커 버튼-->
					<button data-role="2" class="btn_role">품을 주고 싶어요</button>
					<button data-role="1" class="btn_role">품을 받고 싶어요</button>

				</div>
				<!--제공분야-->
				<div class="filter_providing">
					<h3>제공분야</h3>
					<!--가사 교육 심부름 버튼 -->
					<button data-category="2" class="btn_providing on">가사</button>
					<button data-category="1" class="btn_providing">교육</button>
					<button data-category="3" class="btn_providing">심부름</button>

				</div>
				<!--날짜일정-->
				<div class="filter_schedule">
					<h3>날짜일정</h3>
					<!--강사님이 올려주신거라서 css는 제가 만든거 아니니까 수정하지 마세여 ㅎㅎ-->
					<div class="row">

						<div class="tui-datepicker-input tui-datetime-input tui-has-focus">
							<input type="text" id="datepicker-input2" aria-label="Date-Time">
							<span class="tui-ico-date"></span>
						</div>
						<div id="wrapper2" style="margin-top: -1px;"></div>
						<!--여기까지 강사님 캘린더 부분입니다.-->
					</div>

					<button data-term="1" class="btn_date">1주</button>
					<button data-term="2" class="btn_date">2주</button>
					<button data-term="3" class="btn_date">1개월</button>
				</div>
				<!--지역 필터-->
				<div class="filter_area">
					<div class="box_area">
						<h3>지역</h3>
						<a href="" class="address1"> <strong>시</strong> <i
							class="fas fa-sort-down"></i> <i class="fas fa-sort-up"></i>
						</a>
						<ul class="list_address1">
							<li class="item_area"><a href="">서울</a></li>
							<li class="item_area"><a href="">인천</a></li>
							<li class="item_area"><a href="">부산</a></li>
							<li class="item_area"><a href="">대구</a></li>
							<li class="item_area"><a href="">광구</a></li>
							<li class="item_area"><a href="">울산</a></li>
							<li class="item_area"><a href="">대전</a></li>
						</ul>
						<a href="" class="address2"> <strong>군/구</strong> <i
							class="fas fa-sort-down"></i> <i class="fas fa-sort-up"></i>
						</a>
						<ul class="list_address2">
							<li class="item_area"><a href="">강남구</a></li>
							<li class="item_area"><a href="">강동구</a></li>
							<li class="item_area"><a href="">강북구</a></li>
							<li class="item_area"><a href="">강서구</a></li>
							<li class="item_area"><a href="">관악구</a></li>
							<li class="item_area"><a href="">광진구</a></li>
							<li class="item_area"><a href="">구로구</a></li>
							<li class="item_area"><a href="">금천구</a></li>
							<li class="item_area"><a href="">노원구</a></li>
							<li class="item_area"><a href="">도봉구</a></li>
							<li class="item_area"><a href="">동대문구</a></li>
							<li class="item_area"><a href="">동작구</a></li>
							<li class="item_area"><a href="">마포구</a></li>
							<li class="item_area"><a href="">서대문구</a></li>
							<li class="item_area"><a href="">서초구</a></li>
							<li class="item_area"><a href="">성동구</a></li>
							<li class="item_area"><a href="">성북구</a></li>
							<li class="item_area"><a href="">송파구</a></li>
							<li class="item_area"><a href="">양천구</a></li>
							<li class="item_area"><a href="">영등포구</a></li>
							<li class="item_area"><a href="">용산구</a></li>
							<li class="item_area"><a href="">은평구</a></li>
							<li class="item_area"><a href="">종로구</a></li>
							<li class="item_area"><a href="">중구</a></li>
							<li class="item_area"><a href="">중랑구</a></li>
						</ul>
					</div>

				</div>
				<!--상세필터-->
				<div class="filter_detail">

					<button class="btn_detail">
						상세필터 <i class="fas fa-minus"></i> <i class="fas fa-plus"></i>
					</button>
					<div class="list_detail">
						<h3>평점</h3>
						<div class="item_detail1">
							<select class="score">
								<option value="90">90%이상</option>
								<option value="80">80%이상</option>
								<option value="60">60%이상</option>
								<option value="50">50%이상</option>
								<option value="40">40%이상</option>
								<option value="30">30%이상</option>
							</select> <i class="fas fa-sort-down"></i> <i class="fas fa-sort-up"></i>
						</div>
						<h3>품</h3>
						<div class="item_detail2">
							<select class="poom">
								<option value="30">30품이상</option>
								<option value="20">20품이상</option>
							</select> <i class="fas fa-sort-down"></i> <i class="fas fa-sort-up"></i>
						</div>

					</div>

				</div>


			</div>
			<!--//end menuFilter -->
		</div>
		<!--//end menuFileterWrap  -->
		<div id="menucard">
			<div class="box_sort">

				<select class="order">
					<option value="P">인기도순</option>
					<option value="H">품높은순</option>
					<option value="L">품낮은순</option>
					<option value="R">리뷰순</option>
				</select> <i class="fas fa-sort-down"></i> <i class="fas fa-sort-up"></i>
			</div>
			<!-- box_select-->
			<div id="cardBox">
				<!--1차 박스-->

			</div>
			<!-- box_card-->
	

			<!--box_paginate -->
 
		</div>
		<!--menucard -->
	</div>
	<!--menuContents -->
	<%@ include file="/WEB-INF/view/templates/footer.jsp"%>
	<%@ include file="/WEB-INF/view/templates/card_level_first.jsp"%>
	<%@ include file="/WEB-INF/view/templates/js.jsp"%>
	<script src="/js/calendar/tui-code-snippet.min.js"></script>
	<script src="/js/calendar/tui-time-picker.min.js"></script>
	<script src="/js/calendar/moment-with-locales.min.js"></script>
	<script src="/js/calendar/tui-date-picker.min.js"></script>
	<script src="/js/slick/slick.min.js"></script>
	<script src="/js/slick/slick_helper.js?date=201804281"></script>
	<script src="/js/card_util.js?date=201804191"></script>
	<script src="/js/search.js"></script>
	

	<script>
		
	</script>

</body>
</html>