/* 
	====================================

	Javascript Library Skeleton
	Message Container

	====================================
*/


/*
	============
	Core Library
	============
*/

"use strict";

(function(){

	/*
		============================
		Initialise module definition
		============================
	*/
	var moduleDefinition = {
		library: 'messages',
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
	myModule.loadPlugin = function(plugin){
		
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
		  this[moduleDefinition.library] = myModule;
		}
	}

}).call(this);



/*
	==============
	Library Plugin
	==============
*/


(function(){

	/*
		============================
		Initialise plugin definition
		============================
	*/
	var moduleDefinition = {
		library: 'messages',
		plugin: 'messagesAltDisplay',
		version: '1.0',
		author: 'Darren Smith'
	};

	/*
		===============================
		Implement plugin business logic
		===============================
	*/

	this.messages.messageContainer.prototype.altDisplayMessage = function(){
		alert('(Alternative) ' + this.message);
	}


}).call(this);



/*
	===================================================================
	Instantiate Library Resource, Plugin and Execute Function (Example)
	===================================================================
*/
var msgContainer = new messages.messageContainer("Hello");
msgContainer.altDisplayMessage();