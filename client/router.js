Router.route('/', {
    template: 'homePage',
    title: 'Creativity Through Arts',
    hash: 'maintainScroll=0'

});

Router.route('/home', {
    template: 'homePage',
    title: 'Creativity Through Arts - Home'
});

Router.route('/about', {
    template: 'aboutPage',
    title: 'Creativity Through Arts - About'
});

Router.route('/events', {
    template: 'eventsPage',
    title: 'Creativity Through Arts - Events'
});

Router.route('/privacy', {
    template: 'privacy',
    title: 'Creativity Through Arts - Privacy Policy'
});

Router.route('/termsofservice', {
    template: 'termsofservice',
    title: 'Creativity Through Arts - Terms of Service'
});

Router.route('/ctc', {
    template: 'ctc',
    title: 'Creativity Through Arts - Creativity Through Code'
});

Router.route('/contact', {
    template: 'contact',
    title: 'Creativity Through Arts - Contact'
});

Router.route('/signup', {
    template: 'signup',
    title: 'Creativity Through Arts - Sign Up'
});


Router.route('/coffeehouse', {
    template: 'coffeehouse',
    title: 'Creativity Through Arts - Coffee House'
});

Router.route('/debonair', {
    template: 'debonair',
    title: 'Creativity Through Arts - Debonair'
});