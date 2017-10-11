import Math;

function getRandomHexValue() {
    var hexOptions = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var hexValue = '';
    for (i = 0; i < 6; i++) {
        randomValue = Math.floor(Math.random() * (hexOptions.length));
    }
}

function test() {
    console.log(getRandomHexValue());
}