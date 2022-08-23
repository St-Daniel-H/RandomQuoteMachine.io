function App(){ 

    const array=[
        {text:"Fortune favors the bold.", author: "Virgil"},
        {text:"I think, therefore I am", author: "René Descartes"},
        {text:"Life is what happens when you’re busy making other plans.", author: "John Lennon"}
    ];
   const randomIndex = (theArray) => {
       return  Math.floor(Math.random() * theArray.length);
   }
   const handleDuplicate = (currentQuote)=>{
    let newQuote = array[randomIndex(array)];
    if(currentQuote.text === newQuote.text){
        handleDuplicate(quote);
    }else{
        setQuote(newQuote);
    }
   }
   const [quote,setQuote]= React.useState(array[randomIndex(array)]); 

   const handleNewQuote = () =>{
        handleDuplicate(quote);
    }
  

    return (
        <div>
            <div id="Author"><h1>{quote.author}</h1></div>
            <div id="text"><p>{quote.text}</p></div>
            <div id="action">
                <a class="button" role="button"  id="tweet-quote"
                  href="https://twitter.com/intent/tweet">
                    tweet
                </a>
                <a class="button" role="button" onClick={handleNewQuote}  id="new-quote">New Quote</a>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#quote-box"))