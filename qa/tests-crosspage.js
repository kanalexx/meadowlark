// Межстраницные тесты
// Запуск в командной строке:
// > mocha -u tdd -R spec qa/tests-crosspage.js 2>/dev/null
var Browser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Межстраничные тесты', function() {
    setup(function() {
        browser = new Browser();
    });

    test('запрос расценок для групп со страницы туров по реке Худ' +
        'должен заполнять поле реферера', function(done) {
            var referrer = 'http://localhost:3000/tours/hood-river';
            browser.visit(referrer, function() {
                browser.clickLink('.requestGroupRate', function() {
                    assert(browser.field('referrer').value === referrer);
                    done();
                });
            });
    });

    test('запрос расценок для групп со страницы туров' +
        ' пансионата "Орегон Коуст" должен' +
        ' заполнять поле реферера', function(done) {
            var referrer = 'http://localhost:3000/tours/oregon-coast';
            browser.visit(referrer, function() {
                browser.clickLink('.requestGroupRate', function() {
                    assert(browser.field('referrer').value === referrer);
                    done();
                });
            });
    });

    test('посещение страницы "Запрос цены для группы" напрямую' +
        ' должен приводить к пустому полю реферера', function(done) {
            browser.visit('http://localhost:3000/tours/request-group-rate', 
            function() {
                assert(browser.field('refferer').value === '');
                done();
            });
    });
});