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

    // test that ensures the menu element is hidden by default. 
    it('menu element hidden by default', function() {
      expect(bodyClass).toContain('menu-hidden');
    });
    /* test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * has two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    // set up variable that counts clicks on menu button
    let clickerCounter = 0;
    // increment clickerCounter var when menu button clicked
    document.querySelector('.menu-icon-link').addEventListener('click', function() {
      clickerCounter += 1;
      console.log(clickerCounter);
    });
    // test 
    it('menu changes visibility when toggled', function() {
      if (clickerCounter % 2 === 1) {
        // if counter was clicked an odd
        // number of times, menu should be visible
        expect(bodyClass).not.toContain('menu-hidden');;
      } else {
        // else, if counter not clicked or clicked an even
        // number of times, menu should be hidden
        expect(bodyClass).toContain('menu-hidden');
      }
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

  });

  /* Fourth test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
  });

}());