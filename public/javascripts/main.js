function onMenuClick() {
  const menuBtnElement = document.getElementById("menu-icon-btn")
  const fullMenuViewElement = document.getElementById("full-menu-view")

  const className = menuBtnElement.getAttribute("class") ?? ""
  if (className.includes("notOpen")) {
    fullMenuViewElement.setAttribute("class", "open-full-menu-view")
    menuBtnElement.setAttribute("class", "open")
  } else if (className.includes("open")) {
    fullMenuViewElement.setAttribute("class", "close-full-menu-view")
    menuBtnElement.setAttribute("class", "notOpen")
  }
  console.log("???")
}
