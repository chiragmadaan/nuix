const homepage = require('../pages/homepage');
const signinpage = require('../pages/signinpage');
// const gamepage = require('../pages/gamepage');
// const newspage = require('../pages/newspage');
// const leaderboard = require('../pages/leaderboard');
// const buspage = require('../pages/buspage');
// const restaurantpage = require('../pages/restaurantpage');
// const officepage = require('../pages/officepage');

describe('Authentication', () => {

    after(() => {
        // signinpage.close();
    })

    it('Go to authentication page', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.go_to_url(baseurl);
        await homepage.click_sign_in_button();
    })

    it('Check username error', async () => {
        await signinpage.click_continue_button();
        await signinpage.verify_username_alert();
    })
})