// 창 고유 ID 관리
let zIndexCounter = 10;

function createWindow(id, title, contentHTML) {
    // 이미 열려있는 창이 있다면 제거
    const existing = document.querySelector(`.app-window[data-id="${id}"]`);
    if (existing) {
        existing.remove();
    }

    const windowDiv = document.createElement("div");
    windowDiv.classList.add("app-window");
    windowDiv.setAttribute("data-id", id);
    windowDiv.style.zIndex = zIndexCounter++;
    windowDiv.style.top = '100px';
    windowDiv.style.left = '100px';
    windowDiv.style.zIndex = '100';
    windowDiv.innerHTML = `
        <div class="window-header" onmousedown="startDrag(event, this.parentElement)">
            <div id="headertitle">${title}</div>
            <button onclick="this.parentElement.parentElement.remove()"><img src="assets/close.svg" style="width: 16px; height: 16px;"></button>
        </div>
        <div class="window-body">${contentHTML}</div>
    `;

    document.querySelector(".display").appendChild(windowDiv);
}

// Drag 기능
let currentDrag = null;
let offsetX = 0, offsetY = 0;


function startDrag(e, element) {
    currentDrag = element;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

function onDrag(e) {
    if (!currentDrag) return;
    currentDrag.style.left = (e.clientX - offsetX) + 'px';
    currentDrag.style.top = (e.clientY - offsetY) + 'px';
}

function stopDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    currentDrag = null;
}

// Profile 창 열기
function openProfile() {
    createWindow("profile", "Profile", `
        <div class="profile-window">
            <img src="assets/banner.png" class="top-banner">
            <div class="profilefull">
                <div class="profileline">
                    <img src="assets/colorlogo.png" class="colorlogo">
                    <div class="profilecredit">
                        <h1>Lai</h1>
                        <h2>Composer / Designer</h2>
                        <h3>2007.03.15</h3>
                        <div id="flag"><img src="assets/kr_flag.svg" class="flag"><h3>Republic of Korea</h3></div>
                    </div>
                </div>
                <div class="profileline">
                    <div id="cat"><img src="assets/cat.jpg" style="width: 100%; border-radius: 8px; margin-top: 8px;"></div>
                    <div class="gameprofile" style="margin-top: 8px; line-height: 1.6;">
                        <g1>PUBG</g1>
                        <div id="gameline"><img src="assets/steam.svg"><g2>[BP] Ruarinn-_-</g2></div>
                        <div id="gameline"><img src="assets/kakao.svg"><g2>BP_Elfaria</g2></div>
                        <g1>Genshin Impact</g1>
                        <div id="gameline"><g3>AS</g3><g2>877241340</g2></div>
                        <g1>Osu!</g1>
                        <div id="gameline"><g2>- Lai -</g2></div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

// Contact 창 열기
function openContact() {
    createWindow("contact", "Contact", `
        <div class="contact-window">
            <div class="selectable">lyslipic1@gmail.com</div>
            <hr>
            <div class="contact-row">
                ${makeContactIcon('x.svg', 'X<br>(Twitter)', 'https://x.com/lai_fuari')}
                ${makeContactIcon('discord.svg', 'Discord', 'https://discord.gg/ayDd9WbdgY')}
                ${makeContactIcon('osu!.svg', 'Osu!', 'https://osu.ppy.sh/users/20654645')}
                ${makeContactIcon('youtube.svg', 'Youtube', 'https://www.youtube.com/@ixLai')}
                ${makeContactIcon('spotify.svg', 'Spotify', 'https://open.spotify.com/artist/7fouFbegt4hWQi6dQykm9A?si=9fmqrjYbQWu50Dr6tVx04g')}
            </div>
        </div>
    `);
}

function makeContactIcon(imgName, label, url) {
    return `
        <div class="icon" onclick="window.open('${url}', '_blank'); setActiveIcon(this);" style="cursor: pointer;">
            <img src="assets/${imgName}">
            <p>${label}</p>
        </div>
    `;
}
