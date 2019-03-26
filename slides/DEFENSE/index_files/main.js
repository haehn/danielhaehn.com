Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    console.log(event.indexh);

    // if (event.indexh == 1) {
    //     console.log('activate nice view for xtk0.')
    //     // this is for the first XTK rendering
    //     xtk0frame = document.getElementById('xtk0');
    //     console.log(xtk0frame);
    //     xtk0frame.contentWindow.set_nice_view();
    // } else 
    if (event.indexh == 9) {
        console.log('destroyed xtk0.');
        xtk0frame = document.getElementById('xtk0');
        xtk0frame.contentWindow.REN3D.destroy();
    }


} );

window.onload = function() {

    // we need to re-configure Reveal...

    var oldc = Reveal.getConfig();

    oldc.keyboard = true;
    oldc.keyboardCondition = checkValidKey;

    Reveal.configure(oldc);

    console.log('new config in place.')

}

function checkValidKey(e) {

    var validkeys = [27, 83, 70, 66];

    if (validkeys.includes(e.keyCode)) {
        return true;
    }

    return false;
}

window.onkeyup = function(e) {
    // console.log(e.keyCode)
    if (e.keyCode == '38') {

        // if (Reveal.availableFragments().next) {
            console.log('up pressed')
        //     Reveal.nextFragment();
        // } else {
            Reveal.navigateRight();
        // }

    } else if (e.keyCode == '40') {

        console.log('down pressed')

            Reveal.navigateLeft();

    }

}