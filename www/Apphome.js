document.addEventListener("init", function(event) {
  var page = event.target;

  if (page.id === "home") {
    page.querySelector("#menu_button").onclick = function() {
      document.querySelector("#menu").open();
    };

    //The postchange event listener is used for changing the dots when the carousel is changed

    page.querySelector("#carousel").addEventListener("postchange", function() {
      page.querySelector("#dot0").classList.remove("circle_current");
      page.querySelector("#dot1").classList.remove("circle_current");
      page.querySelector("#dot2").classList.remove("circle_current");

      page
        .querySelector(
          "#dot" + page.querySelector("#carousel").getActiveIndex()
        )
        .classList.add("circle_current");
    });
  } else if (page.id === "event_details") {
    page.querySelector("#event_title").innerHTML = page.data.title;
  }
});

function openEventDetails(id) {
  document
    .querySelector("#myNavigator")
    .pushPage("event_details.html", { data: { title: id } });
  //   showdetail();
}

function openHome() {
  document.querySelector("#myNavigator").pushPage("home_splitter.html");
}
function goBack() {
  document
    .querySelector("#menu")
    .close()
    .then(function() {
      document.querySelector("#myNavigator").popPage();
    });
}
