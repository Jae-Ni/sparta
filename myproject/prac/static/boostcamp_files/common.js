$(window).on('beforeunload', function() {
    /**
     * 상단 배너를 닫으면
     * refresh 후 새로 생성된 상단 배너 영역 아래로 스크롤 잡힘 현상
     * 페이지 새로 렌더링하는 경우, 스크롤 최상단으로 올리도록 함
     */
    $(window).scrollTop(0);
});

$(document).ready(function(){
    var SNS_LINK = {
        FACEBOOK: {
            PC: "https://www.facebook.com/",
            MOBILE: "https://m.facebook.com/"
        },
        INSTAGRAM: {
            PC: "https://www.instagram.com/",
            MOBILE: "https://m.instagram.com/"
        },
        NAVER_BLOG: {
            PC: "https://blog.naver.com/",
            MOBILE: "https://m.blog.naver.com/"
        },
        GIT: {
            PC: "https://github.com/",
            MOBILE: "https://github.com/"
        }
    };

    // 모바일 사이드 nav 열고 닫기
	$('#btnOpenMenu, #btnCloseMenu').click(function() {
		var $el = $('#toggleMenu')
		var isActive = $el.hasClass('active');
		if(!isActive) $el.addClass('active');
        else $el.removeClass('active');
    });

	// FAQ 탭 이동
    $('[data-faq-type-btn]').click(function(e) {
        e.preventDefault();

        var faqType = $(e.currentTarget).data('faq-type-btn');

        // active 탭 변경
        $('[data-faq-type-btn]').parent().removeClass('active');
        $('[data-faq-type-btn='+ faqType +']').parent().addClass('active');

        // FQA 내용 변경
        $('[data-faq-type-content]').hide();
        $('[data-faq-type-content='+ faqType +']').show();
    })

    // 부스트 캠프 지원 배너 오늘 하루 보지 않기 클릭시
    $('[data-hide-apply-preriod]').click(function(event) {
        event.preventDefault();
        $.cookie('hide_top_banner', true, {expires: getLastTimeOfToday(), path: '/',domain: window.location.hostname});
        removeTopBanner();
    });

    // 부스트 캠프 지원 배너 닫기 클릭시
    $('[data-close-apply-period]').click(function(event) {
        event.preventDefault();
        removeTopBanner();
    });

    // SNS 페이지 이동시, 해상도에 따른 SNS 도메인 변경
    $('[data-sns-type]').click(function(event) {
        var snsType = $(event.currentTarget).data("sns-type");
        var linkUri = $(event.currentTarget).data("link-uri");
        var isMobileView = window.innerWidth <= 900;
        var viewType = isMobileView ? "MOBILE" : "PC";

        $(event.currentTarget).attr("href", SNS_LINK[snsType][viewType] + linkUri);
    });

    // 부스트 캠프 지원 배너 노출 결정
    hideBannerIfHasHideCookie();
});

/**
 * 쿠키 만료를 오늘 마지막 시간까지 유지
 */
function getLastTimeOfToday() {
    var midnightDate = new Date();
    midnightDate.setHours(23);
    midnightDate.setMinutes(59);
    midnightDate.setSeconds(59);

    return midnightDate;
}

/**
 * 최상단 배너 제거
 */
function removeTopBanner() {
    $('[data-top-banner]').remove();
}

/**
 * 배너 보지 않기 쿠키가 존재하는 경우, 배너 숨김
 */
function hideBannerIfHasHideCookie() {
    var cookie = $.cookie('hide_top_banner');
    if (cookie) {
        removeTopBanner();
    }
}