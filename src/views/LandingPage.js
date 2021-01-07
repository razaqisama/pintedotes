import {Link} from 'react-router-dom'

function Home () {
  return (
    <div class="w-full h-full">
      <div class="flex bg-white h-screen">
          <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                  <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Pin Your <span class="text-indigo-600">HEROES</span></h2>
                  <p class="mt-2 italic text-sm text-gray-500 md:text-base">When the Mad Moon tore asunder, and the Ancients plunged to earth, splinters of the Nemesis Stones lay fallen to be found by anyone who had the fortune (whether this proved good or ill).</p>
                  <p class="italic text-sm text-gray-500 md:text-base">
                  The Demon-Smith Abzidian laid claim to two such fragments, and from them forged the Demon's Edge: Her blade a singing shard of Radiant ore, her hilt of Direstone cunningly carved. But once the weapon was complete, he learned to his chagrin that only a Hero can handle her. In testing her edge, the Demon-Smith Abzidian slew himself! </p>
                  <p class="italic text-sm text-gray-500 md:text-base">
                  Since that day, Demon Edge has passed from hand to hand, though only a hero may carry her for long. For in this single weapon, the warring Ancients vie. </p>
                  <p class="italic text-sm text-gray-500 md:text-base">What lesser mortal can hope to wield such power?</p>
                  <div class="flex justify-center lg:justify-start mt-6">
                      <Link to="/heroes" class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">To The War
                      </Link>
                  </div>
              </div>
          </div>
          <div class="hidden lg:block lg:w-1/2">
              <div class="h-full object-cover">
                  <div class="h-full bg-black">
                    <img class="object-contain h-full w-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c427064-866e-4283-aa2a-c4d211bf664a/d8bn2xw-7e8bc24f-9911-4934-ab30-fd77b333baba.jpg/v1/fill/w_1600,h_901,q_75,strp/dota_2___templar_assassin_loading_screen_by_trungth_d8bn2xw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDEiLCJwYXRoIjoiXC9mXC8wYzQyNzA2NC04NjZlLTQyODMtYWEyYS1jNGQyMTFiZjY2NGFcL2Q4Ym4yeHctN2U4YmMyNGYtOTkxMS00OTM0LWFiMzAtZmQ3N2IzMzNiYWJhLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uJai8fQB7HWTT1Dy-BdY8NKk76TIrsLG9Pi895OtSgw"></img>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home;