var typed = new Typed((".skills"),{
    strings : ["Frontend developer","Editor","Ui designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

function downloadPDF() {
    var fileName = "resume.pdf";
    var url = "resume.pdf";
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.download = fileName;
    anchor.click();
}