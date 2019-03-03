						data = [
							0,3,2,5,4,6,2,5,8,7,
							9,8,6,8,7,5,8,9,11,13,
							16,11,12,15,14,16,15,17,18,16,
							19,18,16,15,18,19,20,23,24,21,
							22,26,24,25,27,28,26,28,29,30,
							32,34,30,31,29,28,34,35,38,37,
							39,41,43,42,41,45,39,40,46,43,
							40,38,36,37,39,35,34,33,35,32,
							30,29,31,26,28,24,25,26,25,25,
							26,24,28,25,26,24,25,27,25,26,
							27,26,29,28,24,26,25,25,27,28,
							27,26,25,26,23,24,23,21,20,20
						];
						
						max = 100;
						
						// Turn the dataset into a stacked one
						data.forEach(function (v, k, arr)
						{
							arr[k] = [v, 2, max - v - 2];
						});
					
						bar = new RGraph.SVG.Bar({
							id: 'chart-container',
							data: data,
							options: {
							grouping: 'stacked',
								hmargin: .5,
								backgroundGridVlines: false,
								backgroundGridBorder: false,
								yaxis: false,
								xaxis: false,
								colors: ['Gradient(red:white)','yellow', '#eee'],
								xaxisLabels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
							}
						}).wave();
					