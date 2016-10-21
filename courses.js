// import UVAcourses from data;


// pass in html to add to page
// return element containing new HTML
function addHtmlToPage(htmlString){
	// document.getElementById('target').innerHTML = UVAcourses;

	var target = document.getElementById('target');
	target.innerHTML = UVAcourses;
	return target;
}
var target = addHtmlToPage();

// pass in html element containing data
// return nodelist of courses
function getCourseNodeList(tag){
	var nodeList = document.getElementsByClassName(tag);
	return nodeList;
}
var nodeList = getCourseNodeList('CourseName');

// pass in nodelist of courses
// return array of courses
function nodeListToArray(nodeList){
	var list = Array.prototype.slice.call(nodeList);
	return list;
}
var newlist = nodeListToArray(nodeList);

// pass in array of courses
// return course titles
function getTitles(list){
	var titles = list.map(function(node){
	return node.innerText;
	});
	return titles;
}
var titles = getTitles(newlist);

// pass in course titles
// return words
// filter out punctuation/numbers, make words array
function scrubTitles(titles){
	var words = titles.map(function(node){
		return node.toLowerCase().match(/([a-z]+)/g);
	});
	return words;
}

var words = scrubTitles(titles);

// pass in words array
// return flat words array
// flatten the 2D words array
function flattenArray(words){
	var wordsFlat = words.reduce(function(previous, current){
		return previous.concat(current);
		});
	return wordsFlat;
}

var wordsFlat = flattenArray(words);

// pass in the flat words array
// return word scores
// count the word frequency
function scores(wordsFlat){
var wordScores = wordsFlat.reduce(function(previous,current){
	if (current in previous){
		previous[current] += 1;
	}
	else{
		previous[current] = 1;
	}
	return previous;
	}, {});
	return wordScores;
}

var wordScores = scores(wordsFlat);

