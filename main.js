
const arrayOfQuotes = [
  {'author': 'Oscar Wilde', 
   'quote': '“Be yourself; everyone else is already taken.”'
  },
  {'author': 'Albert Einstein', 
   'quote': '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”'
  },
  {'author': 'Frank Zappa', 
   'quote': '“So many books, so little time.”'
  },
  {'author': 'Marcus Tullius Cicero', 
   'quote': '“A room without books is like a body without a soul.”'
  },
  {'author': 'Nelson Mandela', 
   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },
];

function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
  
}
