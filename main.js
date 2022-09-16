const Block = document.getElementById('Source');
var selector = 0;
var image = document.getElementById('Imageset');
function Changeplug(){
    var txt = document.getElementById("Source").src ="https://openspeedtest.com/Get-widget.php";
}
function Changeplugmeter() {
    var txt = document.getElementById("Source").src ="https://www.metercustom.net/plugin/";
}

function ChangeSRC() {
    if(selector == 1){
        var txt = document.getElementById("Source").src ="http://openspeedtest.com/Get-widget.php";
    }if(selector == 2){
        var txt = document.getElementById("Source").src ="https://www.metercustom.net/plugin/";
    }
}
