// This is where the results of scraping the House site will be formatted
var hRes = require('./houseResults.json');
// The information from comes back as an array with one object in it.
// The object has the keys billNumber, title, and pdfLink, each with an 
// array as values. 
// The arrays contain House Bill numbers, House Bill Titles, and links
// to download the full text of the Bill. Hence the naming conventions
// of the below variables.
var bills = hRes[0].billNumber;
var titles = hRes[0].billName;
var links = hRes[0].pdfLink;
// The formatted object will be what is returned, with all 
// House Bill information formatted into JSON
var formatted = {};

for (var i = 0; i < bills.length; i++) {
  formatted[bills[i]] = {};
  // In order to ensure that the correct download link goes to 
  // the correct bill, we must format the bill number and 
  // find that bill within the download url
  // removes all whitespace and non ascii alphanumberic characters from bill number
  var param1 = bills[i].replace(/[^a-zA-Z 0-9]+/g,'').replace(/[\s]/, '').toLowerCase().trim();
  var param2 = bills[i].replace(/[^a-zA-Z 0-9]+/g,'').replace(/[\s]/, '').toUpperCase().trim();
  // console.log('1', param1, '2', param2);
  for (var j = 0; j < titles.length; j++) {
    formatted[bills[i]].billName = titles[j];
  }
  for (var k = 0; k < links.length; k++) {
    if (links[k].indexOf(param1) !== -1 || links[k].indexOf(param2) !== -1) {
      formatted[bills[i]].downloads = links[k];
    }
  }

}
console.log('formatted', formatted);
