import { NextResponse } from "next/server";


export async function POST(request: Request) {
  // Connect to out MS Azure Function endpoint
  const res = await request.json();
  const prompt = res.prompt;

  console.log ( "  🌵🌵 generate image API Called GET..")
  //const response = await fetch("/api/generateImage",    
  //const response = await fetch("http://127.0.0.1:7071/api/generateImage",    
  
  const response = await fetch("https://wide-ai-img-gen2.azurewebsites.net/api/generateimage",    
  
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {prompt}),       
    }
    )
    
  
  const textData = await response.text();
  return NextResponse.json( textData);

  // console.log ( "  🌵🌵 🌵 API Called GET.." + textData);
  // return new Response(JSON.stringify( textData.trim()), {
  //   status: 200,
  // })
}
