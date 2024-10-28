let js="amazing";
//if (js==="amazing"){
 // alert("javascipt is amazing");
  //console.log(23+23-26);
//}
//--------------VALUES AND VARIABLES---------------
let country="India";
let continent="Asia";
let population=4;
let firstName="Hanan";
let lastName="Mir";
console.log(country);
console.log(continent);
console.log(population);
console.log(firstName);
console.log(lastName);
//---------------DATA TYPES-------------------
let isIsland=false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
/** TYPE OF NULL SHOWN AS OBJECT IN JAVASCRIPT */
console.log(typeof null);
//-------------LET, CONST AND VAR--------------
language='chinese';
//const continent='Asia';
firstName="Rohan";
const nationality="Indian";
console.log(firstName);
console.log(nationality);
//----------BASIC OPERATORS--------------
population=population/2;
population=population++;
console.log(population);
population =40;
const populationFinland=6;
console.log(population>populationFinland);
const averagePopulation=33;
console.log(population<averagePopulation);
const description=country +' is in '+ continent +','+ ' and its '+ population+ ' million people speak '+ language +'.';
console.log(description);
//------------------------------CODING CHALLENGE 1--------------------------------------
let massMark;
let heightMark;
let massJohn;
let heightJohn;
let BMIMark,BMIJohn;
massMark=78
heightMark=1.69;
massJohn=92;
heightJohn=1.76;
BMIMark=massMark/(heightMark *heightMark);
BMIJohn=massJohn/(heightJohn*heightJohn);
console.log('BodyMass Mark :'+BMIMark +','+ ' BodyMass John :' +BMIJohn);
let markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);
//-------------------------TEMPLATE LITERALS--------------------------
const descriptionNew=`${country} is in ${continent}, and its ${population**3} million people speak ${language}`;
console.log(descriptionNew);
//-----------------------IF/ELSE STATEMENT-----------------------------------------------
if(population<33){
  console.log(`${country}'s population is ${(33-population)} below the national average, which is ${averagePopulation}`)
}
else{
  console.log(`${country}'s population is ${population-33} above the national average, which is ${averagePopulation}`)
}
// -----------------------CODING CHALLENGE 2--------------------------------
if(BMIMark>BMIJohn){
  console.log(`Mark's BMI is higher than John's!`)
}
else{
  console.log(`John's BMI is higher than Mark's!`)
}
// ------------------------TYPE CONVERSION AND COERCION----------------------------------
console.log('9' - '5');      //4
console.log('19'-'13' +'17');  //617
console.log('19'-'13' +17);  //23
console.log('123' <57);      //false 
console.log(5+6+'4'+9-4-2);  //1143
// -------------------------EQUALITY OPERATORS-----------------------------------------
// const numNeighbours=Number(prompt('How many neighbour countries does your country have?'));
// if(numNeighbours===1){
//   console.log('Only 1 border!')
// }
// else if(numNeighbours>1){
//   console.log('More than 1 border')
// }
// else{
//   console.log('No borders')
// }
//--------------------------LOGICAL OPERATORS------------------------------
if(language==='english' && population<50){
  console.log(`you should live in ${country} :)`)
}
else{
  console.log(`${country} does not meet your criteria :(`);
}
//---------------------------CODING CHALLENGE 3---------------------------------
const scoreDoplhins=(97+112+101)/3;
const scoreKoalas=(109+95+106)/3;
const minimumScore=100;
if(scoreDoplhins>scoreKoalas && scoreDoplhins >=minimumScore){
  console.log('Dolphins whin the trophy')
}
else if(scoreDoplhins<scoreKoalas && scoreKoalas >=minimumScore){
  console.log('Koalas win the trophy');
}
else if(scoreDoplhins===scoreKoalas && scoreKoalas>=minimumScore && scoreDoplhins >=minimumScore){
  
  console.log('Both win the trophy')
}
else{
  console.log('No one wins the trophy!!!!!!!');
}
//--------------------------SWITCH CASE------------------------------------------------------------------------ 
switch(language){
  case 'chinese':
    case 'mandarin':
      console.log('Most number of native speakers!');
      break;
      case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
        case 'english':
          console.log('3rd place in number of speakers');
          break;
          case 'hindi':
            console.log('Number 4');
            case 'arabic':
              console.log('5th mose spoken language')
              break;
              default:
                console.log('Great language too :D')
}
//-------------------------CODING CHALLENGE 4-----------------------------------------
let tip;
const billValue=275;
const billPrint=billValue>=50 && billValue<=300 ? `The bill was ${billValue}, the tip was ${tip=0.15*billValue} and the final value ${tip+billValue} Part I`:`The bill was ${billValue}, the tip was ${tip=0.20*billValue} and the final value${tip+billValue} Part II `;
console.log(billPrint);