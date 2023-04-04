'use client'

import Image from "next/image";
import useSWR from "swr";
import fetchImages from "../lib/fetchImages" ;
import { SpinningCircles } from 'react-loading-icons'

function Images() {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR( "images", fetchImages, {
    revalidateOnFocus: false,
  })

  console.log ( images?.imageUrls?.map ( img => img.url ));
  return (
    <div>
      <button onClick={ () => refreshImages(images)}
        className="fixed bottom-10 right-10 bg-violet-400/90 text-white 
        px-5 py-3 rounded-md
        hover:bg-violet-500 focus:outline-none focus:ring-20
        focus:ring-violet-400 font-bold z-20"
      >
        {!isLoading && isValidating ? "Refreshing" : " Refresh Images"}
      </button>
      {
        isLoading && (
          <p className="animate-pulse text-center pb-7 font-extralight">
            Loading <span className="text-violet-400"> AI</span> Generated Images..<SpinningCircles />

          </p>
        )
      }
      <div className="grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
        {images?.imageUrls?.map((image: ImageType,  i: number) => (
          <div key={image.name}
            className={`relative cursor-help 
            ${i === 0 && "md:col-span-2 md:row-span-2" }
            hover:scale-[103%] transition-transform duration-200
            ease-in-out
            `}
          >
            <div 
              className="absolute flex justify-center items-center w-full h-full bg-white opacity-0
                hover:opacity-80 transition-opacity duration-200 z-10"
            >
              <p>
                {/* The removes the Timestamp and File extension */}
                {image.name.split("_").shift()?.toString().split(".")}
              </p>
            </div>
            <Image 
              src={image.url}
              alt={image.name}
              height={800}
              width={800}
              className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"

            />
          </div>
        ) ) }
      </div>
    </div>
  )
}

export default Images
