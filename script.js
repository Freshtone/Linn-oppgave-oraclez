const everythingButNothingArray = ["42", "Sometimes a potato can look obselete, but when looking at a cucumber it can look delicious", "I always enjoyed that question, but currently i dont know how to answer that...", "Did you know that i can answer any question you ask?", "This is not something i can compute correctly and thusly there is no answer for it", "Do you always ask such silly questions?", "It's the fine balance of caffeine and alcohol that bookends my days"];

const whoArray = ["That bitch, Carole Baskin", "The president of the United States of America", "Probably you", "Definatly Terje", "Sometimes i like to think it was the worthy ones", "Team 3 obviously!"];

const whatArray = ["Whatever bitch", "Nothing is relevant", "Your face", "Does it look like i know that?", "Its obviously something you know better than me", "Again, i might have said this but i think it is 42..."]

const whyArray = ["Because she wanted too", "Due to the fact you have to ask a computer that question its obvious that you are a little off center", "Why does your face?", "why yourself ! ", "Please just dont ask such silly questions...", "Computer says no"]

const whenArray = ["I think that happened around 1964", "About the time you finish reading this answer...", "Sometime in the near future", "Whenever i can get out of here"]

const howArray = ["By doing unspeakable things", "Just look into the sun on a bright summers day and youll see...", "how so?", "Not being rude but i think you already know that"]

const whereArray = ["At your house", "Behind the bleachers at your school", "Under your chair", "Deep in the forrest of Schwarzstor", "Thats what she said..."]


// arrays = {
//     who = ["That bitch, Carole Baskin", "The president of the United States of America"]
//     what = ["Whatever bitch", "Nothing is relevant"]
// }

// function randomArrayEditor(arrays) {
//     const index = Math.floor(Math.random()*arrays.length);
//     return arrays[index];

// }
function rndmTest() {
    var textvalue = document.getElementById('textInput').value;
    var exitOut = document.getElementById("divOutput");
    let randomArray = everythingButNothingArray[Math.floor(Math.random()*everythingButNothingArray.length)];
    let randomArrayWho = whoArray[Math.floor(Math.random()*whoArray.length)];
    let randomArrayWhat = whatArray[Math.floor(Math.random()*whatArray.length)];
    let randomArrayWhy = whyArray[Math.floor(Math.random()*whyArray.length)];
    let randomArrayWhen = whenArray[Math.floor(Math.random()*whenArray.length)];
    let randomArrayHow = howArray[Math.floor(Math.random()*howArray.length)];
    let randomArrayWhere = whereArray[Math.floor(Math.random()*whereArray.length)];
    
    var watch_words = ['who', 'what', 'why', 'when', 'how', 'where'];

    for(var i=0; i<watch_words.length; i++) {

        if (~textvalue.indexOf(watch_words[i])){
    
          if(watch_words[i] == 'who'){
            return exitOut.innerHTML = randomArrayWho;
          }
          
          else if(watch_words[i] == 'what'){
            return exitOut.innerHTML = randomArrayWhat;
          }
          
          else if(watch_words[i] == 'why'){
            return exitOut.innerHTML = randomArrayWhy;
          }

          else if(watch_words[i] == 'when'){
            return exitOut.innerHTML = randomArrayWhen;
          }

          else if(watch_words[i] == 'how'){
            return exitOut.innerHTML = randomArrayHow;
          }

          else if(watch_words[i] == 'where'){
            return exitOut.innerHTML = randomArrayWhere;
          }

        } else {     

            document.getElementById("divOutput").innerHTML = randomArray; 
            document.getElementById("textInput").value = '';

        }   
      }
    }