$('.header__brief').on('click touch', function(e) {

    e.preventDefault();

    var self = $(`.upload`);

    self.addClass('loading');
    setTimeout(function() {
        self.removeClass('loading');
    }, 4200)

});

$('.header__menu-brief').on('click touch', function(e) {

    e.preventDefault();

    var self = $(`.upload`);

    self.addClass('loading');
    setTimeout(function() {
        self.removeClass('loading');
    }, 4200)

});