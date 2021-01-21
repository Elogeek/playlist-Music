let playlist = document.getElementById('playlist');
let add = document.getElementById("add");
let table = document.getElementById("playlist");

//add song
function addList() {
    let sourceUrl = document.getElementById('sourceUrl').value;
    sourceUrl.split(",").forEach((file) => {
       let  fileUrl = file.trim();
        if (fileUrl !== "" && playlist.indexOf(fileUrl) === -1) {
            table.document.createElement("tr");
            add.setAttribute('onclick','removeList(this)');
            add.innerHTML = '&times;';
            playlist.push(fileUrl);
        }
    });
    document.getElementById('sourceUrl').value = '';
}

//delete song
function removeList(item) {
    let index = playlist.indexOf(item.parentElement.firstChild.innerText);
    if (index !== -1){
        playlist.splice(index,1);
        item.parentElement.remove();
    }
}
let video = document.querySelector(".video");
video.addEventListener('error', function(){
    stop();
    document.getElementById("songName").innerHTML = "Error Loading Audio";
});

let input = document.getElementById("sourceUrl");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addList();
    }
});
