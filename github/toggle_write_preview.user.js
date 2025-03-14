// ==UserScript==
// @name         GitHub Markdown Write/Preview Toggle
// @namespace    https://github.com/xingtong-jiang
// @version      1.0
// @description  Press Ctrl+Shift+X to quickly toggle Write/Preview mode when editing Markdown on GitHub issues.
// @match        https://github.com/*/issues/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'X') {
            const buttons = document.querySelectorAll('button[role="tab"].TabNav-item');
            const writeTab = Array.from(buttons).find(btn => btn.textContent.trim() === 'Write');
            const previewTab = Array.from(buttons).find(btn => btn.textContent.trim() === 'Preview');

            if (!writeTab || !previewTab) return;

            if (writeTab.getAttribute('aria-selected') === 'true') {
                previewTab.click();
            } else {
                writeTab.click();
            }

            e.preventDefault();
        }
    });
})();
