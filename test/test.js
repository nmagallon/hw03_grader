var should = chai.should();

var data = UVAcourses;


// testing variables
var target   = null;
var nodeList = null;
var list     = null;
var titles   = null;
var words    = null;
var wordsFlat= null;
var wordScores   = null;


describe('Grader', function() {
    describe('1.125 HW 3 Testing', function() {

        it('target holding html should be a div', function() {
            target = addHtmlToPage(data);
            target.nodeName.should.equal('DIV');
        });

        it('nodelist - check length is greater than 200', function() {
            nodeList = getCourseNodeList('CourseName');
            nodeList.should.have.length.above(200);
        });

        it('nodelist - check length is greater than 200 alternate', function() {
            nodeList = getCourseNodeList('CourseName');
            nodeList.length.should.be.above(200);
        });

        it('array list check type', function() {
            list = nodeListToArray(nodeList);
            list.should.be.a('array');
        });

        it('titles should be an array of strings', function() {
            titles = getTitles(list);
            titles[0].should.be.a('string');
        });

        it('numbers and punctuation should be gone', function() {
            words = scrubTitles(titles);
            words[0].should.be.a('array');
        });        

        it('the array should be a flat array of strings', function() {
            wordsFlat = flattenArray(words);
            wordsFlat[0].should.be.a('string');
        });

        it('scores should be key value pairs', function() {
            wordScores = scores(wordsFlat);
            wordScores.into.should.be.a('number');
        });

    });
});




