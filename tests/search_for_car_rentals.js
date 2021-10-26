const homepage = require('../pages/homepage');

describe('Search for car rentals', () => {

    after(() => {
        homepage.close();
    })

    it('enter search query', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.go_to_url(baseurl);
        await homepage.click_car_rentals_button();
    })
})