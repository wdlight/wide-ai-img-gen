export async function GET(request: Request) {
  // Connect to out MS Azure Function endpoint
  console.log ( "  🌵🌵 API Called GET..")
  const response = await fetch("https://wide-ai-img-gen2.azurewebsites.net/api/getchatgptsuggestion2"
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
