const FOOD_DETAILS = {
  "Sushiro BIGBOX Takadanobaba": {
    type: "Conveyor sushi",
    description: "Easy, fun first-night Tokyo meal with tablet ordering, fast pacing, and family-friendly variety.",
    address: "BIGBOX Takadanobaba 9F, 1-35-3 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~3-5 min from Airbnb"
  },
  "Menyu Issei": {
    type: "Local ramen",
    description: "Authentic neighborhood ramen very close to the Takadanobaba base.",
    address: "3-13-3 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~6 min from Airbnb"
  },
  "Kitchen Tanizawa": {
    type: "Hamburg / yoshoku",
    description: "Retro Japanese western comfort food with hamburg steak.",
    address: "2-2-15 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~12 min from Airbnb"
  },
  "A5 Wagyu Hamburg Masuo": {
    type: "Wagyu hamburg",
    description: "Premium Japanese hamburg without reservation pressure.",
    address: "Nogiku Building 1F, 1-29-6 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~8 min from Airbnb"
  },
  "Brother Japanese curry": {
    type: "Japanese curry",
    description: "Hearty curry ideal for a recovery night.",
    address: "1F Tac Eleven Takadanobaba, 2-19-7 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~6-7 min from Airbnb"
  },
  "Convenience store dinner if arrival slips": {
    type: "Backup snacks",
    description: "Use only if immigration, transfer, or check-in timing runs late.",
    address: "Takadanobaba neighborhood convenience stores",
    travel: "Walk ~3-7 min from Airbnb"
  },
  "Chukasoba Katsumoto": {
    type: "Refined Tokyo-style shoyu ramen",
    description: "Polished ramen stop near Tokyo Dome that avoids a generic stadium lunch.",
    address: "2-15-5 Misakicho, Chiyoda City, Tokyo 101-0061",
    travel: "Walk ~5-10 min to Tokyo Dome"
  },
  "GENUINE BURGER Tokyo Dome City": {
    type: "Japanese gourmet burger",
    description: "Best sports-night atmosphere directly next to Tokyo Dome.",
    address: "Tokyo Dome City, 1-3-61 Koraku, Bunkyo City, Tokyo 112-0004",
    travel: "Walk ~3 min from Tokyo Dome"
  },
  "Hamburg Kiwamiya Tokyo Station": {
    type: "Japanese hamburg",
    description: "Interactive wagyu hamburg if you want a meat-focused option.",
    address: "Address not listed in the presentation; confirm Tokyo Station branch before trip.",
    travel: "Transit ~10-15 min from Dome area"
  },
  "Tokyo Niboshi Ramen Nagi Akihabara": {
    type: "Niboshi ramen",
    description: "Great fish-broth ramen if Akihabara happens after baseball.",
    address: "Address not listed in the presentation; confirm before trip.",
    travel: "Transit ~10 min from Tokyo Dome"
  },
  "Suidobashi Curry & Bar Largo": {
    type: "Japanese curry",
    description: "Curry option that fits Tokyo Dome geography.",
    address: "Address not listed in the presentation; confirm before trip.",
    travel: "Walk ~5-8 min from Tokyo Dome"
  },
  "5W Akihabara Beef Dining": {
    type: "Wagyu burger / hamburg",
    description: "Comfort-food option near an Akihabara evening flow.",
    address: "2F, 2-5-3 Taito, Taito City, Tokyo 110-0016",
    travel: "Transit ~10-15 min from Tokyo Dome"
  },
  "Shinjuku Food Tour": {
    type: "Guided food experience",
    description: "15 dishes across 4 eateries; this is the main lunch event.",
    address: "Shinjuku, Tokyo; exact meeting point from booking confirmation",
    travel: "Transit ~10-15 min from Airbnb"
  },
  "Gonpachi Nishiazabu": {
    type: "Izakaya / yakitori / soba",
    description: "Atmospheric iconic dinner after teamLab; treat as a curated light dinner after the food tour.",
    address: "1-13-11 Nishiazabu, Minato City, Tokyo 106-0031",
    travel: "Transit/taxi from Tokyo Tower or Toyosu"
  },
  "Cafe/rest buffer before dinner": {
    type: "Rest block",
    description: "Use this to protect energy before the 8:00 PM Gonpachi reservation.",
    address: "Nishiazabu / Roppongi area, route-dependent",
    travel: "Walk or short taxi depending on where you land"
  },
  "Conbini snack only if needed": {
    type: "Backup snack",
    description: "Use only if timing slips or kids need a small reset.",
    address: "Route-dependent convenience store",
    travel: "Walk; closest good option wins"
  },
  "Inside Tokyo DisneySea": {
    type: "Theme-park dining",
    description: "Simplest strategy to maximize ride time and energy.",
    address: "Tokyo DisneySea, 1-13 Maihama, Urayasu, Chiba 279-8511",
    travel: "Inside park"
  },
  "Theme-park quick service": {
    type: "Quick service",
    description: "Use quick meals instead of leaving the park or doing a long sit-down meal.",
    address: "Inside Tokyo DisneySea, 1-13 Maihama, Urayasu, Chiba 279-8511",
    travel: "Walk inside park"
  },
  "Mobile order lunch": {
    type: "Quick service",
    description: "Protects ride efficiency during the full park day.",
    address: "Inside Tokyo DisneySea, 1-13 Maihama, Urayasu, Chiba 279-8511",
    travel: "Walk inside park"
  },
  "Popcorn flavors": {
    type: "Snack",
    description: "Classic DisneySea snack strategy between rides.",
    address: "Inside Tokyo DisneySea, 1-13 Maihama, Urayasu, Chiba 279-8511",
    travel: "Walk inside park"
  },
  "Rakeru Shinjuku": {
    type: "Omurice / yoshoku",
    description: "Classic omurice comfort food after a long park day.",
    address: "B2F Shinjuku West Exit HALC, 1-5-1 Nishi-Shinjuku, Shinjuku City, Tokyo 160-0023",
    travel: "Transit ~15 min from base"
  },
  "Watanabe ramen": {
    type: "Rich ramen",
    description: "Comforting local ramen if everyone is exhausted after DisneySea.",
    address: "2-1-4 Takadanobaba, Shinjuku-ku, Tokyo 169-0075",
    travel: "Walk ~10 min from Airbnb"
  },
  "Kitchen Oh! Way": {
    type: "Hamburg / omurice",
    description: "Recovery-night Japanese western comfort food.",
    address: "Cosmos Higashi-Ikebukuro 102, 2-57-2 Higashi-Ikebukuro, Toshima City, Tokyo 170-0013",
    travel: "Walk ~10-12 min from Airbnb"
  },
  "Pneuma Curry": {
    type: "Japanese curry",
    description: "Low-energy curry option near base.",
    address: "Fujiso 1F, 1-17-10 Takadanobaba, Shinjuku City, Tokyo 169-0075",
    travel: "Walk ~8-10 min from Airbnb"
  },
  "Romancecar day; lunch flexible": {
    type: "Flexible strategy",
    description: "Hakone timing changes with weather and transit; food protects the return train.",
    address: "Route-dependent: Lake Ashi, Hakone-Yumoto, or Yunessun",
    travel: "Transit/walk depends on loop timing"
  },
  "Niku no Kinosuke": {
    type: "Wagyu / hamburg steak",
    description: "Best operational fit near Hakone-Yumoto before the return train.",
    address: "727-2 Yumoto, Hakone, Ashigarashimo District, Kanagawa 250-0311",
    travel: "Walk ~5-8 min near Hakone-Yumoto"
  },
  "Tokyo Sushi": {
    type: "Sushi",
    description: "Relaxed Hakone sushi that can fit return timing.",
    address: "Address not listed in the presentation; confirm before trip.",
    travel: "Taxi/bus ~10-15 min"
  },
  "Kobe Beef Yakiniku Bakatare": {
    type: "Kobe beef / yakiniku",
    description: "Premium meat-focused Hakone option if time is generous.",
    address: "Marushima Building 4F, 706 Yumoto, Hakone, Ashigarashimo District, Kanagawa 250-0311",
    travel: "Walk ~5-8 min near Hakone-Yumoto"
  },
  "Box Burger Hakone": {
    type: "Japanese gourmet burger",
    description: "Family-friendly western/Japanese comfort option.",
    address: "Address not listed in the presentation; confirm before trip.",
    travel: "Taxi/bus ~10-15 min"
  },
  "Bombay Central Hakone": {
    type: "Curry",
    description: "Comfort-food choice for cool or rainy weather.",
    address: "Address not listed in the presentation; confirm before trip.",
    travel: "Taxi/bus ~15-20 min"
  },
  "Yunessun ramen/curry": {
    type: "Onsen food",
    description: "Use if Yunessun becomes the recovery block.",
    address: "Hakone Kowakien Yunessun, 1297 Ninotaira, Hakone, Kanagawa 250-0407",
    travel: "Inside Yunessun"
  },
  "Nikuya Yokocho Udagawacho": {
    type: "All-you-can-eat wagyu yakiniku",
    description: "Memorable wagyu night after Kamakura, geographically optimized with Shibuya.",
    address: "2-29-13 Dogenzaka, Shibuya City, Tokyo 150-0043",
    travel: "Transit from Kamakura to Shibuya"
  },
  "Kamakura Matsubara-an": {
    type: "Soba / tempura",
    description: "Excellent Kamakura soba and tempura experience if a sit-down lunch fits.",
    address: "4-10-3 Yuigahama, Kamakura, Kanagawa",
    travel: "Walk/local transit depending on Kamakura route"
  },
  "Tonkatsu Komachi": {
    type: "Tonkatsu",
    description: "Strong comfort-food lunch option near Komachi.",
    address: "Kamakura area near Komachi Street; exact storefront address should be confirmed before trip.",
    travel: "Walk near Komachi Street"
  },
  "Giraffa curry bread": {
    type: "Curry bread",
    description: "Famous Kamakura snack that keeps lunch light.",
    address: "2-2-21 Komachi, Kamakura City, Kanagawa",
    travel: "Walk on Komachi Street"
  },
  "Kamakura Gyoza UMINEKO": {
    type: "Gyoza",
    description: "Dumpling stop fitting Komachi Street pacing.",
    address: "Kurefort Yukinoshita 1-D, 1-5-10 Yukinoshita, Kamakura City, Kanagawa 248-0005",
    travel: "Walk nearby"
  },
  "Hannari Inari": {
    type: "Inari / street food",
    description: "Lighter grazing option that protects dinner appetite.",
    address: "2-8-6 Komachi, Kamakura City, Kanagawa 248-0006",
    travel: "Walk nearby"
  },
  "Sushi no Midori Shibuya": {
    type: "High-value Tokyo sushi",
    description: "Excellent sushi, family-friendly, and right before the Shibuya afternoon.",
    address: "Shibuya Mark City East Mall 4F, 1-12-3 Dogenzaka, Shibuya City, Tokyo 150-0043",
    travel: "Transit ~35-45 min from Odaiba"
  },
  "Eggs 'n Things Odaiba optional breakfast": {
    type: "Hawaiian-style breakfast / pancakes",
    description: "Easy waterfront breakfast before Gundam; skip if it risks Sushi no Midori timing.",
    address: "1-7-1 Daiba, Minato City, Tokyo 135-0091",
    travel: "Walk in Odaiba"
  },
  "Ichiran Shibuya": {
    type: "Tonkotsu ramen",
    description: "No-reservation late-night ramen that naturally fits after Shibuya Sky and Don Quijote.",
    address: "1-22-7 Jinnan, Shibuya City, Tokyo 150-0041",
    travel: "Walk ~8-12 min from Shibuya Sky"
  },
  "Kanazawa Maimon Sushi Shibuya Parco": {
    type: "Sushi",
    description: "Quality sushi option if you want seafood rather than ramen.",
    address: "Shibuya PARCO, 15-1 Udagawacho, Shibuya City, Tokyo 150-0042",
    travel: "Walk ~10-12 min from Shibuya Sky"
  },
  "MEGA Don Quijote snacks": {
    type: "Snack / souvenir food",
    description: "Best flexible shopping plus snack stop after Shibuya Sky.",
    address: "28-6 Udagawacho, Shibuya City, Tokyo 150-0042",
    travel: "Walk ~8-12 min from Shibuya Sky"
  },
  "Chuka-soba Aoba Nakano if high-energy backup": {
    type: "Tokyo ramen",
    description: "Only if high-energy backup Nakano is used on June 12.",
    address: "5-58-1 Nakano, Nakano-ku, Tokyo",
    travel: "Transit ~15-20 min plus walk"
  },
  "Daily Chiko if Nakano backup": {
    type: "Dessert / soft serve",
    description: "Fun Nakano dessert if Broadway becomes the evening route.",
    address: "Nakano Broadway B1F, 5-52-15 Nakano, Nakano City, Tokyo",
    travel: "Transit ~15-20 min plus walk"
  },
  "Tsukiji Sushi Class": {
    type: "Market tour + sushi-making experience",
    description: "Locked experience; arrive 8:15 AM because the group leaves sharp.",
    address: "Meet at Tsukiji Honganji front gate, 3-15-1 Tsukiji, Chuo City, Tokyo 104-8435",
    travel: "Transit ~40-50 min from Airbnb"
  },
  "Ginza Happo": {
    type: "Seafood / yakiniku / buffet",
    description: "Final-night celebration with 150+ dishes, king crab, grilled meat, and variety.",
    address: "Ginza 8-10, Ginza Nine Building No. 3, B1F, Chuo City, Tokyo",
    travel: "Transit ~35-45 min from Yamato"
  },
  "Ginza cafe": {
    type: "Cafe",
    description: "Low-stress cafe/reset block between Tsukiji and luggage handling.",
    address: "Ginza area, route-dependent",
    travel: "Walk/transit ~10-15 min from Tsukiji"
  },
  "Depachika snacks": {
    type: "Packaged snacks / sweets",
    description: "Premium packaged snacks, sweets, bento, and omiyage.",
    address: "Ginza department-store basement food halls",
    travel: "Walk in Ginza"
  },
  "Skip Asakusa/Akihabara unless luggage is already handled": {
    type: "Route rule",
    description: "Do not add distant neighborhoods unless forwarding is complete and energy is high.",
    address: "Not a restaurant; applies to the June 13 route.",
    travel: "Avoid extra transit before luggage forwarding"
  },
  "Departure day flexible": {
    type: "Flexible strategy",
    description: "Use the best option based on where you actually are and how airport timing looks.",
    address: "Nakano / Shinjuku / Haneda, route-dependent",
    travel: "Closest good option wins"
  },
  "Chuka-soba Aoba Nakano": {
    type: "Tokyo ramen",
    description: "Iconic Nakano ramen near the Broadway route.",
    address: "5-58-1 Nakano, Nakano-ku, Tokyo",
    travel: "Walk ~5 min from Nakano Broadway"
  },
  "Garaku Nakano": {
    type: "Soup curry",
    description: "Hokkaido-style soup curry matching the curry interest.",
    address: "5-50-3 Nakano, Nakano-ku, Tokyo 164-0001",
    travel: "Walk nearby"
  },
  "Daily Chiko": {
    type: "Layered soft serve / dessert",
    description: "Fun family dessert stop inside Nakano Broadway.",
    address: "Nakano Broadway B1F, 5-52-15 Nakano, Nakano City, Tokyo",
    travel: "Walk inside Nakano Broadway"
  },
  "Shinjuku station bento / depachika": {
    type: "Bento / snacks",
    description: "Excellent flight provisions without route risk.",
    address: "Shinjuku Station department-store food halls",
    travel: "Transit if nearby"
  },
  "Haneda Airport dining": {
    type: "Airport food",
    description: "Safest final meal once checked in.",
    address: "Haneda Airport Terminal 3",
    travel: "Inside airport"
  }
};

const tripData = {
  title: "Tokyo 2026 Family Trip",
  subtitle: "Executive Luxury Master Itinerary",
  dates: "June 5-14, 2026",
  base: "3-chome-11-9 Takadanobaba, Shinjuku City, Tokyo 169-0075",
  flightCode: "WDTEOJ",
  party: "Family of 5",
  rules: [
    "Geography first: every stop must fit the route.",
    "Optional blocks stay visible until explicitly removed.",
    "Closest good restaurant wins for flexible meals.",
    "Protect energy on DisneySea, Hakone, Kamakura, and Shibuya Sky.",
    "June 13 Yamato forwarding unlocks the final day."
  ],
  emergency: [
    { label: "Police", value: "110" },
    { label: "Fire / ambulance", value: "119" },
    { label: "Japan Visitor Hotline", value: "050-3816-2787" },
    { label: "US Embassy Tokyo", value: "+81 3-3224-5000" },
    { label: "Airbnb address", value: "3-chōme-11-9 Takadanobaba, Shinjuku City, Tokyo 169-0075" }
  ],
  checklist: [
    "Confirm Yamato forwarding location, hours, cutoff, and Haneda Terminal 3 pickup.",
    "Link DisneySea tickets in the Tokyo Disney Resort app and test payment for Premier Access.",
    "Check Tsukiji mobile tickets after payment processes on June 10.",
    "Keep Shibuya Sky QR tickets accessible for June 12 17:40-17:59 entry.",
    "Protect Hakone 6:36 PM Romancecar return; lunch remains flexible.",
    "Decide June 14 transfer method in Tokyo after luggage plan is confirmed."
  ],
  maps: [
    { label: "Open Airbnb in Maps", detail: "Takadanobaba base", icon: "🏨", url: "https://www.google.com/maps/search/?api=1&query=3-chome-11-9%20Takadanobaba%20Shinjuku%20Tokyo" },
    { label: "Open today's route", detail: "Use selected day route flow", icon: "🗺️", url: "https://www.google.com/maps/dir/?api=1&origin=3-chome-11-9%20Takadanobaba%20Shinjuku%20Tokyo&destination=Tokyo" },
    { label: "Open Yamato luggage office", detail: "Shinjuku Hyakunincho Center", icon: "📦", url: "https://www.google.com/maps/search/?api=1&query=Yamato%20Transport%201-18-3%20Hyakunin-cho%20Shinjuku" },
    { label: "Open Haneda Terminal 3", detail: "Departure and bag pickup", icon: "✈️", url: "https://www.google.com/maps/search/?api=1&query=Haneda%20Airport%20Terminal%203" },
    { label: "Open next locked restaurant", detail: "Ginza Happo finale", icon: "🦀", url: "https://www.google.com/maps/search/?api=1&query=Seafood%20Buffet%20Dining%20Ginza%20Happo" }
  ],
  days: [
    {
      id: "jun-06",
      dateLabel: "Jun 6",
      fullDate: "Sat Jun 6",
      icon: "✈️",
      title: "Arrival + Takadanobaba Recovery Night",
      area: "Haneda -> Takadanobaba",
      image: "assets/image1.png",
      route: ["Haneda", "Airbnb", "Sushiro", "Supplies"],
      transitReminder: "Private meet-and-greet transfer is booked for 6:00 PM.",
      weather: "Low-pressure arrival night",
      stops: [
        stop("5:10 PM", "Arrive Haneda", "Haneda Airport Terminal 3", "5:10 PM", "6:00 PM", "Immigration, luggage, customs", "AS 863 arrival from Honolulu.", "Flight WDTEOJ", "Haneda Airport Terminal 3"),
        stop("6:00 PM", "Private transfer", "Haneda Airport", "6:00 PM", "7:45 PM", "60-75 min to Takadanobaba", "Meet-and-greet direct to Airbnb.", "GYG83XKLF6VG", "Haneda Airport Terminal 3"),
        stop("7:45 PM", "Check-in + reset", tripDataBase(), "7:45 PM", "8:30 PM", "Walk 3-5 min to dinner", "Hydrate, shower, unpack essentials.", null, "3-chome-11-9 Takadanobaba Shinjuku Tokyo"),
        stop("8:30 PM", "Sushiro BIGBOX Takadanobaba", "BIGBOX Takadanobaba 9F, 1-35-3 Takadanobaba, Shinjuku City", "8:30 PM", "9:30 PM", "Walk 3-5 min to supplies", "Easy tablet-order conveyor sushi for first night.", null, "Sushiro BIGBOX Takadanobaba"),
        stop("9:30 PM", "Convenience store + sleep", "Takadanobaba", "9:30 PM", "10:30 PM", "Return to Airbnb", "Water, breakfast snacks, coffee, then protect June 7 energy.", null, "Takadanobaba convenience store")
      ],
      food: food(["Sushiro BIGBOX Takadanobaba"], ["Menyu Issei", "Kitchen Tanizawa", "A5 Wagyu Hamburg Masuo"], ["Brother Japanese curry", "Convenience store dinner if arrival slips"], ["Conveyor sushi", "Ramen", "Hamburg/yoshoku"], "Closest good option wins. Keep the first night local and low-pressure.")
    },
    {
      id: "jun-07",
      dateLabel: "Jun 7",
      fullDate: "Sun Jun 7",
      icon: "⚾",
      title: "Tokyo Dome Baseball + Ramen",
      area: "Takadanobaba / Suidobashi",
      image: "assets/image10.png",
      route: ["Airbnb", "Katsumoto", "Tokyo Dome", "Base"],
      transitReminder: "Tokyo Dome City is easiest; Akihabara only if energy is high.",
      weather: "Jet lag recovery pacing",
      stops: [
        stop("8:30 AM", "Relaxed morning", "Takadanobaba base", "8:30 AM", "10:45 AM", "20-30 min transit to Dome area", "Convenience breakfast and slow start.", null, "Takadanobaba Tokyo"),
        stop("10:45 AM", "Transit to Dome", "Takadanobaba -> Suidobashi/Korakuen", "10:45 AM", "11:30 AM", "JR/Metro", "Arrive with time for lunch and photos.", null, "Tokyo Dome"),
        stop("11:30 AM", "Chukasoba Katsumoto", "2-15-5 Misakicho, Chiyoda City, Tokyo 101-0061", "11:30 AM", "12:45 PM", "5-10 min walk", "Refined Tokyo-style shoyu ramen before the game.", null, "Chukasoba Katsumoto Tokyo"),
        stop("1:00 PM", "Tokyo Dome City", "Tokyo Dome City", "1:00 PM", "1:45 PM", "Walk to seats", "Merch, photos, atmosphere buffer.", null, "Tokyo Dome City"),
        stop("2:00 PM", "Yomiuri Giants game", "Tokyo Dome", "2:00 PM", "5:15 PM", "20-30 min to base or 10 min to Akihabara", "Japanese baseball culture anchor.", "Tokyo Giants tickets", "Tokyo Dome"),
        stop("5:30 PM", "Flexible evening", "Dome City / Akihabara / base", "5:30 PM", "8:30 PM", "Route depends on energy", "Keep dinner reservation-free.", null, "Akihabara Tokyo")
      ],
      food: food(["Chukasoba Katsumoto"], ["GENUINE BURGER Tokyo Dome City", "Hamburg Kiwamiya Tokyo Station"], ["Tokyo Niboshi Ramen Nagi Akihabara", "Suidobashi Curry & Bar Largo", "5W Akihabara Beef Dining"], ["Burger", "Ramen", "Japanese curry"], "Akihabara is optional after the game only if energy is strong.")
    },
    {
      id: "jun-08",
      dateLabel: "Jun 8",
      fullDate: "Mon Jun 8",
      icon: "🎨",
      title: "Shinjuku Food Tour + teamLab + Gonpachi",
      area: "Shinjuku / Toyosu / Nishiazabu",
      image: "assets/image14.png",
      route: ["Food Tour", "teamLab", "Tower photo", "Gonpachi"],
      transitReminder: "Wear roll-up pants and easy shoes for teamLab.",
      weather: "Waterfront and photo-stop aware",
      stops: [
        stop("9:30 AM", "Easy start", "Takadanobaba base", "9:30 AM", "10:30 AM", "10-15 min to Shinjuku", "Light breakfast only; you will eat heavily later.", null, "Takadanobaba Tokyo"),
        stop("11:30 AM", "Shinjuku Food Tour", "Shinjuku, Tokyo", "11:30 AM", "2:30 PM", "35-45 min to Toyosu", "15 dishes / 4 eateries; confirmed.", "Shinjuku Food Tour", "Shinjuku Food Tour Tokyo"),
        stop("3:30 PM", "teamLab Planets", "6 Chome-1-16 Toyosu, Koto City, Tokyo", "3:30 PM", "5:30 PM", "30-40 min toward Tokyo Tower", "Barefoot immersive visit; build buffer for timed entry.", "teamLab 3:30-4:00 PM entry", "teamLab Planets Tokyo"),
        stop("6:15 PM", "Tokyo Tower optional", "Tokyo Tower exterior", "6:15 PM", "6:45 PM", "Transit/taxi to Nishiazabu", "Photo-only stop if timing works.", null, "Tokyo Tower"),
        stop("8:00 PM", "Gonpachi Nishiazabu", "1-13-11 Nishiazabu, Minato City, Tokyo 106-0031", "8:00 PM", "10:00 PM", "Return to base after dinner", "Iconic izakaya/yakitori/soba; do not over-order after the food tour.", "Gonpachi dinner", "Gonpachi Nishiazabu")
      ],
      food: food(["Shinjuku Food Tour", "Gonpachi Nishiazabu"], ["Cafe/rest buffer before dinner"], ["Conbini snack only if needed"], ["Yakitori", "Gyoza", "Cold soba"], "No extra food plan needed; major meals are locked.")
    },
    {
      id: "jun-09",
      dateLabel: "Jun 9",
      fullDate: "Tue Jun 9",
      icon: "🏰",
      title: "Tokyo DisneySea Full Immersion",
      area: "Maihama / Tokyo DisneySea",
      image: "assets/image17.jpeg",
      route: ["Airbnb", "Gate", "Mysterious", "Waterfront", "Harbor"],
      transitReminder: "No extra Tokyo neighborhoods after DisneySea.",
      weather: "Full park day",
      stops: [
        stop("6:15 AM", "Depart prep", "Takadanobaba base", "6:15 AM", "7:00 AM", "60-75 min to DisneySea", "Fast breakfast; app, battery, snacks ready.", null, "Takadanobaba Tokyo"),
        stop("7:30 AM", "Gate arrival target", "Tokyo DisneySea", "7:30 AM", "8:30 AM", "Park entry", "Be near the front for rope drop.", "DisneySea tickets", "Tokyo DisneySea"),
        stop("9:00 AM", "Rope drop + Premier Access", "Tokyo DisneySea", "9:00 AM", "10:30 AM", "Counter-clockwise loop", "Fantasy Springs / Soaring / Journey / Tower priorities.", "Premier Access strategy", "Tokyo DisneySea Fantasy Springs"),
        stop("12:00 PM", "Off-peak lunch", "Inside Tokyo DisneySea", "12:00 PM", "1:30 PM", "Stay inside park", "Quick service / mobile order protects ride time.", null, "Tokyo DisneySea restaurants"),
        stop("1:30 PM", "Rides + recovery zones", "Mermaid Lagoon / low-wait rides", "1:30 PM", "5:30 PM", "Park loop", "Recovery zones, Tower/Toy Story if timing fits.", null, "Mermaid Lagoon DisneySea"),
        stop("7:30 PM", "Night harbor", "Tokyo DisneySea Harbor", "7:30 PM", "Close", "Return to base after park", "Stay for atmosphere, final rides, shopping.", null, "Tokyo DisneySea Mediterranean Harbor")
      ],
      food: food(["Inside Tokyo DisneySea"], ["Theme-park quick service", "Mobile order lunch", "Popcorn flavors"], ["Rakeru Shinjuku", "Watanabe ramen", "Kitchen Oh! Way", "Pneuma Curry"], ["Park snacks", "Curry", "Omurice"], "Eating inside the park protects ride efficiency.")
    },
    {
      id: "jun-10",
      dateLabel: "Jun 10",
      fullDate: "Wed Jun 10",
      icon: "♨️",
      title: "Hakone Scenic Loop + Flexible Lunch",
      area: "Shinjuku / Hakone",
      image: "assets/image19.png",
      route: ["Shinjuku", "Hakone", "Owakudani", "Lake Ashi", "Yunessun"],
      transitReminder: "Protect the 6:36 PM return Romancecar.",
      weather: "Fuji visibility depends on weather",
      stops: [
        stop("6:15 AM", "Wake + transfer", "Takadanobaba -> Shinjuku Station", "6:15 AM", "7:10 AM", "Arrive early at Shinjuku", "Quick breakfast and platform buffer.", null, "Shinjuku Station"),
        stop("7:37 AM", "Romancecar outbound", "Shinjuku Station", "7:37 AM", "9:22 AM", "Hakone 41 to Hakone-Yumoto", "Confirmed reserved train.", "Hakone Romancecar 7:37 AM", "Shinjuku Station Romancecar"),
        stop("9:30 AM", "Mountain transit", "Hakone-Yumoto -> Owakudani", "9:30 AM", "11:00 AM", "Tozan/cable/ropeway", "Bus-minimized loop.", null, "Owakudani Hakone"),
        stop("11:00 AM", "Owakudani", "Owakudani, Hakone", "11:00 AM", "12:00 PM", "45 min toward Lake Ashi", "Volcanic valley and black eggs optional.", null, "Owakudani"),
        stop("12:15 PM", "Flexible lunch", "Lake Ashi / Hakone-Yumoto route", "12:15 PM", "1:30 PM", "Route-dependent", "Soba, snack, curry, or casual Hakone meal.", null, "Lake Ashi restaurants"),
        stop("1:30 PM", "Lake Ashi + shrine", "Lake Ashi, Hakone", "1:30 PM", "3:00 PM", "30 min to Yunessun if used", "Cruise and lakeside exploration.", null, "Lake Ashi Hakone Shrine"),
        stop("3:15 PM", "Yunessun optional", "Hakone Kowakien Yunessun", "3:15 PM", "5:00 PM", "Return to Hakone-Yumoto", "Swimsuit-friendly recovery if energy/weather fit.", null, "Hakone Yunessun"),
        stop("6:36 PM", "Return Romancecar", "Hakone-Yumoto Station", "6:36 PM", "8:06 PM", "GSE rear observation seats", "Confirmed return to Shinjuku.", "Romancecar 6:36 PM", "Hakone-Yumoto Station")
      ],
      food: food(["Romancecar day; lunch flexible"], ["Niku no Kinosuke", "Tokyo Sushi", "Kobe Beef Yakiniku Bakatare"], ["Box Burger Hakone", "Bombay Central Hakone", "Yunessun ramen/curry"], ["Soba", "Curry", "Hamburg steak"], "Open-Air Museum removed. Ashi no Ko Funaya is only nice-if-easy.")
    },
    {
      id: "jun-11",
      dateLabel: "Jun 11",
      fullDate: "Thu Jun 11",
      icon: "⛩️",
      title: "Kamakura Cultural Day + Wagyu Night",
      area: "Kamakura / Shibuya",
      image: "assets/image24.png",
      route: ["Kamakura", "Tsurugaoka", "Komachi", "Great Buddha", "Nikuya"],
      transitReminder: "Depart Kamakura no later than 5:00 PM.",
      weather: "Humidity/fatigue aware",
      stops: [
        stop("8:00 AM", "Travel to Kamakura", "Takadanobaba/Shinjuku -> Kamakura", "8:00 AM", "9:30 AM", "75-90 min JR route", "Use taxi locally if humidity or fatigue is high.", null, "Kamakura Station"),
        stop("9:45 AM", "Tsurugaoka Hachimangu", "2 Chome-1-31 Yukinoshita, Kamakura", "9:45 AM", "10:30 AM", "10 min walk to Komachi", "Classic shrine start.", null, "Tsurugaoka Hachimangu"),
        stop("10:45 AM", "Komachi Street", "Komachi-dori, Kamakura", "10:45 AM", "12:30 PM", "15-20 min to Great Buddha", "Street food and souvenirs.", null, "Komachi Street Kamakura"),
        stop("12:45 PM", "Great Buddha", "4 Chome-2-28 Hase, Kamakura", "12:45 PM", "1:45 PM", "10-15 min to Hasedera", "Primary cultural anchor.", null, "Great Buddha Kamakura"),
        stop("2:00 PM", "Hasedera optional", "3 Chome-11-2 Hase, Kamakura", "2:00 PM", "3:00 PM", "Return route", "Only if timing and energy are strong.", null, "Hasedera Kamakura"),
        stop("4:30 PM", "Depart Kamakura target", "Kamakura Station", "4:30 PM", "5:00 PM", "Return to Shibuya", "Protect dinner timing.", null, "Kamakura Station"),
        stop("7:00 PM", "Nikuya Yokocho Udagawacho", "2-29-13 Dogenzaka, Shibuya City, Tokyo 150-0043", "7:00 PM", "8:30 PM", "Return to base after dinner", "Confirmed wagyu yakiniku dinner.", "Nikuya Yokocho 7:00 PM", "Nikuya Yokocho Udagawacho")
      ],
      food: food(["Nikuya Yokocho Udagawacho"], ["Kamakura Matsubara-an", "Tonkatsu Komachi", "Giraffa curry bread"], ["Kamakura Gyoza UMINEKO", "Hannari Inari"], ["Street food", "Soba", "Wagyu yakiniku"], "Keep lunch light before wagyu dinner.")
    },
    {
      id: "jun-12",
      dateLabel: "Jun 12",
      fullDate: "Fri Jun 12",
      icon: "🌇",
      title: "Odaiba + Sushi no Midori + Shibuya Sky",
      area: "Odaiba / Shibuya / Omotesando",
      image: "assets/image27.png",
      route: ["Airbnb", "Odaiba", "Sushi", "Omotesando", "Shibuya Sky"],
      transitReminder: "Protect Shibuya Sky sunset entry at all costs.",
      weather: "Sunset-ticket aware",
      stops: [
        stop("8:15 AM", "Travel to Odaiba", "Takadanobaba -> Odaiba", "8:15 AM", "9:00 AM", "45-60 min via Yurikamome/JR", "Bay views on the way.", null, "Odaiba Tokyo"),
        stop("9:15 AM", "Statue of Liberty", "Odaiba Seaside Park", "9:15 AM", "10:00 AM", "Walk to DiverCity", "Rainbow Bridge skyline photos.", null, "Odaiba Statue of Liberty"),
        stop("10:00 AM", "Unicorn Gundam", "DiverCity Tokyo Plaza", "10:00 AM", "11:00 AM", "Explore Odaiba", "Locked Odaiba priority stop.", null, "Unicorn Gundam Odaiba"),
        stop("1:00 PM", "Umegaoka Sushi no Midori Shibuya", "Shibuya Mark City East Mall 4F, 1-12-3 Dogenzaka", "1:00 PM", "2:15 PM", "5-10 min to Shibuya landmarks", "Confirmed high-value sushi lunch.", "Sushi no Midori 1:00 PM", "Umegaoka Sushi no Midori Shibuya"),
        stop("2:15 PM", "Shibuya + Omotesando", "Shibuya Crossing / Hachiko / Onitsuka Tiger", "2:15 PM", "4:30 PM", "15-20 min flow", "Hachiko, Crossing, Onitsuka Tiger.", null, "Onitsuka Tiger Omotesando"),
        stop("5:40 PM", "Shibuya Sky entry", "Shibuya Scramble Square", "5:40 PM", "5:59 PM", "Timed entry", "Confirmed sunset window 17:40-17:59.", "Shibuya Sky 17:40-17:59", "Shibuya Sky"),
        stop("7:30 PM", "Donki / Ichiran optional", "Shibuya", "7:30 PM", "10:00 PM", "No hard dinner reservation", "Flexible night after skyline.", null, "Ichiran Shibuya")
      ],
      food: food(["Sushi no Midori Shibuya"], ["Eggs 'n Things Odaiba optional breakfast", "Ichiran Shibuya", "Kanazawa Maimon Sushi Shibuya Parco"], ["MEGA Don Quijote snacks", "Chuka-soba Aoba Nakano if high-energy backup", "Daily Chiko if Nakano backup"], ["Sushi", "Ramen", "Dessert"], "Nakano is removed from the main route; June 14 is the primary Nakano day.")
    },
    {
      id: "jun-13",
      dateLabel: "Jun 13",
      fullDate: "Sat Jun 13",
      icon: "🍣",
      title: "Tsukiji Sushi Class + Ginza Finale",
      area: "Tsukiji / Ginza / Yamato",
      image: "assets/Ginza.jpg",
      route: ["Airbnb", "Tsukiji", "Ginza", "Yamato", "Ginza Happo"],
      transitReminder: "Keep only overnight essentials after forwarding bags.",
      weather: "Low-stress finale day",
      stops: [
        stop("7:10 AM", "Depart Airbnb", tripDataBase(), "7:10 AM", "7:20 AM", "40-50 min to Tsukiji", "Protect Tsukiji arrival buffer.", null, "Takadanobaba Tokyo"),
        stop("8:15 AM", "Tsukiji Honganji front gate", "3-15-1 Tsukiji, Chuo City, Tokyo 104-8435", "8:15 AM", "8:30 AM", "Group leaves sharp", "Google may route to the back; meet at front/main gate.", "Tsukiji meeting point", "Tsukiji Honganji"),
        stop("8:30 AM", "Sushi making class", "Tsukiji", "8:30 AM", "12:30 PM", "Walk/transit to Ginza", "Confirmed 4-hour Japan Wonder Travel class; sushi lunch included.", "Tsukiji Sushi Class", "Tsukiji Sushi Making Class"),
        stop("12:45 PM", "Ginza cafe/shopping", "Ginza", "12:45 PM", "3:30 PM", "25-35 min back to Airbnb", "UNIQLO/GU, depachika, gentle shopping.", null, "Ginza Uniqlo GU"),
        stop("3:30 PM", "Airbnb luggage reset", tripDataBase(), "3:30 PM", "4:30 PM", "12-18 min to Yamato", "Repack large bags and keep essentials.", null, "Takadanobaba Tokyo"),
        stop("5:15 PM", "Yamato forwarding", "1-18-3 Hyakunin-cho, Shinjuku-ku, Tokyo", "5:15 PM", "5:45 PM", "35-45 min to Ginza", "Send large suitcases to Haneda Terminal 3. Verify cutoff at counter.", "Yamato forwarding", "Yamato Transport Shinjuku Hyakunincho"),
        stop("7:00 PM", "Seafood Buffet Dining Ginza Happo", "Ginza 8-10, Ginza Nine Building No. 3, B1F, Chuo City", "7:00 PM", "9:00 PM", "Gentle final Ginza walk", "Confirmed 120-min finale buffet.", "FCDZEU56TC", "Seafood Buffet Dining Ginza Happo")
      ],
      food: food(["Tsukiji Sushi Class", "Ginza Happo"], ["Ginza cafe", "Depachika snacks"], ["Skip Asakusa/Akihabara unless luggage is already handled"], ["Sushi making", "King crab", "Yakiniku meats", "Desserts"], "Do not add major sightseeing before luggage forwarding.")
    },
    {
      id: "jun-14",
      dateLabel: "Jun 14",
      fullDate: "Sun Jun 14",
      icon: "✈️",
      title: "Nakano Broadway + Haneda Departure",
      area: "Nakano / Shinjuku / Haneda",
      image: "assets/image34.png",
      route: ["Airbnb", "Nakano", "Shinjuku", "Haneda"],
      transitReminder: "Airport calm beats one more store.",
      weather: "Departure-day buffer",
      stops: [
        stop("8:30 AM", "Pack + breakfast", tripDataBase(), "8:30 AM", "10:00 AM", "Carry-on essentials only", "Keep passports, medications, valuables, chargers accessible.", null, "Takadanobaba Tokyo"),
        stop("10:30 AM", "Nakano Broadway", "5-52-15 Nakano, Nakano City, Tokyo", "10:30 AM", "12:45 PM", "15-25 min west-side route", "Jack Road, Mandarake, capsule toys, collectibles.", null, "Nakano Broadway"),
        stop("1:00 PM", "Casual lunch", "Nakano or Shinjuku", "1:00 PM", "1:30 PM", "Move based on energy", "Use closest good option.", null, "Nakano restaurants"),
        stop("2:30 PM", "Shinjuku final shopping", "Shinjuku", "2:30 PM", "4:30 PM", "Only if time permits", "Donki, snacks, last errands.", null, "Shinjuku shopping"),
        stop("5:00 PM", "Airport trigger", "Tokyo -> Haneda", "5:00 PM", "5:30 PM", "60-90 min depending on method", "Transfer method decided in Tokyo.", null, "Haneda Airport Terminal 3"),
        stop("6:15 PM", "Haneda target", "Haneda Terminal 3", "6:15 PM", "8:15 PM", "Retrieve forwarded bags if used", "Check-in, bag pickup, security, calm buffer.", "AS864", "Haneda Airport Terminal 3"),
        stop("8:15 PM", "Depart Haneda", "Haneda Airport", "8:15 PM", "Flight", "HND -> HNL -> SAN", "AS 864 departure.", "Flight WDTEOJ", "Haneda Airport Terminal 3")
      ],
      food: food(["Departure day flexible"], ["Chuka-soba Aoba Nakano", "Garaku Nakano", "Daily Chiko"], ["Shinjuku station bento / depachika", "Haneda Airport dining"], ["Ramen", "Soup curry", "Soft serve", "Bento"], "Luggage forwarding makes Nakano/Shinjuku possible.")
    }
  ],
  reservations: [
    booking("Haneda private transfer", "Jun 6", "6:00 PM", "GYG83XKLF6VG", "Haneda Airport Terminal 3", "Private meet-and-greet direct to Takadanobaba."),
    booking("Yomiuri Giants / Tokyo Dome", "Jun 7", "2:00 PM", "Locked", "Tokyo Dome", "Japanese baseball anchor."),
    booking("Shinjuku Food Tour", "Jun 8", "11:30 AM", "Confirmed", "Shinjuku, Tokyo", "15 dishes / 4 eateries."),
    booking("teamLab Planets", "Jun 8", "3:30-4:00 PM", "Timed entry", "Toyosu, Tokyo", "Barefoot immersive visit."),
    booking("Gonpachi Nishiazabu", "Jun 8", "8:00 PM", "Locked", "1-13-11 Nishiazabu", "Iconic izakaya dinner."),
    booking("Tokyo DisneySea", "Jun 9", "Full day", "Locked", "1-13 Maihama, Urayasu", "Premier Access strategy."),
    booking("Hakone Romancecar outbound", "Jun 10", "7:37 AM", "Hakone 41", "Shinjuku Station", "Reserved outbound train."),
    booking("Hakone Romancecar return", "Jun 10", "6:36 PM", "GSE rear observation seats", "Hakone-Yumoto Station", "Protect this return."),
    booking("Nikuya Yokocho Udagawacho", "Jun 11", "7:00 PM", "Locked", "2-29-13 Dogenzaka, Shibuya", "Wagyu yakiniku dinner."),
    booking("Sushi no Midori Shibuya", "Jun 12", "1:00 PM", "Locked", "Shibuya Mark City East Mall 4F", "Confirmed lunch."),
    booking("Shibuya Sky", "Jun 12", "17:40-17:59", "QR tickets", "Shibuya Scramble Square", "Sunset window."),
    booking("Tsukiji Sushi Class", "Jun 13", "8:30 AM", "Confirmed", "Tsukiji Honganji front gate", "Japan Wonder Travel class."),
    booking("Yamato luggage forwarding", "Jun 13", "5:15 PM", "Verify cutoff", "1-18-3 Hyakunin-cho, Shinjuku-ku", "Send bags to Haneda Terminal 3."),
    booking("Ginza Happo", "Jun 13", "7:00 PM", "FCDZEU56TC", "Ginza 8-10, Ginza Nine Building No. 3, B1F", "120-min finale buffet."),
    booking("Haneda departure", "Jun 14", "8:15 PM", "AS864 / WDTEOJ", "Haneda Terminal 3", "HND -> HNL -> SAN.")
  ]
};

const state = {
  tab: "home",
  dayId: tripData.days[0].id,
  weather: null,
  weatherError: false
};

const content = document.querySelector("#content");
const globalDaySelector = document.querySelector("#globalDaySelector");
const tripHero = document.querySelector(".trip-hero");
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.tab = tab.dataset.tab;
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    render();
  });
});

function tripDataBase() {
  return "3-chome-11-9 Takadanobaba, Shinjuku City, Tokyo 169-0075";
}

function stop(time, name, address, arrival, departure, travel, notes, confirmation, query) {
  return {
    id: slug(`${time}-${name}-${address}`),
    time,
    name,
    address,
    arrival,
    departure,
    travel,
    notes,
    confirmation,
    maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || address || name)}`
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function food(locked, flex, backups, kidFriendly, notes) {
  return {
    locked: enrichFoodList(locked),
    flex: enrichFoodList(flex),
    backups: enrichFoodList(backups),
    kidFriendly,
    notes
  };
}

function enrichFoodList(items) {
  return items.map((item) => ({
    name: item,
    ...(FOOD_DETAILS[item] || {
      type: "Food option",
      description: "From the presentation food plan; details need confirmation.",
      address: "Address not listed in the presentation; confirm before trip.",
      travel: "Route-dependent"
    })
  }));
}

function booking(name, date, time, confirmation, address, notes) {
  return { name, date, time, status: "Locked", confirmation, address, notes };
}

function currentDay() {
  return tripData.days.find((day) => day.id === state.dayId) || tripData.days[0];
}

function nextReservation() {
  const day = currentDay();
  return tripData.reservations.find((reservation) => reservation.date === day.dateLabel) || tripData.reservations[0];
}

function render() {
  const views = {
    home: renderHome,
    itinerary: renderItinerary,
    reservations: renderScopedReservations,
    maps: renderScopedMaps,
    food: renderScopedFood
  };

  content.innerHTML = views[state.tab]();
  renderHeroBackground();
  renderGlobalDaySelector();
  bindDynamicEvents();
  updateWeatherWidget();
}

function renderHeroBackground() {
  if (!tripHero) return;
  const day = currentDay();
  tripHero.style.backgroundImage = `linear-gradient(90deg, rgba(28,31,38,.78), rgba(28,31,38,.18)), url('${day.image}')`;
}

function renderGlobalDaySelector() {
  if (!globalDaySelector) return;
  globalDaySelector.innerHTML = renderDaySelector("global-day-select");
}

function renderHome() {
  const day = currentDay();
  const reservation = nextReservation();
  const next = nextTripStop();
  const planItems = topPlanItems(day);

  return `
    <div class="section-title">
      <h2>${day.fullDate}</h2>
      <span>${day.area}</span>
    </div>
    <article class="feature-card" style="background-image: linear-gradient(90deg, rgba(28,31,38,.88), rgba(28,31,38,.42)), url('${day.image}')">
      <h3>${day.title}</h3>
      <p>${day.area}</p>
      <div class="route-strip">${day.route.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
    <div class="dashboard-grid">
      <article class="card full next-card">
        <div class="widget-heading">
          <span class="widget-icon">▶</span>
          <h3>Next</h3>
        </div>
        <p>${next.context}</p>
        <span class="metric">${next.time}</span>
        <p class="next-stop-name">${next.name}</p>
        <p>${next.address}</p>
      </article>
      <article class="card full">
        <div class="widget-heading">
          <span class="widget-icon">★</span>
          <h3>Today's plan</h3>
        </div>
        <ul class="plan-list">
          ${planItems.map((item) => `<li><span>${item.icon}</span><b>${item.time}</b> ${item.name}</li>`).join("")}
        </ul>
        <p class="plan-more">${Math.max(day.stops.length - 5, 0)} more stops · <button class="text-link" data-go-tab="itinerary" type="button">View full day</button></p>
      </article>
      <article class="card">
        <div class="widget-heading">
          <span class="widget-icon">◆</span>
          <h3>Next reservation</h3>
        </div>
        <p>${reservation.name}</p>
        <span class="metric">${reservation.time}</span>
      </article>
      <article class="card">
        <div class="widget-heading">
          <span class="widget-icon">↗</span>
          <h3>Transit reminder</h3>
        </div>
        <p>${day.transitReminder}</p>
      </article>
      <article class="card full weather-card ${weatherClass()}">
        <div class="widget-heading">
          <span class="widget-icon weather-main-icon">${weatherIcon()}</span>
          <h3>Tokyo weather</h3>
        </div>
        <div id="weatherWidget">${renderWeatherWidget()}</div>
      </article>
      <article class="card full">
        <div class="widget-heading">
          <span class="widget-icon">!</span>
          <h3>Emergency contacts</h3>
        </div>
        <p>${tripData.emergency.map((item) => `${item.label}: ${item.value}`).join("<br>")}</p>
      </article>
    </div>
  `;
}

function topPlanItems(day) {
  return day.stops.slice(0, 5).map((stopItem, index) => ({
    icon: stopIcon(stopItem),
    time: stopItem.time,
    name: stopItem.name
  }));
}

function stopIcon(stopItem) {
  const text = `${stopItem.name} ${stopItem.notes || ""}`.toLowerCase();
  if (text.includes("haneda") || text.includes("flight") || text.includes("depart")) return "✈️";
  if (text.includes("transfer") || text.includes("transit") || text.includes("station") || text.includes("romancecar")) return "🚆";
  if (text.includes("airbnb") || text.includes("check-in") || text.includes("pack")) return "🏨";
  if (text.includes("sushi")) return "🍣";
  if (text.includes("ramen") || text.includes("soba")) return "🍜";
  if (text.includes("food") || text.includes("dinner") || text.includes("lunch")) return "🍽️";
  if (text.includes("baseball") || text.includes("giants") || text.includes("dome")) return "⚾";
  if (text.includes("teamlab") || text.includes("art")) return "🎨";
  if (text.includes("disney")) return "🏰";
  if (text.includes("hakone") || text.includes("owakudani") || text.includes("yunessun")) return "♨️";
  if (text.includes("shrine") || text.includes("buddha") || text.includes("kamakura")) return "⛩️";
  if (text.includes("shibuya sky") || text.includes("tower")) return "🌇";
  if (text.includes("shopping") || text.includes("ginza") || text.includes("nakano")) return "🛍️";
  if (text.includes("yamato") || text.includes("luggage")) return "📦";
  return "✨";
}

function nextTripStop(now = new Date()) {
  const stops = allTimedStops();
  const next = stops.find((item) => item.dateTime >= now) || stops.at(-1);
  if (!next) {
    return { context: "No upcoming stops found", time: "TBD", name: "Itinerary", address: tripData.base };
  }

  const context = dateKey(next.dateTime) === dateKey(now)
    ? `${next.day.fullDate} · coming up today`
    : `${next.day.fullDate} · next trip stop`;

  return {
    context,
    time: next.stop.time,
    name: next.stop.name,
    address: next.stop.address
  };
}

function allTimedStops() {
  return tripData.days
    .flatMap((day) => day.stops.map((stopItem) => ({
      day,
      stop: stopItem,
      dateTime: parseStopDateTime(day, stopItem)
    })))
    .filter((item) => item.dateTime)
    .sort((a, b) => a.dateTime - b.dateTime);
}

function parseStopDateTime(day, stopItem) {
  const dayMatch = day.dateLabel.match(/Jun\s+(\d+)/);
  const timeMatch = stopItem.arrival.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!dayMatch || !timeMatch) return null;
  let hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2] || 0);
  const meridiem = timeMatch[3].toUpperCase();
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return new Date(2026, 5, Number(dayMatch[1]), hour, minute);
}

function dateKey(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function renderWeatherWidget() {
  if (state.weather) {
    return `
      <p>${weatherCodeLabel(state.weather.weathercode)}</p>
      <span class="metric">${Math.round(state.weather.temperature_2m)}°C</span>
      <div class="weather-metrics">
        <span>💧 Humidity ${Math.round(state.weather.relative_humidity_2m ?? 72)}%</span>
        <span>💨 Wind ${Math.round(state.weather.wind_speed_10m)} km/h</span>
        <span>☂️ Rain ${Math.round(state.weather.precipitation_probability ?? 20)}%</span>
      </div>
    `;
  }
  if (state.weatherError) {
    return `
      <p>Live weather unavailable.</p>
      <span class="metric">Tokyo</span>
      <p>${currentDay().weather}</p>
    `;
  }
  return `
    <p>Loading live Tokyo conditions...</p>
    <span class="metric">--°C</span>
  `;
}

function weatherIcon() {
  const code = state.weather?.weathercode;
  if ([0, 1].includes(code)) return "☀️";
  if ([2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([95].includes(code)) return "⛈️";
  return "🌤️";
}

function weatherClass() {
  const code = state.weather?.weathercode;
  if ([0, 1].includes(code)) return "weather-sun";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82, 95].includes(code)) return "weather-rain";
  if ([45, 48].includes(code)) return "weather-fog";
  return "weather-cloud";
}

function weatherCodeLabel(code) {
  const labels = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm"
  };
  return labels[code] || "Current conditions";
}

async function updateWeatherWidget() {
  if (state.tab !== "home" || state.weather || state.weatherError) return;
  const target = document.querySelector("#weatherWidget");
  if (!target) return;

  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current=temperature_2m,relative_humidity_2m,weathercode,wind_speed_10m&hourly=precipitation_probability&forecast_days=1&timezone=Asia%2FTokyo");
    if (!response.ok) throw new Error("Weather request failed");
    const data = await response.json();
    state.weather = {
      ...data.current,
      precipitation_probability: data.hourly?.precipitation_probability?.[0]
    };
  } catch (error) {
    state.weatherError = true;
  }

  const updatedTarget = document.querySelector("#weatherWidget");
  if (updatedTarget) updatedTarget.innerHTML = renderWeatherWidget();
}

function renderItinerary() {
  const day = currentDay();

  return `
    <div class="section-title">
      <h2>${day.icon} Itinerary</h2>
      <span>${day.area}</span>
    </div>
    <article class="route-card">
      <b>Route flow</b>
      <div class="route-strip">${day.route.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
    <div class="timeline">${day.stops.map(renderStop).join("")}</div>
    ${renderDayFoodPlan(day)}
  `;
}

function renderDaySelector(extraClass = "") {
  return `
    <label class="day-select-wrap">
      <select class="day-select ${extraClass}" aria-label="Select itinerary day">
        ${tripData.days.map((day) => `
          <option value="${day.id}" ${day.id === state.dayId ? "selected" : ""}>${day.icon} ${day.dateLabel} - ${day.title}</option>
        `).join("")}
      </select>
    </label>
  `;
}

function renderStop(stop) {
  const savedNote = getStopNote(stop.id);
  return `
    <article class="stop">
      <p class="stop-time">${stop.time}</p>
      <h3><span class="stop-title-icon">${stopIcon(stop)}</span>${stop.name}</h3>
      <p>${stop.notes || "Trip stop."} Address: ${stop.address}</p>
      <div class="meta-list">
        <div><b>Address</b><span>${stop.address}</span></div>
        <div><b>Arrival</b><span>${stop.arrival}</span></div>
        <div><b>Departure</b><span>${stop.departure || "TBD"}</span></div>
        <div><b>Next leg</b><span>${stop.travel || "TBD"}</span></div>
        <div><b>Notes</b><span>${stop.notes || "None"}</span></div>
        <div><b>Booking</b><span>${stop.confirmation || "No reservation needed"}</span></div>
      </div>
      <div class="action-row">
        <a class="action primary" href="${stop.maps}" target="_blank" rel="noreferrer">🗺️ Maps</a>
        <button class="action note-toggle" data-note-toggle="${stop.id}" type="button">📝 Notes</button>
      </div>
      <div class="note-panel ${savedNote ? "open" : ""}" data-note-panel="${stop.id}">
        <label>
          <span>Trip notes</span>
          <textarea data-note-input="${stop.id}" placeholder="Add a note for this stop...">${savedNote}</textarea>
        </label>
        <p class="note-status" data-note-status="${stop.id}">${savedNote ? "Saved on this device" : ""}</p>
      </div>
    </article>
  `;
}

function renderDayFoodPlan(day) {
  return `
    <section class="embedded-food" aria-label="Food plan and flex options for ${day.dateLabel}">
      <p class="food-rule">${day.food.notes}</p>
      ${renderFoodOptionGroup("Locked meals", day.food.locked, "locked")}
      ${renderFoodOptionGroup("Flex options", day.food.flex, "flex")}
      ${renderFoodOptionGroup("Walk-in backups", day.food.backups, "backup")}
    </section>
  `;
}

function renderFoodOptionGroup(title, items, category) {
  return `
    <div class="food-option-group">
      <h3>${title}</h3>
      <div class="food-option-list">
        ${items.map((item) => renderFoodOption(item, category)).join("")}
      </div>
    </div>
  `;
}

function renderFoodOption(item, category = "flex") {
  return `
    <article class="food-option-card">
      <div class="food-option-top">
        <div>
          <h4><span class="food-icon">${foodIcon(item)}</span>${item.name}</h4>
          <p>${item.description}</p>
        </div>
        <span class="food-category ${category}">${foodCategoryIcon(category)} ${foodCategoryLabel(category)}</span>
      </div>
      <div class="meta-list compact">
        <div><b>Type</b><span>${item.type}</span></div>
        <div><b>Address</b><span>${item.address}</span></div>
        <div><b>Travel</b><span>${item.travel}</span></div>
      </div>
    </article>
  `;
}

function foodCategoryIcon(category) {
  if (category === "locked") return "🔒";
  if (category === "backup") return "🛟";
  return "✨";
}

function foodCategoryLabel(category) {
  if (category === "locked") return "Locked";
  if (category === "backup") return "Backup";
  return "Flex";
}

function foodIcon(item) {
  const text = `${item.name} ${item.type}`.toLowerCase();
  if (text.includes("sushi")) return "🍣";
  if (text.includes("ramen") || text.includes("soba")) return "🍜";
  if (text.includes("curry")) return "🍛";
  if (text.includes("burger") || text.includes("hamburg")) return "🍔";
  if (text.includes("wagyu") || text.includes("yakiniku") || text.includes("beef")) return "🥩";
  if (text.includes("dessert") || text.includes("soft serve") || text.includes("pancake")) return "🍨";
  if (text.includes("snack") || text.includes("street")) return "🍡";
  if (text.includes("buffet") || text.includes("seafood") || text.includes("crab")) return "🦀";
  if (text.includes("coffee") || text.includes("cafe")) return "☕";
  if (text.includes("theme-park") || text.includes("popcorn")) return "🍿";
  return "🍽";
}

function renderReservations() {
  return `
    <div class="section-title">
      <h2>🔒 Bookings</h2>
      <span>${tripData.reservations.length} anchors</span>
    </div>
    <div class="reservation-list">
      ${tripData.reservations.map((reservation) => `
        <article class="reservation-card">
          <div class="reservation-top">
            <div>
              <h3>${reservation.name}</h3>
              <p>${reservation.date} at ${reservation.time}</p>
            </div>
            <span class="booking-icon">${bookingIcon(reservation)}</span>
          </div>
          <div class="meta-list">
            <div><b>Address</b><span>${reservation.address}</span></div>
            <div><b>Confirm</b><span>${reservation.confirmation}</span></div>
            <div><b>Notes</b><span>${reservation.notes}</span></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function bookingIcon(reservation) {
  const text = `${reservation.name} ${reservation.notes}`.toLowerCase();
  if (text.includes("flight") || text.includes("haneda")) return "✈️";
  if (text.includes("transfer")) return "🚐";
  if (text.includes("giants") || text.includes("dome")) return "⚾";
  if (text.includes("teamlab")) return "🎨";
  if (text.includes("disney")) return "🏰";
  if (text.includes("romancecar") || text.includes("hakone")) return "🚄";
  if (text.includes("yokocho") || text.includes("wagyu")) return "🥩";
  if (text.includes("sushi")) return "🍣";
  if (text.includes("shibuya sky")) return "🌇";
  if (text.includes("yamato")) return "📦";
  if (text.includes("happo")) return "🦀";
  return "🎟️";
}

function renderMaps() {
  return `
    <div class="section-title">
      <h2>🗺️ Maps</h2>
      <span>Quick launch</span>
    </div>
    <article class="route-card">
      <b>Base</b>
      <p>${tripData.base}</p>
    </article>
    <div class="map-list">
      ${tripData.maps.map((item) => `
        <a class="map-button" href="${item.url}" target="_blank" rel="noreferrer">
          <strong>${item.icon} ${item.label}</strong>
          <span>${item.detail}</span>
        </a>
      `).join("")}
    </div>
    <div class="section-title sub">
      <h2>Final checklist</h2>
    </div>
    <article class="card full">
      <div class="compact-list">${tripData.checklist.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
  `;
}

function renderFood() {
  return `
    <div class="section-title">
      <h2>🍽️ Food</h2>
      <span>Closest good option wins</span>
    </div>
    <div class="food-list">
      ${tripData.days.map((day) => `
        <article class="food-day">
          <h3>${day.icon} ${day.dateLabel} - ${day.title}</h3>
          <div class="food-grid">
            ${renderFoodBlock("Locked meals", day.food.locked)}
            ${renderFoodBlock("Flex options", day.food.flex)}
            ${renderFoodBlock("Walk-in backups", day.food.backups)}
            ${renderFoodBlock("Kid-friendly", day.food.kidFriendly)}
            <div class="food-block"><b>Rule</b><ul><li>${day.food.notes}</li></ul></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderFoodBlock(title, items) {
  return `
    <div class="food-block">
      <b>${title}</b>
      <ul>${items.map((item) => `<li>${typeof item === "string" ? item : `${item.name} - ${item.type}`}</li>`).join("")}</ul>
    </div>
  `;
}

function renderScopedReservations() {
  const day = currentDay();
  const reservations = tripData.reservations.filter((reservation) => reservation.date === day.dateLabel);

  return `
    <div class="section-title">
      <h2>Bookings</h2>
      <span>${day.dateLabel}</span>
    </div>
    <div class="reservation-list">
      ${reservations.length ? reservations.map((reservation) => `
        <article class="reservation-card">
          <div class="reservation-top">
            <div>
              <h3>${reservation.name}</h3>
              <p>${reservation.date} at ${reservation.time}</p>
            </div>
          </div>
          <div class="meta-list">
            <div><b>Address</b><span>${reservation.address}</span></div>
            <div><b>Confirm</b><span>${reservation.confirmation}</span></div>
            <div><b>Notes</b><span>${reservation.notes}</span></div>
          </div>
        </article>
      `).join("") : renderEmptyScoped("No locked bookings listed for this day.")}
    </div>
  `;
}

function renderScopedMaps() {
  const day = currentDay();

  return `
    <div class="section-title">
      <h2>Maps</h2>
      <span>${day.dateLabel}</span>
    </div>
    <article class="route-card">
      <b>${day.title}</b>
      <div class="route-strip">${day.route.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
    <a class="map-button primary-map" href="${fullDayRouteUrl(day)}" target="_blank" rel="noreferrer">
      <strong><span class="map-icon">🧭</span> Open Full Day Route</strong>
      <span>${day.route.join(" -> ")}</span>
    </a>
    <div class="map-list">
      ${day.stops.map((stop) => `
        <a class="map-button" href="${stop.maps}" target="_blank" rel="noreferrer">
          <strong><span class="map-icon">${stopIcon(stop)}</span>${stop.name}</strong>
          <span>${stop.address}</span>
        </a>
      `).join("")}
    </div>
    <a class="map-button always-map" href="https://www.google.com/maps/search/?api=1&query=3-11-9%20Takadanobaba%20Shinjuku%20Tokyo%20169-0075" target="_blank" rel="noreferrer">
      <strong><span class="map-icon">🧳</span> 🏨 Airbnb — Takadanobaba</strong>
      <span>3-11-9 Takadanobaba, Shinjuku City, Tokyo 169-0075</span>
    </a>
    ${renderDayLogistics(day)}
  `;
}

function fullDayRouteUrl(day) {
  const mappableStops = day.stops
    .filter((stopItem) => stopItem.address && !["Flight", "Close"].includes(stopItem.departure))
    .slice(0, 10);
  const origin = encodeURIComponent(mappableStops[0]?.address || tripData.base);
  const destination = encodeURIComponent(mappableStops.at(-1)?.address || tripData.base);
  const waypoints = mappableStops.slice(1, -1).map((stopItem) => stopItem.address).join("|");
  const waypointPart = waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : "";
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointPart}`;
}

function renderScopedFood() {
  const day = currentDay();

  return `
    <div class="section-title">
      <h2>Food</h2>
      <span>${day.dateLabel}</span>
    </div>
    ${renderDayFoodPlan(day)}
  `;
}

function renderDayLogistics(day) {
  const items = [];
  if (day.id === "jun-09") items.push("Link DisneySea tickets in the Tokyo Disney Resort app and test Premier Access payment.");
  if (day.id === "jun-10") items.push("Protect the 6:36 PM return Romancecar.");
  if (day.id === "jun-12") items.push("Keep Shibuya Sky QR tickets accessible for 17:40-17:59 entry.");
  if (day.id === "jun-13") {
    items.push("Confirm Yamato forwarding cutoff and Haneda Terminal 3 pickup.");
    items.push("Keep overnight essentials, passports, medication, valuables, chargers, and next-day clothes.");
  }
  if (day.id === "jun-14") items.push("Decide airport transfer method in Tokyo after luggage plan is confirmed.");
  if (!items.length) return "";

  return `
    <div class="section-title sub">
      <h2>Day checklist</h2>
    </div>
    <article class="card full">
      <div class="compact-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>
    </article>
  `;
}

function renderEmptyScoped(message) {
  return `<div class="empty-state">${message}</div>`;
}

function bindDynamicEvents() {
  document.querySelectorAll(".day-select").forEach((select) => {
    select.addEventListener("change", () => {
      state.dayId = select.value;
      render();
    });
  });

  document.querySelectorAll("[data-note-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.noteToggle;
      document.querySelector(`[data-note-panel="${id}"]`)?.classList.toggle("open");
    });
  });

  document.querySelectorAll("[data-note-input]").forEach((input) => {
    input.addEventListener("input", () => {
      saveStopNote(input.dataset.noteInput, input.value);
      const status = document.querySelector(`[data-note-status="${input.dataset.noteInput}"]`);
      if (status) status.textContent = "Saved on this device";
    });
  });

  document.querySelectorAll("[data-go-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.goTab;
      tabs.forEach((item) => item.classList.toggle("active", item.dataset.tab === state.tab));
      render();
    });
  });
}

render();

function noteKey(id) {
  return `tokyo2026-note-${id}`;
}

function getStopNote(id) {
  try {
    return localStorage.getItem(noteKey(id)) || "";
  } catch (error) {
    return "";
  }
}

function saveStopNote(id, value) {
  try {
    localStorage.setItem(noteKey(id), value);
  } catch (error) {
    // Notes are best-effort when localStorage is unavailable.
  }
}
