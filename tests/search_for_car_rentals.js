const homepage = require('../pages/homepage');
const carrentalspage = require('../pages/carrentalspage');
const carrentalssearchresultspage = require('../pages/carrentalssearchresultspage');
const expect = require('chai').expect;

describe('Search for car rentals', () => {

    after(() => {
        homepage.close();
    })

    it('Open car rentals page', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.maximize();
        await homepage.go_to_url(baseurl);
        await homepage.click_car_rentals_button();
    })

    it('Search for a location', async () => {
        await carrentalspage.enter_search_text('London');
        await carrentalspage.sleep(3);
        await carrentalspage.select_suggestion();
        await carrentalspage.open_calendar();
        await carrentalspage.enter_checkin_details();
        await carrentalspage.click_search_button();
    })

    it('Verify search results', async () => {
        expect(await carrentalssearchresultspage.get_top_results_seats()).to.include('seats');
        expect(await carrentalssearchresultspage.get_top_results_large_luggage()).to.include('Large bag');
        expect(await carrentalssearchresultspage.get_top_results_small_luggage()).to.include('Small bag');
        expect(await carrentalssearchresultspage.get_top_results_mileage()).to.be.equal('Unlimited mileage');
        expect(await carrentalssearchresultspage.get_top_results_price()).to.include('$');
    })
})