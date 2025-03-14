// ==UserScript==
// @name         GitHub Double-Click-to-Edit
// @namespace    https://github.com/xingtong-jiang
// @version      1.0
// @description  Double-click anywhere in your GitHub comments to quickly edit them.
// @match        https://github.com/*/*/issues/*
// @match        https://github.com/*/*/pull/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('dblclick', function(e) {
        const markdownBody = e.target.closest('.markdown-body');
        if (!markdownBody) return;

        const commentContainer = markdownBody.closest('.Box-sc-g0xbh4-0.crMLA-D');
        if (!commentContainer) return;

        const kebabButton = Array.from(commentContainer.querySelectorAll('button')).find(btn => {
            return btn.querySelector('svg.octicon-kebab-horizontal');
        });

        if (!kebabButton) return;

        kebabButton.click();

        const clickEditButton = () => {
            const editBtn = Array.from(document.querySelectorAll('.prc-ActionList-ItemLabel-TmBhn'))
                .find(el => el.textContent.trim() === 'Edit');
            if (editBtn) {
                editBtn.click();
                return true;
            }
            return false;
        };

        setTimeout(() => {
            if (!clickEditButton()) {
                setTimeout(clickEditButton, 400);
            }
        }, 100);
    });
})();
