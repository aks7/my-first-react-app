import './AjaxCallTest.css'

function loadDoc() {
    console.log("ajax call started..............");
    var xhhtp = new XMLHttpRequest();
    xhhtp.onreadystatechange = function () {
        console.log("this.readyStat= ", this.readyState);
        if (this.readyState == 4 && this.status == 200) {
           // document.getElementById("demo").innerHTML = this.responseText;
            document.getElementById("demo").innerHTML = "AJAX call completed......................";
        }
    };
    xhhtp.open("GET", "/Xml/ajax_info.txt");
    xhhtp.send();
}

function newDiv() {

    return (
        <div id="newDiv">
            <h3>"AJAX call completed......................"</h3>
        </div>
    )
}

function AjaxCallTest() {    

    return (
        <div id="demo">
            <button type="button" onClick={loadDoc}> Do Ajax Call</button>
        </div>
    )
}

export default AjaxCallTest;