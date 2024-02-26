// 폴더 공유하기 모달
const shareModal = document.getElementById('shareFolderModal');
const shareBtn = document.getElementById("shareFolderBtn");
const shareSpan = document.querySelector("#shareFolderModal .close");

shareBtn.onclick = function() {
    shareModal.style.display = "block";
}

shareSpan.onclick = function() {
    shareModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === shareModal) {
        shareModal.style.display = "none";
    }
}

// 폴더 추가하기 모달
const addModal = document.getElementById('addFolderModal');
const addBtn = document.getElementById("addFolderBtn");
const addSpan = document.querySelector("#addFolderModal .close");

addBtn.onclick = function() {
    addModal.style.display = "block";
}

addSpan.onclick = function() {
    addModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === addModal) {
        addModal.style.display = "none";
    }
}

// 폴더에 추가하기 모달
const toModal = document.getElementById('toFolderModal');
const toBtn = document.getElementById("toFolderBtn");
const toSpan = document.querySelector("#toFolderModal .close");

toBtn.onclick = function() {
    toModal.style.display = "block";
}

toSpan.onclick = function() {
    toModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === toModal) {
        toModal.style.display = "none";
    }
}

// 링크 삭제하기 모달
const modal = document.getElementById('deleteModal');
const btn = document.getElementById('deleteBtn');
const closeBtn = document.querySelector('#deleteModal .close');

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// dot menu
document.getElementById('dotMenu').addEventListener('click', function(event) {
    event.stopPropagation();
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// 초기에 메뉴 숨기기
document.getElementById('menu').addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    menu.style.display = 'none'; // 문서의 다른 영역을 클릭하면 메뉴를 숨김
});