function generatecomputerchoice(){
  let randomnumber = Math.random()*3;
  if(randomnumber>0 && randomnumber<=1){   
    return 'Bat';
  }
  else if(randomnumber>1 && randomnumber<=2){
    return 'Ball';
  }
  else{
    return 'Stump';
  }
  }  
  function getresult(usermove,computermove){
    if(usermove==='Bat'){
      if(computermove==='Ball'){
        return 'User Won';
      }
      else if(computermove==='Bat'){
        return 'Game Is Tie';
      }
      else if(computermove==='Stump'){
        return 'Computer Won'
      }
    }
    else if(usermove==='Ball'){
      if(computermove==='Ball'){
        return 'Game is Tie';
      }
      else if(computermove==='Bat'){
        return 'Computer Won';
      }
      else if(computermove==='Stump'){
        return 'User Won';
      }
    }
    else if(usermove==='Stump'){
      if(computermove==='Ball'){
        return 'Computer Won';
      }
      else if(computermove==='Bat'){
        return 'User Won';
      }
      else if(computermove==='Stump'){
        return 'Game is Tie';
      }
    }
  }
  function showresult(usermove,computermove,result){
    alert(`You have chosen ${usermove}.Computer have chosen ${computermove}.${result}`);
  }