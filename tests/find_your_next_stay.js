const homepage = require('../pages/homepage');
const searchresultspage = require('../pages/searchresultspage');
const expect = require('chai').expect;

describe('Find your next stay', () => {

    after(() => {
        // homepage.close();
    })

    it('Search for a location', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.go_to_url(baseurl);
        await homepage.enter_search_text('London');
    })

    it('Enter stay details', async () => {
        await homepage.open_calendar();
        await homepage.sleep(1);
        await homepage.enter_checkin_details();
    })

    it('Verify search results', async () => {
        await homepage.click_search_button();
        await searchresultspage.sleep(2);
        expect(await searchresultspage.getHeading()).to.include('properties found');
    })

    it('Open top result', async () => {
        await searchresultspage.click_top_result();
        await searchresultspage.sleep(1);
    })
})