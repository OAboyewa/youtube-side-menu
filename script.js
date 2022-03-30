
let sidebarTemplate = (`
    <div class="sidebar-wrapper" id="side-menu-container">
        <div class="header">
            <a href="#" id="side-menu-btn-close">
            <img class="menu-icon" src="/public/icons8-menu-rounded-30.png" alt="">
            </a>
            <a href="#">
                <img class="menu-icon" src="/public/yt_logo_rgb_dark.png" alt="">
            </a>
        </div>
    </div>
`);

let sideBtnOpen = document.getElementById("side-menu-btn-open");

sideBtnOpen.addEventListener("click", () => {

    let header = document.querySelector("Header");
    header.insertAdjacentHTML("beforeend", sidebarTemplate);

    let sidebarContainer = document.getElementById("side-menu-container");
    setTimeout(() => sidebarContainer.classList.add("sidebar-wrapper-transition"), 100);

    let sideBtnClose = document.getElementById("side-menu-btn-close");
    sideBtnClose.addEventListener("click", () => {

        setTimeout(() => sidebarContainer.classList.remove("sidebar-wrapper-transition"), 100);
        setTimeout(() => sidebarContainer.remove(), 500);
    });
});
