// app.progress = (a,x) =>
//
//
// function progressBar(obj) {
// 	return {
//
// 		id: ( obj.id || null ),
//
// 		_progress: 0,
// 		_minorProgress: 0,
//
// 		$components: [
// 			{
// 				class: "progress",
// 				$components: [
// 					{
// 						role: "progressbar",
// 						class: "major progress-bar progress-bar-striped active"
// 					},
// 					{
// 						role: "progressbar",
// 						class: "minor progress-bar progress-bar-info progress-bar-striped active"
// 					}
// 				]
// 			},
// 		],
//
// 		_showMinorProgress: function () {
// 			this._minorProgress = this._minorProgress + 5;
// 			var remaining = 1000 - this._progress;
// 			if ( this._minorProgress > remaining ) {
// 				this._minorProgress = 0
// 			};
// 		},
//
// 		_setWidth: function ( widthRatio ) {
// 			this._progress = widthRatio * 1000;
// 			this._minorProgress = 0;
// 		},
//
// 		$update: (el) => () => {
// 			$(el).find(".major.progress-bar").css('width', (el._progress/10).toString() + '%');
// 			$(el).find(".minor.progress-bar").css('width', (el._minorProgress/10).toString() + '%');
// 		}
//
// 	}
// }
//
//
// _incrementProgress: function ( line ) {
//   if ( line == "Build Finished" ) {
//     installBuildProgress && installBuildProgress._setWidth(1);
//   } else if ( line == "Waiting for start" ) {
//     installBuildProgress && installBuildProgress._setWidth(0.95);
//   } else if ( line.match(/^Step \d+\/\d+/) ) {
//     var step = line.substring(5).split(" : ")[0].split("/");
//     installBuildProgress && installBuildProgress._setWidth( 0.1 + 0.8 * step[0] / step[1] );
//   } else {
//     installBuildProgress && installBuildProgress._showMinorProgress();
//   };
//
// }
