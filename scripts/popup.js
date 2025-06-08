document.addEventListener("DOMContentLoaded", () => {
    const popupContent = {
        title: "공지",
        subtitle: "개발중인 사이트입니다.",
        version: "v0.1",
        details: `
            모바일은 추후 대응 예정입니다.
        `,
        contact: `
            문의 / 문제 보고 / 의견 제출은 디스코드 @ixlai로 보내주시기 바랍니다.
        `
    };

    // 팝업 요소 생성
    const pn = document.getElementById('popupNotice');
    pn.innerHTML = `
        <div class="popup-content">
            <p class="popup-title">${popupContent.title}</p>
            <div class="popup-design">
                <p class="popup-subtitle">${popupContent.subtitle}</p>
                <p class="popup-version">${popupContent.version}</p>
                <p class="popup-details">${popupContent.details}</p>
                <p class="popup-contact">${popupContent.contact}</p>
            </div>
            <span id="closePopup" class="close-btn"><div id="notice-btn">닫기</div></p2>
            <button id="dontShowAgainButton" class="dont-show-again-btn">하루 동안 보지 않기</button>
        </div>
    `;


    // 화면 크기 확인 (1024px 이상이면 데스크탑)
    if (window.innerWidth >= 1024) {
        // 팝업 요소 및 닫기 버튼
        const popup = document.getElementById('popupNotice');
        const dontShowAgainButton = document.getElementById('dontShowAgainButton');

        // 하루 동안 보지 않기 상태 확인
        const lastPopupDate = localStorage.getItem('lastPopupDate_r');
        const currentDate = new Date().toISOString().split('T')[0]; // yyyy-mm-dd 형식

        // 지난 팝업이 오늘이 아니라면 팝업을 표시
        if (lastPopupDate !== currentDate) {
            setTimeout(() => {
                popup.style.display = 'flex'; // 팝업 열기
            }, 1); // 1초 후에 팝업이 나타납니다.
        }

        // 닫기 버튼 클릭 시 팝업 닫기
        const closePopup = document.getElementById('closePopup');
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // 팝업 외부 클릭 시 팝업 닫기
        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });

        // 하루 동안 보지 않기 버튼 클릭 시 로컬 스토리지에 날짜 저장하고 팝업 닫기
        dontShowAgainButton.addEventListener('click', () => {
            localStorage.setItem('lastPopupDate_r', currentDate);
            popup.style.display = 'none';
        });
    } else {
        console.log('모바일 환경에서는 팝업이 표시되지 않습니다.');
    }
});