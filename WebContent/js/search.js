//역할 버튼 제이커리
		$(".filter_role .btn_role:eq(0)").click(function(e) {
			$(".filter_role").removeClass("on");
			e.preventDefault();
		});
		//역할 버튼 제이커리
		$(".filter_role .btn_role:eq(1)").click(function(e) {
			$(".filter_role").addClass("on");
			e.preventDefault();
		});

		//제공분야 버튼 제이커리
		var category = 2;
		var $category = $(".filter_providing  .btn_providing");
		$category.click(function(e) {
			$category.removeClass("on");
			var $this = $(this);
			$this.addClass("on");
			category = $this.attr("data-category");

			search();
			e.preventDefault();
		});

		//var category1 = null;
		/*
		var category1 = null;
		$(".filter_providing  .btn_providing:eq(0)").click(function(e) {
			$(this).toggleClass("on");
			//console.log($(this).attr("data-category"));
			//category1 = $(this).attr("data-category");
			//search();
			if($(".filter_providing  .btn_providing:eq(0)").hasClass("on")){
				category1 = $(".filter_providing  .btn_providing:eq(0)").attr("data-category");
				console.log(category1)
			}else{
				category1 = null;
			}
			search();
			e.preventDefault();
		});

		var category2 = null;
		$(".filter_providing  .btn_providing:eq(1)").click(function(e) {
			$(this).toggleClass("on");
			if($(".filter_providing  .btn_providing:eq(1)").hasClass("on")){
				category2 = $(".filter_providing  .btn_providing:eq(1)").attr("data-category");
				console.log(category1)
			}else{
				category2 = null;
			}
			search();
			e.preventDefault();
		});

		var category3 = null;
		$(".filter_providing  .btn_providing:eq(2)").click(function(e) {
			$(this).toggleClass("on");
			if($(".filter_providing  .btn_providing:eq(2)").hasClass("on")){
				category3 = $(".filter_providing  .btn_providing:eq(2)").attr("data-category");
				console.log(category1)
			}else{
				category3 = null;
			}
			search();
			e.preventDefault();
		});
		 */

		//날짜일정 버튼 제이커리
		$(".filter_schedule>.btn_date").click(function(e) {
			$('.filter_schedule>.btn_date').removeClass('on');
			$(this).addClass("on");

		});

		//상세필터 .item_detail1  select를 클릭했을때 화살표 변화
		$(".item_detail1").click(function(e) {

			$(".item_detail1 .fa-sort-up").toggleClass("on");
			$(".item_detail1 .fa-sort-down").toggleClass("on");
			e.preventDefault();
			e.stopImmediatePropagation();
		});

		//상세필터 .item_detail2  select를 클릭했을때 화살표 변화
		$(".item_detail2 ").click(function(e) {

			$(".item_detail2 .fa-sort-up").toggleClass("on");
			$(".item_detail2 .fa-sort-down").toggleClass("on");
			e.preventDefault();
			e.stopImmediatePropagation();
		});
		//box_sort select를 클릭했으때 화살표 변화
		$(".box_sort select").click(function(e) {

			$(".box_sort .fa-sort-up").toggleClass("on");
			$(".box_sort .fa-sort-down").toggleClass("on");

			e.preventDefault();
			e.stopImmediatePropagation();

		});

		//////////////////////////////////////////////////////
		//지역 부분
		//다른 부분을 클리했을때 이벤트를 종료 시켜서 클릭햇을때 나왔던 리스트가 사라집니다

		$("body").click(function() {

			$(".item_detail2 .fa-sort-up").removeClass("on");
			$(".item_detail2 .fa-sort-down").removeClass("on");
			$(".item_detail1 .fa-sort-up").removeClass("on");
			$(".item_detail1 .fa-sort-down").removeClass("on");
			$(".box_sort .fa-sort-up").removeClass("on");
			$(".box_sort .fa-sort-down").removeClass("on");
			$(".address2").removeClass("on");
			$(".address1").removeClass("on");
			$(".list_address2").removeClass("on");
			$(".list_address1").removeClass("on");
		});
		//도시 부분 제이커리 입니다
		//city를 클릭했을 때 city에 on이 추가 되면 리스트가 하단에 출현하고 on이 제거 되었을때 리스트가 닫힘니다
		$(".address1").click(function(e) {

			$(".address1").toggleClass("on");
			$(".list_address2").removeClass("on");
			$(".list_address1").toggleClass("on");
			e.preventDefault();
			//이벤트를 막아주는 이벤트입니다 (전체 화면에 어디를 클릭해도 리스트를 사라지게 만들수 있게 해줍니다
			e.stopImmediatePropagation();
		});
		//지역(군/구) 부분 제이커리 입니다
		//address를 클릭했을 때 address에 on이 추가 되면 리스트가 하단에 출현하고 on이 제거 되었을때 리스트가 닫힘니다
		$(".address2").click(function(e) {
			$(".address2").toggleClass("on");
			$(".list_address1").removeClass("on");
			$(".list_address2").toggleClass("on");
			e.preventDefault();
			//이벤트를 막아주는 이벤트입니다 (전체 화면에 어디를 클릭해도 리스트를 사라지게 만들수 있게 해줍니다
			e.stopImmediatePropagation();
		});

		//도시 리스트 div 부분 제이커리입니다
		//list_city를 클릭했을 때 list_city에 on이 추가 되면 리스트가 안에 있는 링크를 클릭했을때 list_address가 실행되어 출현합니다
		var area1 = '';

		$(".list_address1 .item_area a").click(function(e) {
			$(".address1").removeClass("on");
			$(".address1 strong").text($(this).text());
			$(".list_address1").removeClass("on");
			$(".address2").toggleClass("on");
			$(".list_address2").toggleClass("on");
			console.log($(this).text());
			area1 = $(this).text();

			e.preventDefault();
			//이벤트를 막아주는 이벤트입니다 (전체 화면에 어디를 클릭해도 리스트를 사라지게 만들수 있게 해줍니다
			e.stopImmediatePropagation();

		});
		//군/구 리스트 div 부분 제이커리입니다
		//list_address를 클릭했을 때 list_address에 on이 추가 되면 리스트가 안에 있는 링크를 클릭했을때 list_address가 닫힙니다
		var area2 = '';

		$(".list_address2 .item_area a").click(function(e) {
			$(".address2").removeClass("on");
			$(".address2 strong").text($(this).text());
			$(".list_address2").removeClass("on");
			console.log($(this).text());
			area2 = $(this).text();

			e.preventDefault();
			//이벤트를 막아주는 이벤트입니다 (전체 화면에 어디를 클릭해도 리스트를 사라지게 만들수 있게 해줍니다
			e.stopImmediatePropagation();

		});

		//캘린더
		var datepicker2 = new tui.DatePicker('#wrapper2', {
			date : new Date(),
			input : {
				element : '#datepicker-input2',
				format : 'yyyy-MM-dd'
			},
			language : 'ko',
			timepicker : false
		});
		//상세필터
		$(".btn_detail").click(function() {
			$(".filter_detail").toggleClass("on");

		});

		//여기서부터 ajax

		var role = 0;
		$(".btn_role").click(function() {
			role = $(this).attr("data-role");
			console.log(role);
			search()
		});

		var serviceDate = '';
		datepicker2.on('change', function() {
			serviceDate = moment(datepicker2.getDate()).format('YYYY-MM-DD')
			console.log(serviceDate);
			search();
		})

		var term = 0;
		$(".btn_date").click(function() {
			term = $(this).attr("data-term");
			console.log(term);
			search()
		})

		var score = 0;
		$(".score").on('change', function() {
			score = $(this).val();
			console.log(score);
			search()
		})

		var poom = 0;
		$(".poom").on('change', function() {
			poom = $(this).val();
			console.log(poom);
			search()
		})

		var order = 'P';
		$(".order").on('change', function() {
			order = $(this).val();
			console.log(order);
			search()
		})

		function search() {
			var title = $("input[name='query']").val();
			var allFilter = {
				"title" : title,
				"role" : parseInt(role),
				"category" : parseInt(category),
				"serviceDate" : moment(datepicker2.getDate()).format(
						'YYYY-MM-DD'),
				"term" : parseInt(term),
				"area1" : area1,
				"area2" : area2,
				"score" : parseInt(score),
				"poom" : parseInt(poom),
				"order" : order,
				"level" : 1
			};
			console.log(allFilter);
			
			//서비스 카드리스트 호출
			cardUtil.dataset = allFilter;
			cardUtil.getCardList("/ajax/service/search.poom", $("#cardBox"),
					'.img_box');
		}
		
		if ('${param.query}'.length > 0) {
			search();
		}
		
		$('#searchForm').submit(function (e) {
			console.log('searchForm');
			search();
			e.preventDefault();
		})