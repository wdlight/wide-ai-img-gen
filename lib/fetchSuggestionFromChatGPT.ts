const fetchSuggestionFromChatGPT = () => (
  fetch( "/api/suggestion", {
    cache: "no-store",
  }).then( (res)=> 
      // {
      // console.log ( " 🎪🎪 fetchSuggestionFromChatGPT ")
      // console.log ( res.json() )
      // return res.json()}
      res.json()
    )
);

export default fetchSuggestionFromChatGPT;
