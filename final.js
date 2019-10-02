// create const array of student objects which use name property to store name of student and scores property to store scores
const studentScores = [
    {
      name: 'Neville Longbottom',
      scores: [90, 95, 100, 95, 100]
    },
    {
      name: 'Hermione Granger',
      scores: [100, 100, 100, 100, 100]
    },
    {
      name: 'Ron Weasley',
      scores: [70, 60, 45, 80, 75]
    },
    {
      name: 'Harry Potter',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Draco Malfoy',
      scores: [90, 85, 70, 85, 90]
    },
    {
      name: 'Padma Patil',
      scores: [95, 100, 100, 95, 100]
    },
    {
      name: 'Terry Boot',
      scores: [95, 90, 100, 95, 100]
    },
    {
      name: 'Ernie Macmillan',
      scores: [90, 85, 100, 85, 90]
    },
    {
      name: 'Lavender Brown',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Zacharias Smith',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Gregory Goyle',
      scores: [0, 45, 30, 35, 20]
    },
  ]

// create variable to be used for page header

  const pageHeader = 'Professor Sprouts Passing Students';


  // create function that finds average of students scores
function findAverages(student) {

    let total = 0;
    let average = 0;
  // iterate through students each score and add to total
    student.scores.forEach( score => {
        total += score;
        
    });
  // find score average by dividing score total by number of scores
    average = total / student.scores.length;
  // return new student object array replacing scores property with score being average of previous scores
    return {
      name: student.name,
      score: average,
    }
    
}

  // function that creates a new array of student objects who have an average score of 90 or greater and is sorted alphabetically by name
function createArrayOfPassingStudents(studentAverages){
    return studentAverages.filter(function( student ) {
        return student.score >= 90;
    }).sort((a, b) => (a.name > b.name) ? 1 : -1)
}

// turn the array of passing students into a `li` string for HTML
function turnArrayIntoLi(passingStudents) {

  return `<li>${passingStudents.name}</li>`;
}

// create array of student score averages

const studentScoresAverage = studentScores.map(findAverages);

// create array of students who passed (averaged 90 or higher) in alphabetical order

const studentScoresPassing = createArrayOfPassingStudents(studentScoresAverage);

// combine all passing students into single `li` string to be used for HTML

const studentScoresPassingLi = studentScoresPassing.map(turnArrayIntoLi).join('\n');

// set main 'passing-students' element to display `li` of passing students
// set h2 element to display page heading
document.querySelector('.passing-students').innerHTML = studentScoresPassingLi;
document.querySelector('.page-header').innerHTML = pageHeader;

