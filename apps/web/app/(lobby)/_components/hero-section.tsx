import React from "react";
import { SparklesCore } from "@/components/landing-page/hero";
import  Particles  from "@repo/ui/components/particels";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center">
      {/* <HeroParallax products={products} /> */}
      <div className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
        Vision Catalog
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    
    </section>
  );
};
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

// <div className="grid gap-6 items-center">
//   <div className="flex flex-col justify-center space-y-8 text-center">
//     <div className="space-y-2">
//       {/* todo: use taiwind variables instead fo hard coded colors */}
//       <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
//         Digitization of Catalogs for Sellers
//       </h1>
//       <p className="max-w-[600px] text-muted-foreground mx-auto ">
//         Headache-Free Application for Sellers: Embracing the Automated
//         Filled Details of Seller's Product.
//       </p>
//     </div>
//     <div className="w-full max-w-full space-y-4 mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
//           <div className="p-2 bg-background  bg-opacity-50 rounded-full">
//             <Icons.billing />
//           </div>
//           <h2 className="text-base md:text-xl font-bold text-white">
//             Modern Catalogs
//           </h2>
//           <p className="text-sm md:text-base text-muted-foreground">
//             Seamless start with minimal setup for Turborepo powered with
//             Prisma, TRPC, Next.js, App Router, easy server-side
//             rendering, and Shadcn UI.
//           </p>
//         </div>
//         <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
//           <div className="p-2 bg-background  bg-opacity-50 rounded-full">
//             <Icons.check />
//           </div>
//           <h2 className="text-base md:text-xl font-bold text-white">
//             Type Safety & Auto-completion
//           </h2>
//           <p className="text-sm md:text-base text-muted-foreground">
//             {`Type safe development, streamlined workflow via TurboRepo,
//             and TypeScript's and TRPC and Zod for extreme type safety
//             assurance.`}
//             {/* ' is not allowed by eslint */}
//           </p>
//         </div>
//         <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
//           <div className="p-2 bg-background  bg-opacity-50 rounded-full">
//             <Icons.wallet />
//           </div>
//           <h2 className="text-base md:text-xl font-bold text-white">
//             Scalable & Secure Web Apps
//           </h2>
//           <p className="text-sm md:text-base text-muted-foreground">
//             Building secure, scalable web apps with modern tech, like
//             TypeScript, Zod, TRPC, ensuring reliability and performance.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="flex justify-center mt-8">
//   <Button asChild size={"lg"} className="text-xl" variant={"default"}>
//     <Link href={"/create"}>Start Creating, its free</Link>
//   </Button>
// </div>
