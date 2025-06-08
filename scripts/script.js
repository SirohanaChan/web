function setActiveIcon(el) {
    // 기존 active 클래스 제거
    document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('active');
        icon.style.transition = 'border 0.2s ease, background-color 0.2s ease';
    });

    // transition을 길게 설정하고 .active 부여
    el.style.transition = 'border 3s ease, background-color 3s ease';
    el.classList.add('active');

    // 3초 후 active 제거
    setTimeout(() => {
        el.classList.remove('active');

        // ⚠️ 50ms 뒤에 transition 속도 원래대로 되돌림 (애니메이션 끝난 뒤처럼 보이게)
        setTimeout(() => {
            el.style.transition = 'border 0.2s ease, background-color 0.2s ease';
        }, 50);
    }, 500);
}

