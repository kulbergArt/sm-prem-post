var popup_m = document.querySelector("#popup_m");
var btn_m = document.querySelector(".box-btn-m");
var close_m = document.querySelector("#popup_close_m");

var popup_y = document.querySelector("#popup_y");
var btn_y = document.querySelector(".box-btn-y");
var close_y = document.querySelector("#popup_close_y");


function openPopup(btn, popup){
    btn.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("hidden");
    });
}
function closePopupWindow(popup){
    popup.addEventListener("click", function(event) {
        e = event || window.event;
        if (e.target == this) {
            popup.classList.add("hidden");
        }
    });
}
function closePopupCross(close, popup){
    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("hidden");
    });
}

openPopup(btn_m, popup_m);
openPopup(btn_y, popup_y);
closePopupWindow(popup_m);
closePopupWindow(popup_y);
closePopupCross(close_m, popup_m);
closePopupCross(close_y, popup_y);