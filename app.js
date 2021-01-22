let newList = document.getElementById('list');
// Add Buttons:
let addMusic = document.getElementById('addSong');
// Del Buttons:
let delPlaylist = document.getElementById('deleteALL');
let delMusic = document.getElementById('deleteSong');

//add song
function addList() {
    let sourceUrl = document.getElementById('sourceUrl').value;
    sourceUrl.split(",").forEach((file) => {
       let  fileUrl = file.trim();
        if (fileUrl !== "" && playlist.indexOf(fileUrl) === -1) {
            newList.document.createElement("div");

            addMusic.setAttribute('onclick','removeList(this)');
          addMusic.push(fileUrl);
        }
    });
    document.getElementById('sourceUrl').value = '';
}

//delete song
function removeList(item) {
    let index = newPlaylist.indexOf(item.parentElement.firstChild.innerText);
    if (index !== -1){
       newPlaylist.splice(index,1);
       delMusic.addEventListener("click", function () {
           this.remove();
       })
    }
    //delete all
    else {
        delPlaylist.addEventListener("click", function (e) {
            newPlaylist.remove();
        })
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

