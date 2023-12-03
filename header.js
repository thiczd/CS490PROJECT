//this applies the header to each page

let appHeader = `
<head>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<div class="bg-gradient-to-r from-pink-400 to-orange-700 pb-0.5">

<nav class="flex flex-wrap w-full p-2 text-lg bg-gray-800 mx-auto border-b">
  <div class="max-w-screen-xl flex flex-wrap items-center m-auto">
      <span class="text-2xl font-semibold whitespace-nowra text-white transition ease-in-out delay-100 hover:scale-125 hover:cursor-default">OurApp</span>
  </div>

  <a href="./index.html" title="Go to homepage"
    class="m-2 py-2 px-2 hover:no-underline hover:border border-orange-400 rounded-md ">

    <div class="flex flex-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    
  </svg>
  <p class="font-bold mt-2 ml-2 text-white">Home</p>
    </div>
  
  </a>
  <a href="./reactionTimeTest.html" title="Play reaction time test"
    class="m-2 py-2 px-2 hover:no-underline hover:border border-orange-400 rounded-md">
    
    <div class="flex flex-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M12 10l0 3l2 0" />
    <path d="M7 4l-2.75 2" />
    <path d="M17 4l2.75 2" />
    </svg>
    <p class="font-bold mt-2 ml-2 text-white">Reaction Game</p>
    </div> 
    </a>


    
  <a href="./timerGuesser.html" title="Play timer guesser"
    class="m-2 py-2 px-2 hover:no-underline hover:border border-orange-400 rounded-md">
    
        <div class="flex flex-center">

    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-question" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M20.975 11.33a9 9 0 1 0 -5.717 9.06" />
    <path d="M12 7v5l2 2" />
    <path d="M19 22v.01" />
    <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />

    </svg>
    <p class="font-bold mt-2 ml-2 text-white">Time Guesser</p>


    </div>
    </a>
</nav>
</div>
`;
document.getElementById("app-header").innerHTML = appHeader;