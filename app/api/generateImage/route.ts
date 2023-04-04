import { NextResponse } from "next/server";


export async function POST(request: Request) {
  // Connect to out MS Azure Function endpoint
  const res = await request.json();
  const prompt = res.prompt;

  console.log ( "  🌵🌵 generate image API Called GET..")
  //const response = await fetch("/api/generateImage",    
  const response = await fetch("http://127.0.0.1:7071/api/generateImage",    
  
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {prompt}),       
    }
    )
    // .then ( r => {
    //   console.log (" ✅✅"+r);
    //   return r;
    // })
    // .catch ( e => { 
    //   console.log (" ❌❌"+e);
    // } );

  
  const textData = await response.text();
  return NextResponse.json( textData);

  // console.log ( "  🌵🌵 🌵 API Called GET.." + textData);
  // return new Response(JSON.stringify( textData.trim()), {
  //   status: 200,
  // })
}
