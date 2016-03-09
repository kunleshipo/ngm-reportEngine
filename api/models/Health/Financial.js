/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	// connection
	connection: 'ngmHealthClusterServer',

	// strict schema
	schema: true,

	// attributes
	attributes: {
		username: {
			type: 'string',
			required: true
		},		
		organization_id: {
			type: 'string',
			required: true
		},
		project_id: {
			type: 'string',
			required: true
		},
		expenditure_item: {
			type: 'string',
			required: true
		},
		expenditure_name: {
			type: 'string',
			required: true
		},		
		expenditure_status: {
			type: 'string',
			required: true
		},		
		expenditure_budget:{
			type: 'integer',
			defaultsTo: 0			
		},
		expenditure_start_date: {
			type: 'date',
			required: true
		},
		expenditure_end_date: {
			type: 'date',
			required: true
		}

	}

};

