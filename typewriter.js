function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function InitHome() {
    console.log("Initializing home..")

    console.log(Cookies.get('documents'))

    if (!Cookies.get("documents")) {
        console.log("No Documents Found.. Creating new one now.")
        Cookies.set("documents", "Test Document")
        return;
    } else {
        console.log(Cookies.get("documents"))
    }
}