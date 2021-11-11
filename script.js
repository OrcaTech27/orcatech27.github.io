var scrElegible = 1;
var pcBroken = 1;
var pcOn = 0;
function lbOn() {
    document.getElementById('lightbulb').src='pic_bulbon.gif';
}
function lbOff() {
    document.getElementById('lightbulb').src='pic_bulboff.gif';
}
function scrOn() {
    if(scrElegible == 1 && pcBroken == 1) {
        if(pcOn == 0) {
            document.getElementById('screen').src='pic_screenon.gif';
            pcOn = 1;
            return;
        }
        if(pcOn == 1) {
            document.getElementById('screen').src='pic_screenoff.gif'
            pcOn = 0;
            return;
        }
    }
}
function scrOff() {
    document.getElementById('screen').src='pic_screenoff.gif';
    scrElegible = 0;
}
function scrRegen() {
    scrElegible = 1;
}
function pcBreak() {
    scrOff();
    pcBroken = 0;
}
function swOn() {
    document.getElementById('switch').src='pic_switchon.gif'
}
function swOff() {
    document.getElementById('switch').src='pic_switchoff.gif'
}