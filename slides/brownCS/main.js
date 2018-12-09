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
    if (event.indexh == 2) {
        console.log('destroyed xtk0.');
        xtk0frame = document.getElementById('xtk0');
        xtk0frame.contentWindow.REN3D.destroy();
    }


} );

window.onkeydown = function(e) {

    console.log(e)

    if (e.keyCode == '38') {
        Reveal.right();
    } else if (e.keyCode == '40') {
        Reveal.left();
    }

}