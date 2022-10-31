////////////////////////////Question 1/////////////////////////
let submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true},];

//////////////////////////Question 2///////////////////////////

    function addSubmission (array, newName, newScore, newDate){
        
        let newSubmission = {

        name: newName,
        score: newScore,
        date: newDate,}

        newSubmission.score >+ 60 ? newSubmission.passed = true : newSubmission.passed = false;
        
        array.push(newSubmission);
        console.log(array);
    }
        
    addSubmission(submissions, "Sally", 40, "2020-01-01");

//////////////////////////////Question 3//////////////////////////////

    function deleteSubmissionByIndex(array, index){
            array.splice(index, 1);
            console.log(array);
        }
    
    

    deleteSubmissionByIndex(submissions, 0);

//////////////////////Question 4////////////////////////
function deleteSubmissionByName (array, name){
    let objectWithIndex = array.findIndex((object) => object.name === name);
    array.splice(objectWithIndex, 1);
    console.log(array);
}



deleteSubmissionByName(submissions, "Jane");

/////////////////Question 5////////////////////////
function editSubmission(array, index, score){
    //splice(start, deleteCount, item1)
    array.splice(index, 0, array.score);
    // if(score >= 60){
    //     array.splice(array.passed, 1, true);
    // }
    // else{array.splice(array.passed, 1, false)}
    console.log(array);
}


editSubmission(submissions, 1, 40);

////////////////////Question 6/////////////////
function findSubmissionByName(array, name){
    let foundObject = array.find(element => name === name)
    return foundObject;
    }


findSubmissionByName(submissions, "Jane");

/////////////////Question 7////////////////
function findLowestScore(array){
    let lowestScore = array.forEach((object) => {
        console.log(object.score);
        return object.score;
    })
}

findLowestScore(submissions);

////////////////////Question 8//////////////////
function findAverageScore(array){
    let totalScore = 0;
    for (let object of array){
        totalScore += object.score;
    }
    let average = totalScore / array.length;
    // console.log(average);
    return average;
}

findAverageScore(submissions);

/////////////////////Question 9/////////////////
function filterPassing(array){
    let results = array.filter(object => object.passed === true);
    // console.log(results);
    return results;
}

filterPassing(submissions);

//////////////////Question 10//////////////////
function filter90AndAbove(array){
    let results = array.filter(object => object.score >= 90);
    // console.log(results);
    return results;
}

filter90AndAbove(submissions);




//////////////EXTENDED CHALLENGES/////////////////
////////////Question 1///////////////////
function createRange(start, end){
    let newArray = [];
    for( let i = start; i <= end; i++){
        newArray.push(i);
    }
    console.log(newArray);
}

createRange(2, 9);



