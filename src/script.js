// 폴더 공유하기 모달
const shareModal = document.getElementById('shareFolderModal');
const shareBtn = document.getElementById("shareFolderBtn");
const shareSpan = document.querySelector("#shareFolderModal .close");

shareBtn.onclick = function() {
    shareModal.classList.add("show-modal");
}

shareSpan.onclick = function() {
    shareModal.classList.remove("show-modal");
}

// 폴더 추가하기 모달
const addModal = document.getElementById('addFolderModal');
const addBtn = document.getElementById("addFolderBtn");
const addSpan = document.querySelector("#addFolderModal .close");

addBtn.onclick = function() {
    addModal.classList.add("show-modal");
}

addSpan.onclick = function() {
    addModal.classList.remove("show-modal");
}

// 폴더에 추가하기 모달
const toModal = document.getElementById('toFolderModal');
const toBtn = document.getElementById("toFolderBtn");
const toSpan = document.querySelector("#toFolderModal .close");

toBtn.onclick = function() {
    toModal.classList.add("show-modal");
}

toSpan.onclick = function() {
    toModal.classList.remove("show-modal");
}

// 삭제하기 모달
const deleteModal = document.getElementById('deleteModal');
const deleteBtn = document.getElementById("deleteBtn");
const deleteSpan = document.querySelector("#deleteModal .close");

deleteBtn.onclick = function() {
    deleteModal.classList.add("show-modal");
}

deleteSpan.onclick = function() {
    deleteModal.classList.remove("show-modal");
}

// 모달 영역 외부 클릭 시 모달 숨기기
window.onclick = function(event) {
    if (event.target === shareModal) {
        shareModal.classList.remove("show-modal");
    }
    if (event.target === addModal) {
        addModal.classList.remove("show-modal");
    }
    if (event.target === toModal) {
        toModal.classList.remove("show-modal");
    }
    if (event.target === deleteModal) {
        deleteModal.classList.remove("show-modal");
    }
}

// dot menu
document.getElementById('dotMenu').addEventListener('click', function (event) {
    event.stopPropagation();    // 현재 이벤트의 전파를 중단
    const menu = document.getElementById('menu');
    menu.classList.toggle('show_dot_menu'); // 없으면 추가하고, 이미 있는 경우 제거
});

// 초기에 메뉴 숨기기
document.getElementById('menu').addEventListener('click', function (event) {
    event.stopPropagation();    // 현재 이벤트의 전파를 중단
});
