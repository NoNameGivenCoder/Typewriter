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

    if (Cookies.get("documents")) {
      for (let i = 0; i < JSON.parse(Cookies.get("documents")).length; i++) {
        const document = JSON.parse(Cookies.get("documents"))[i];

        console.log(document)
      }
    } else {
      console.log("No documents found..")
    }
}

function cookiesDebug() {
  Cookies.remove("documents")
  console.log("Deleted all documents.")

  Cookies.set("documents", "{name : 'Test'}")
}