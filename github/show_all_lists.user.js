// ==UserScript==
// @name         GitHub Auto Show All Lists
// @namespace    https://github.com/xingtong-jiang
// @version      1.0
// @description  Automatically clicks "Show all lists..." on the GitHub starred repositories page.
// @author       xingtong-jiang
// @match        https://github.com/*?tab=stars*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function clickShowAllLists() {
        const button = [...document.querySelectorAll('button')].find(
            btn => btn.textContent.trim() === "Show all lists..."
        );

        if (button) {
            console.log("Clicking 'Show all lists...' button...");
            button.click();
        } else {
            console.log("'Show all lists...' button not found, retrying...");
            setTimeout(clickShowAllLists, 50); // Retry after 50ms
        }
    }

    // Run after page load
    setTimeout(clickShowAllLists, 50);

})();
