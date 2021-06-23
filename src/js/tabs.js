function selectTab(event, skillType) {
  const container = document.getElementById("tabs-content-container");
  const tabContents = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-button");
  const activeLink = document.getElementById("tab-button-active");
  container.style.width = `${tabContents.length * 100}%`;
  const translateAmount = 100 / tabContents.length;
  const tabLength = tabContents.length;

  for (i = 0; i < tabLength; i++) {
    tabContents[i].className = tabContents[i].className.replace(" active", "");
    if (tabContents[i].id === skillType) {
      tabContents[i].className = tabContents[i].className + " active";
      container.style.transform = `translateX(${-(tabLength - 1 - i) * translateAmount}%)`;
      activeLink.style.transform = `translateX(${i * 100}%)`;
    }
  }

  for (let tabLink of tabLinks) {
    tabLink.className = tabLink.className.replace(" active", "");
  }
  event.currentTarget.className += " active";
}
const tabs = document.getElementsByClassName("tab");
for (tab of tabs) {
  tab.style.transition = "0s";
  setTimeout(() => {
    tab.style.transition = "var(--slide-time)";
  }, 1000);
}
document.getElementById("default-open").click();
