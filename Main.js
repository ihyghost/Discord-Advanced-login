// ==UserScript==
// @name Discord: Login and copy
// @author ihyghost
// @description 
// @version 1.0
// @match *://discord.com/*
// @run-at document-start
// @grant none
// @license N/A
// ==/UserScript==
/* jshint esversion:6 */

/*
    Author: ihyghost
    Github: None
    Discord: ihyghost
*/

(function() {
    "use strict";

    const log = console.log;

    const tokenInput = document.createElement("input");
    tokenInput.setAttribute("name", "token");
    tokenInput.setAttribute("placeholder", "Enter your Discord token");

    const loginButton = document.querySelector("button[name='login']");
    loginButton.appendChild(tokenInput);

    const copyTokenButton = document.createElement("button");
    copyTokenButton.textContent = "Copy token";
    copyTokenButton.addEventListener("click", () => {
        const token = document.querySelector("input[name='token']").value;
        navigator.clipboard.writeText(token);
    });

    document.querySelector(".settings").appendChild(copyTokenButton);
})();
