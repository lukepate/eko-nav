/* global define */
'use strict';


var scoreData = {
    node_02_a_679f75: 2,
    node_02_b_7b572c: 1,
    node_02_c_05201e: -2,
    node_02_d_f69448: -1,
    node_04_a_bc3fa7: 2,
    node_04_b_cd018a: 1,
    node_04_c_8f2932: -2,
    node_04_d_6db7ac: -1,
    node_06_a_cea0cf: 2,
    node_06_b_e0ca6f: 1,        
    node_06_c_40807a: -2,        
    node_06_d_4ac41e: -1,         
    node_08_a_05c50d: 2,
    node_08_b_a93629: 1, 
    node_08_c_194a59: -2, 
    node_08_d_3acbd3: -1, 
    node_10_a_b5030d: 2, 
    node_10_b_ba56c7: 1, 
    node_10_c_2fef34: -2, 
    node_10_d_9e452d: -1, 
    node_12_a_7f0707: 2, 
    node_12_b_1d2531: 1, 
    node_12_c_356fca: -2, 
    node_12_d_c2ca6d: -1
};
var truthOrLieData = {
    node_10_c_2fef34: 'lie',
    node_10_d_9e452d: 'lie',        
    node_10_a_b5030d: 'truth',        
    node_10_b_ba56c7: 'truth'
};


define(function() { return function(player) {
    // Visit https://developer.helloeko.com for detailed API documentation


    // Initialize a score numeric variable
    player.variables.register({
        name: 'score',
        action: 'sum',
        initialValue: 0,
        dataSet: scoreData,
    });


    // Initialize a truthOrLie variable
    player.variables.register({
        name: 'truthOrLie',
        action: 'set',
        initialValue: '',
        dataSet: truthOrLieData,
    });


    // Handle the "big moment" decision - should we go with MIKE or BLAKE?
    player.variables.connect({
        from: 'node_13_78422f',
        to: function(variables) {
            // NEUTRAL
            if (variables.score === 0) {
                return 'node_16_5afd74';
            }


            // BLAKE
            if (variables.score > 0) {
                return 'node_14_45b971';
            }


            // MIKE
            if (variables.score < 0) {
                return 'node_15_3453cb';
            }
        }
    });


    // Handle the MIKE TRUTH/LIE decision
    player.variables.connect({
        from: ['node_15_a_425666', 'node_15_b_30a1cd', 'node_15_c_fa34c7', 'node_15_d_15ef8c'],
        to: function(variables) {
            if (variables.truthOrLie === 'truth') {
                return 'node_15_f_497db9';
            }
            if (variables.truthOrLie === 'lie') {
                return 'node_15_g_60c2b0';
            }
        }
    });


    // Handle the BLAKE TRUTH/LIE decision
    player.variables.connect({
        from: ['node_14_a_f92ec7', 'node_14_b_14d1bb', 'node_14_c_a012b1', 'node_14_d_378353'],
        to: function(variables) {
            if (variables.truthOrLie === 'truth') {
                return 'node_14_f_841f25';
            }
            if (variables.truthOrLie === 'lie') {
                return 'node_14_g_f0ff4e';
            }
        }
    });


    // Handle the NEUTRAL TRUTH/LIE decision
    player.variables.connect({
        from: ['node_16_a_c4ceb2', 'node_16_b_1535ca', 'node_16_c_3891ff', 'node_16_d_5695f8'],
        to: function(variables) {
            if (variables.truthOrLie === 'truth') {
                return 'node_16_f_0f83e9';
            }
            if (variables.truthOrLie === 'lie') {
                return 'node_16_g_dc3221';
            }
        }
    });
};});