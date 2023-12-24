const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hello = $('.hello');




hello.onclick = function() {
        $('.page1 audio').play();

    $('.speak').style.display = 'none';
    $('.hello').style.display = 'none';
    $('.left').style.transform = 'translateX(-590px)';
    $('.right').style.transform = 'translateX(590px)';
    $('.over audio').play();
    setTimeout(function() {
        $('.over').style.display = 'none';
    },12000)
    $('.page1 audio').onended = function() {
        $('.page1 audio').play();
    }
}
