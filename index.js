function toggleElement(e){
    var x = document.getElementById(e);
    if(x.style.display == "none"){
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

dragElement(document.getElementById("profileViewerCoverall"));
dragElement(document.getElementById("wikiViewerCoverall"));
dragElement(document.getElementById("bazaarTrackerCoverall"));
dragElement(document.getElementById("timerViewerCoverall"));
dragElement(document.getElementById("ultimateGuideCoverall"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    if(elmnt.offsetTop - pos2 > -1){
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    }
    if(elmnt.offsetLeft - pos1 > -10){
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function bringToFront(e){
    x = document.getElementById(e);
    x.style.zIndex = "1";
    if(e == "wikiViewerCoverall"){
        document.getElementById("profileViewerCoverall").style.zIndex = "0";
        document.getElementById("bazaarTrackerCoverall").style.zIndex = "0";
        document.getElementById("timerViewerCoverall").style.zIndex = "0";
        document.getElementById("ultimateGuideCoverall").style.zIndex = "0";
    } else if(e == "profileViewerCoverall") {
        document.getElementById("wikiViewerCoverall").style.zIndex = "0";
        document.getElementById("bazaarTrackerCoverall").style.zIndex = "0";
        document.getElementById("timerViewerCoverall").style.zIndex = "0";
        document.getElementById("ultimateGuideCoverall").style.zIndex = "0";
    } else if(e == "bazaarTrackerCoverall"){
        document.getElementById("profileViewerCoverall").style.zIndex = "0";
        document.getElementById("wikiViewerCoverall").style.zIndex = "0";
        document.getElementById("timerViewerCoverall").style.zIndex = "0";
        document.getElementById("ultimateGuideCoverall").style.zIndex = "0";
    } else if(e == "timerViewerCoverall"){
        document.getElementById("profileViewerCoverall").style.zIndex = "0";
        document.getElementById("wikiViewerCoverall").style.zIndex = "0";
        document.getElementById("bazaarTrackerCoverall").style.zIndex = "0";
        document.getElementById("ultimateGuideCoverall").style.zIndex = "0";
    } else if(e == "ultimateGuideCoverall"){
      document.getElementById("profileViewerCoverall").style.zIndex = "0";
      document.getElementById("wikiViewerCoverall").style.zIndex = "0";
      document.getElementById("bazaarTrackerCoverall").style.zIndex = "0";
      document.getElementById("timerViewerCoverall").style.zIndex = "0";
  }
}
