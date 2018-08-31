/* This is the spec file that Jasmine will read. It contains
 * all of the tests that will be run against the app.js file.
 */

/* We placed all of our tests within the $() function
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* First test suite - it's all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* first test - tests to ensure the allFeeds
     * variable has been defined and that it is not empty
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* test that loops through each feed in the allFeeds
     * object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URLs are defined and not empty', function() {
      for (let i = 0; i < allFeeds.length - 1; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toEqual("");
      }
    });

    /* test that loops through each feed in the allFeeds
     * object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('names are defined and not empty', function() {
      for (let i = 0; i < allFeeds.length - 1; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toEqual("");
      }
    });
  });

  /* Second test suite named "The menu" */
  describe('The menu', function() {
    const bodyClass = document.querySelector('body').classList;
    const bodySelector = document.querySelector('body');
    // define class selector so future dev can switch it out quickly
    let bodyMenuToggleClass = "menu-hidden";


    // test that ensures the menu element is hidden by default. 
    it('menu element hidden by default', function() {
      expect(bodyClass).toContain(bodyMenuToggleClass);
    });
    /* test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * has two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    let menuSelector = document.querySelector('.menu-icon-link');

    it('menu changes visibility when toggled', function() {
      menuSelector.click();
      expect(bodyClass).not.toBe(bodyMenuToggleClass);
      menuSelector.click();
      expect(bodyClass).toContain(bodyMenuToggleClass);
    });
  });


  /* Third test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      loadFeed(0, done); // before init
    });

    it('completes its work', function() {
      const feedLength = document.querySelectorAll('.feed .entry').length;
      expect(feedLength).toBeGreaterThan(0);
    });
  });

  /* Fourth test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    // create an empty array for current feed headlines
    const oldFeedArray = [];
    // create an empty array for new feed headlines
    const newFeedArray = [];

    beforeEach(function(done) {
      // load current/first feed
      loadFeed(0, function() {
        // grab all headlines and put into an array
        const oldEntryTitle = [...document.querySelectorAll('.entry h2')];
        // get array length to iterate over it
        const oldEntryTitleLength = oldEntryTitle.length;
        // push headline text into empty array
        for (let j = 0; j < oldEntryTitleLength; j++) {
          oldFeedArray.push(oldEntryTitle[j].innerHTML);
        }

        // load second/new feed
        loadFeed(2, function() {
          // grab new feed data for comparison
          const newEntryTitle = [...document.querySelectorAll('.entry h2')];
          // find new feed length to loop over it
          const newEntryTitleLength = newEntryTitle.length;
          // push new headline text into empty array 
          for (var i = 0; newEntryTitleLength > i; i++) {
            newFeedArray.push(newEntryTitle[i].innerHTML);
          }
          done();
        });

      });

    });

    it('changes content when new feed loads', function() {
      expect(oldFeedArray[0]).not.toEqual(newFeedArray[0]);
    });
  });

}());