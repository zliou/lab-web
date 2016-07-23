/*
 * File: script.js
 * Author: Zachary Liou
 * Date creatd: 2016 July 23
 * Description: JS file for lab-web
 */

 (function() {
 	"use strict";


	function buttonize() {
	 	var buttons = document.getElementsByClassName("button");

	 	for (var i = 0; i < buttons.length; ++i) {
	 		buttons[i].setAttribute("onmousedown", "pressButton");
	 		buttons[i].setAttribute("onmouseup", "releaseButton");
	 	}
	 }

	 function pressButton() {

	 }

	 function releaseButton() {
	 	
	 }

 })();