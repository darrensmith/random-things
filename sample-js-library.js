/* 
	====================================

	Javascript Module Skeleton
	Message Container

	====================================
*/

"use strict";

(function(){

	/*
		============================
		Initialise module definition
		============================
	*/
	var moduleDefinition = {
		name: 'messages',
		version: '1.0',
		author: 'Darren Smith'
	};


	/*
		==========================
		Initialise module skeleton
		==========================
	*/
	var root = this;
	var previous_myModule = root.myModule;
	var myModule = function() {};
	myModule.noConflict = function() {
	  root.myModule = previous_myModule;
	  return myModule;
	}

	/*
		===============================
		Implement module business logic
		===============================
	*/

	myModule.messageContainer = function(message){
		this.message = message;
	};

	myModule.messageContainer.prototype.displayMessage = function(){
		alert(this.message);
	}


	/*
		===============================================
		Expose Module to Browser Window, NodeJS and AMD
		===============================================
	*/
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = myModule;
	} else {
		if (typeof define === 'function' && define.amd) {
			define([], function() {
				return myModule;
			});
		} else {
		  this[moduleDefinition.name] = myModule;
		}
	}

}).call(this);



/*
	===========================================================
	Instantiate Library Resource and Execute Function (Example)
	===========================================================
*/
var msgContainer = new messages.messageContainer("Hello");
msgContainer.displayMessage();