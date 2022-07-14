const tabcontents = document.querySelectorAll(".tabcontent");
const tablinks = document.querySelectorAll(".tabs a");

function openTab(event , tabName){
    tabcontents.forEach((tabcontent) => (tabcontent.style.display="none"));
    tablinks.forEach((tablink) => tablink.classList.remove("active"));
    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display="block";
}
                                          