const homepage = require('../pages/homepage');
// const gamepage = require('../pages/gamepage');
// const newspage = require('../pages/newspage');
// const leaderboard = require('../pages/leaderboard');
// const buspage = require('../pages/buspage');
// const restaurantpage = require('../pages/restaurantpage');
// const officepage = require('../pages/officepage');

describe('Find your next stay', () => {

    after(() => {
        // homepage.close();
    })

    it('search for a location', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.go_to_url(baseurl);
        await homepage.enter_search_text('London');
        await homepage.open_calendar();
    })
})