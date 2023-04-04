export async function GET(request: Request) {
  // Connect to out MS Azure Function endpoint
  console.log ( "  🌵🌵 API Called GET..")
  const response = await fetch("http://127.0.0.1:7071/api/getChatGPTSuggestion2"
    ,
    {
      cache: "no-store",
    }
    )
    .then ( r => {
      console.log (" ✅✅"+r);
      return r;
    })
    .catch ( e => { 
      console.log (" ❌❌"+e);
    } );

  
  const textData = await response?.text();
  console.log ( "  🌵🌵 🌵 API Called GET.." + textData);
  return new Response(JSON.stringify( textData.trim()), {
    status: 200,
  })
}
