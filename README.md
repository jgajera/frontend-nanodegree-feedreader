# Project Overview
In this project, I was given a web-based application that reads RSS feeds.

The original developer of this application already included [Jasmine](http://jasmine.github.io/) and started their first test suite. I had to thoroughly gain an understanding of the application to write several test suites (requirements outlined [below](#miscnotes)).

This project primarily makes me practice test-driven development, where I write tests that fail first and code features that pass the initial test requirements.

## Table of Contents

* [Instructions](#instructions)
* [Resources](#resources)
* [Contributing](#contributing)
* [Authors](#authors)
* [Miscellaneous Notes](#miscnotes)

## Instructions
To get a copy of this repo, please follow these instructions:
### Prerequisites
You'll want `git` installed on your machine. For help setting up `git`, follow instructions from [this free course from Udacity](https://www.udacity.com/course/version-control-with-git--ud123). Also, familiarity with HTML, CSS, and Javascript will set you up for success.
### Installation/Running Jasmine
Fork this repo into your own account. If you'd prefer not to fork / you're not comfortable with Github:

(1) Clone with SSH to your local machine (just copy this into your terminal after you've changed the terminal's directory to the spot where you want to download these files)
```
git@github.com:jgajera/frontend-nanodegree-feedreader.git
```
(1) OR clone with HTTPS to your local machine (just copy this into your terminal after you've changed the terminal's directory to the spot where you want to download these files)
```
https://github.com/jgajera/frontend-nanodegree-feedreader.git
```
(2) Navigate to the folder you indicated in the terminal. If you didn't change folders in the terminal (with the `cd` command, usually), then your files are probably in one of your top-level computer files, like User -> You -> Somewhere in here.

(3) Open index.html to view the Jasmine pass/fail results.

(4) Find Jasmine test suite file in /jasmine/spec/feedreader.js

### Was it successful?
You should see all of the files from the [Github repo](https://github.com/jgajera/frontend-nanodegree-feedreader) in your folder system on your local computer! If not, please raise an [issue](https://github.com/jgajera/frontend-nanodegree-feedreader/issues) - you likely have a problem with your Git or Github configuration.

## Resources
I used the following resources:
- The [Jasmine Javascript library](https://jasmine.github.io/) was used in this project to write test suites and ensure our application is working as expected.
- Also spent a lot of time getting familiar with [Jasmine's API documentation](https://jasmine.github.io/pages/docs_home.html).
- jQuery was included in this project.
- Handlebars.js was also included in this project.
- Google's JSAPI came bundled in this project.
- The following Google font was used in this project: Roboto

## Contributing
Not accepting contributions! Feel free to open an issue if you find one. Thanks!

## Authors
- Several instructors from Udacity provided the starter code in the [Udacity repo](https://github.com/udacity/frontend-nanodegree-feedreader)
- Me! If I do say so myself ;-)

## MiscNotes
This project is based on the starter code from Udacity FEND's repo for this project. 

Here is the [rubric for this project](https://review.udacity.com/#!/projects/3442558598/rubric), and some specific instructions from Udacity:
```
1. Review the functionality of the application within your browser.
2. Explore the application's HTML, CSS, and JavaScript to gain an understanding of how it works.
3. Explore the Jasmine spec file and review the Jasmine documentation.
4. Edit the `allFeeds` variable to make the provided test fail and see how Jasmine visualizes this failure in your application.
5. Return the `allFeeds` variable to a passing state.
6. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
7. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
8. Write a new test suite named `"The menu"`.
9. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
10. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
11. Write a test suite named `"Initial Entries"`.
12. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
13. Write a test suite named `"New Feed Selection"`.
14. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
15. No test should be dependent on the results of another.
16. Callbacks should be used to ensure that feeds are loaded before they are tested.
17. Implement error handling for undefined variables and out-of-bound array access.
18. When complete - all of your tests should pass. 
19. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
```