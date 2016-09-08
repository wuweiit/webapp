/**
 *
 * Home 主页 模块
 *
 * @author marker
 * @date 2016-06-05
 */
define(['app','css!./app.css'], function (app) {//加载依赖js,
	var callback = ["$scope", function ($scope) {

		$( "div[data-role='navbar']"  ).navbar({
		});
		$( "div[data-role='header']" ).toolbar({

		});
		$( "div[data-role='footer']" ).toolbar({

		});
		$( "div[data-role='listview']" ).listview({
		});

		 
		 
    }];
	
	
	app.controller('IndexController', callback ); 
	return callback;
});