function onMenuClick() {
  const menuBtnElement = document.getElementById("menu-icon-btn")
  const fullMenuViewElement = document.getElementById("full-menu-view")
  const menuIcon = document.getElementById("menuIcon")
  const menuCloseIcon = document.getElementById("menuCloseIcon")

  const className = menuBtnElement.getAttribute("class") ?? ""
  if (className.includes("notOpen")) {
    fullMenuViewElement.setAttribute("class", "open-full-menu-view")
    menuBtnElement.setAttribute("class", "open")
    menuIcon.setAttribute("class", "menuIconHide")
    menuCloseIcon.setAttribute("class", "menuIconShow")
  } else if (className.includes("open")) {
    fullMenuViewElement.setAttribute("class", "close-full-menu-view")
    menuBtnElement.setAttribute("class", "notOpen")
    menuCloseIcon.setAttribute("class", "menuIconHide")
    menuIcon.setAttribute("class", "menuIconShow")
  }
}
