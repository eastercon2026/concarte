import { Config } from "./config.types";

const config: Config = {
  eventName: "Iridescence",
  locale: "en",
  description: `
    An interactive map of the Iridescence venue.

    Thank you to James Shields for the venue map graphic.
  `,
  attributions: [
    // Used in the favicon
    "Direction signs icon by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "Universal Access by Justin Grasty from [Noun Project](https://thenounproject.com/browse/icons/term/universal-access/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "vending machine by Moch Rizki Eko Waluyo from [Noun Project](https://thenounproject.com/browse/icons/term/vending-machine/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "ATM by Putri Amaliya from [Noun Project](https://thenounproject.com/browse/icons/term/atm/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "euros umberella by Athok from [Noun Project](https://thenounproject.com/browse/icons/term/euros-umberella/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "screen by YOSHA from [Noun Project](https://thenounproject.com/browse/icons/term/screen/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
    "Taxi by Adrien Coquet from [Noun Project](https://thenounproject.com/browse/icons/term/taxi/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)",
  ],
  theme: {
    background: "white",
    "highlight-background": "rgb(241 245 249)",
    border: "rgb(226 232 240)",
    "primary-text": "rgb(43, 43, 43)",
    "secondary-text": "rgb(100 116 139)",
    accent: "rgb(77, 74, 186)",
    disabled: "#cbd5e1",
  },
  filters: ["Toilet", "Food", "Seating"],
  overlays: [
    {
      id: "step-free",
      label: "♿ Step-free routes",
      src: "/step-free-routes.svg",
    },
  ],
  map: {
    src: "/ground.svg",
    rooms: [
      {
        id: "livingwell",
        label: "Livingwell Health Club",
        aliases: ["Gym"],
        description: `
          A gym and fitness centre, which will be open for guests to use.

          🕗 Open 24/7

          [More information](https://www.livingwell.com/clubs/birmingham-metropole/)
        `,
        area: `
          M 10.82828 73.351078
          L 10.846366 75.768502
          L 5.3299072 81.377462
          L 5.2064006 92.843429
          L 7.9953776 95.384359
          L 7.9953776 118.3783
          L 11.093896 121.1678
          L 7.8713542 124.45235
          L 7.90236 135.17469
          L 7.0967244 139.20339
          L 11.341943 139.20339
          L 12.643673 140.44259
          L 12.705684 144.34726
          L 28.014311 140.59762
          L 43.590621 124.56449
          C 43.681781 124.47069 26.341028 108.18306 26.341028 108.18306
          L 34.273877 100.37372
          L 34.118848 85.406156
          L 23.799581 73.351078
          L 10.82828 73.351078
          z
        `,
      },
      {
        id: "swimming-pool",
        label: "Swimming Pool",
        aliases: [],
        description: `
          Indoor heated swimming pool.

          🕗 Staffed hours may vary

          [More information](https://www.livingwell.com/clubs/birmingham-metropole/)
        `,
        area: `
          m 9.4826792,98.729905 0,-11.773045 5.1414808,-5.14551
          h 12.077889
          l 5.030838,5.157756 0,11.685074 -5.30459,5.28342 -11.613153,0
          z
        `,
      },
      {
        id: "pavilion",
        label: "Pavilion",
        aliases: ["Programme", "♿ Access note"],
        description: `
          A room for talks, panels and other programme items. The seating will normally be arranged theatre-style.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Pavilion)

          ♿ There can be a chlorine smell from the swimming pool.\\
          ♿ Stage is 1-foot high. Please let Green Room know if you are on the programme and require a stage lift.
        `,
        area: `
          M 10.675761,71.36801 7.9332211,68.455026 7.9951989,50.853191 12.116755,46.762624
          h 1.952317
          l 0.03099,-0.402857 9.884977,0.111694 3.781238,3.9169 -0.123957,17.342555 -3.656719,3.575114
          z
        `,
      },
      {
        id: "salisbury-wellington",
        label: "Salisbury-Wellington",
        aliases: ["Programme"],
        description: `
          A room for talks, panels and other programme items.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Salisbury-Wellington)
        `,
        area: `
          M 56.834095,50.512313 32.786518,50.388361 30.5553,48.219113
          v -5.206177
          l 2.231215,-2.231218 -2.78902,-2.758032 -3e-6,-4.865296 2.107264,-2.045285 24.729339,0.06198
          z
        `,
      },
      {
        id: "gladstone-churchill",
        label: "Gladstone-Churchill",
        aliases: ["Programme"],
        description: `
          A room for talks, panels and other programme items.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Gladstone-Churchill)
        `,
        area: `
          m 56.834095,69.353715 -24.63637,0.247912 -1.890337,-1.952316
          v -4.989253
          l 2.603087,-2.974959 -1.983306,-1.79737 -0.06198,-5.578046 1.921327,-1.921322 24.047577,0.123952
          z
        `,
      },
      {
        id: "exec-lounge",
        label: "Executive Lounge",
        aliases: ["Food"],
        description: `
          Open to guests staying in Executive rooms or suites, and to Hilton Honors Diamond members.

          The lounge offers complimentary breakfast, all-day refreshments, and evening drinks with canapés.

          🕗 7am - 10pm

          [More information](https://hbmevents.com/executive-lounge)
        `,
        area: `
          m 30.493319,16.796121 -0.123958,-7.6233302 2.045285,-2.1382514 4.214524,0.030989 1.208575,-1.3635223 1.611436,-0.030989 1.394513,1.5184681 5.330135,-0.061978 1.456489,-1.487479 1.518467,-0.030989 1.487477,1.5804465 6.259811,-0.1239565 -0.03099,9.7305898
          z
        `,
      },
      {
        id: "brightsmith",
        label: "Brightsmith on the Water",
        aliases: ["Food", "Bar", "Seating", "Social"],
        description: `
          A bar and restaurant located on the ground floor of the hotel, with views of the river.

          Reservations required.

          Open to all guests aged 16+
          
          🕗 5pm - 12am

          [More information](https://www.brightsmithonthewater.co.uk/)
        `,
        area: `
          m 60.056968,8.4290483
          v -4.090564
          h 28.510016
          l 0.03099,1.952313
          H 89.0938
          L 89.062808,19.833055 63.46577,20.01899
          V 8.36707
          Z
        `,
      },
      {
        id: "arbor",
        label: "Arbor Restaurant",
        aliases: ["Food", "Breakfast"],
        description: `
          Serves a buffet breakfast to guests staying at the hotel.

          🕗 Weekday 6:30am - 10am\\
          🕗 Saturday & Sunday 7am - 11am

          [More information](https://hbmevents.com/the-arbor)
        `,
        area: `
        m 63.465894,21.103621 -0.124024,59.344182 12.792296,-0.02597 2.224875,-0.0045
        h 5.17e-4
        l 3.1e-5,-2.978054 1.665501,-5.9e-5
        h 4.820894
        v -7.099825
        h 2.058789 5.17e-4
        v -5.697327
        h -5.17e-4 -3.066996
        V 60.43509
        h 3.111438
        V 50.388139
        h -5.17e-4 -2.891813
        v -9.36377
        l -5.17e-4,0.0036
        v -0.0041
        l -4.135359,0.0058 0.104081,-9.8e-5
        h -0.10387
        l -0.03101,-9.978202 -9.978719,-0.09302 0.06201,-9.82369
        z
        `,
      },
      {
        id: "lifts-a",
        label: "Lifts A",
        aliases: ["Lifts"],
        description: `
          Lifts providing access to all floors of the hotel.

          Has three lift cars.
        `,
        area: `
          m 124.8582,100.84195
          v -4.075746
          h 10.43042
          v 4.119576
         `,
      },
      {
        id: "lifts-b",
        label: "Lifts B",
        aliases: ["Lifts"],
        description: `
          Lifts providing access to all floors of the hotel.
          
          Has two lift cars.
        `,
        area: `
          m 210.26137,134.18301 -0.65425,3.97267 -5.21396,-0.94312 0.35355,-3.93464
          z
        `,
      },
      {
        id: "lifts-c",
        label: "Lifts C",
        aliases: ["Lifts"],
        description: `
          Lifts providing access to all floors of the hotel.

          Has two lift cars.
        `,
        area: `
          m 40.378861,80.478817 3.96661,-0.06198
          v 7.034535
          h -3.96661
          z
         `,
      },
      {
        id: "gild-lobby-bar",
        label: "Gild Lobby Bar",
        aliases: ["Food", "Bar", "Seating", "Social"],
        description: `
          Main bar located in the hotel lobby.

          This bar will be shared with [HaruhiCon](https://www.haruhicon.co.uk/), as well as non-convention guests.

          They will be serving a condensed version of their standard menu, with a 20% discount on some food and beverage on presentation of a badge.

          It will also be serving late night pizza, bacon rolls or spicy wedges between 11pm and 2am.

          🍽️ [Food menu](https://www.hilton.com/en/hotels/bhxmetw-hilton-birmingham-metropole/dining/gild-lobby-bar/?htmlMenu4ActiveTab=1)

          🕗 Open 24/7
        `,
        area: `
          m 93.959094,120.05195 -32.166734,0.18593
          v -7.37541
          l -1.797373,-1.73539 -3.470783,0.12395
          L 45.34677,122.7565 34.026086,111.46797 56.834097,89.031822
          h 6.60069
          V 85.46807
          h 26.092862
          v 2.727047
          h 1.363522
          V 106.2308
          l 3.191883,2.32419
          z
        `,
      },
      {
        id: "london",
        label: "London",
        aliases: ["Games", "Social"],
        description: `
          A room to play board games, card games, roleplaying games, and other tabletop games.

          A library of games will be available, or you are welcome to bring your own.

          Overflow seating is available in the [Mezzanine rooms](/room/stairs-mezzanine) (Note: these do not have step-free access)

          📑 [Scheduled games](https://guide.eastercon2026.org/loc/London%20(Scheduled))

          🕗 Friday 3pm - 9pm \\
          🕗 Saturday 10am - 9pm \\
          🕗 Sunday 10am - 9pm \\
          🕗 Monday 10am - 4pm
        `,
        area: `
          M 90.240402,53.230546
          V 41.016293
          l 16.362138,-0.02114
          v 6.542212
          h 1.54959
          v 5.69319
          z
        `,
      },
      {
        id: "cambridge",
        label: "Cambridge",
        aliases: ["Green Room"],
        description: `
          If you are on a programme item, please come to the Green Room 15 minutes before your item is due to start.
          This will give us time to check you in, and to allow you to meet any co-panelists or speakers you may have.

          You will be provided with a free drink (hot, cold, alcoholic or non-alcoholic).
        `,
        area: `
          M 90.240402,66.184011
          V 53.230548
          h 17.911728
          v 12.953463
          z
        `,
      },
      {
        id: "oxford",
        label: "Oxford",
        aliases: [
          "Ops Room",
          "Help",
          "Information",
          "Lost and found",
          "Registration",
          "Volunteer",
        ],
        description: `
          Where the behind the scenes magic happens.

          If you have any questions, need help with anything, or want to volunteer to help out, please come to the Ops Room.

          If you need to pick up your badge after the [Registration Desk](/room/registration) has closed, you can also come here to collect it.

          🕗 Friday 8:45am - 10pm \\
          🕗 Saturday 8:45am - 10pm \\
          🕗 Sunday 8:45am - 10pm \\
          🕗 Monday 8:45am - 3pm
        `,
        area: `
          M 90.240402,66.184011
          H 108.15213
          V 77.47287
          L 90.240402,77.41089
          Z
        `,
      },
      {
        id: "registration",
        label: "Registration Desk",
        aliases: ["Registration"],
        description: `
          The place to go to check in and get your badge when you first arrive.

          Please bring a form of ID with you - something with your photo and name on it, in case you’re not known to the staff/volunteers at the desk.

          If you need to pick up your badge after the Registration Desk has closed, please come to the [Ops Room](/room/oxford) to collect it.

          🕗 Thursday 4pm - 6pm \\
          🕗 Friday 9am - 5pm \\
          🕗 Saturday 9am - 5pm \\
          🕗 Sunday 9am - 5pm
        `,
        area: `
          m 95.384595,79.270237
          h 11.589945
          v 3.780676
          H 95.384595
          Z
        `,
      },
      {
        id: "main-entrance",
        label: "Main Entrance",
        aliases: ["Entrance", "Car park"],
        description: `
          The main entrance to the hotel and convention.

          This entrance leads to the car park.
        `,
        area: `
          m 105.85892,113.42027
          a 4.0905676,4.0905676 0 0 1 -4.09056,4.09057 4.0905676,4.0905676 0 0 1 -4.090571,-4.09057 4.0905676,4.0905676 0 0 1 4.090571,-4.09056 4.0905676,4.0905676 0 0 1 4.09056,4.09056
          z
        `,
      },
      {
        id: "hotel-reception",
        label: "Hotel Reception",
        aliases: ["Reception", "♿ Access note"],
        description: `
          The reception desk for the hotel.

          This is separate from the [Registration Desk](/room/registration) for the convention.

          🕗 Open 24/7

          ♿ A low-level counter is available at the [Concierge Desk](/room/concierge-desk) that can be used for check-in.
        `,
        area: `
          m 111.92975,83.487145
          h 13.19141
          l -0.0438,2.629517
          h 3.33072
          v 10.64954
          h -3.54985
          v 2.037873
          l -12.92845,-0.147566
          z
        `,
      },
      {
        id: "concierge-desk",
        label: "Concierge Desk",
        aliases: ["Concierge", "Help", "♿ Access note"],
        description: `
          The concierge desk for the hotel.

          This is separate from the [Registration Desk](/room/registration) for the convention.

          The team provides assistance with luggage storage, taxi bookings, NEC area directions, and restaurant reservations.

          🕗 Open 24/7

          ♿ A low-level counter is available, which can also be used for check-in.
        `,
        area: `
          m 111.92978,98.656507 12.92842,0.147568
          v 4.010015
          h -12.92845
          z
        `,
      },
      {
        id: "gild-to-go",
        label: "Gild To Go",
        aliases: ["Food"],
        description: `
          A takeaway food outlet located in the hotel lobby.

          Sells sandwiches, snacks and drinks.

          There is a 20% discount on both food and beverage on presentation of a badge.
          
          🕗 Open 7am - 10pm
          `,
        area: `
          m 83.001221,113.62481
          h 10.963113
          v 6.43187
          H 83.001221
          Z
        `,
      },
      {
        id: "princes",
        label: "Princes",
        aliases: ["Art show", "Earls", "Dukes"],
        description: `
          View and purchase art made by some of our members.

          Includes paintings, prints, jewelry, and other crafts.

          Our dealers and art show are open to members of both Iridescence and [HaruhiCon](https://www.haruhicon.co.uk/).
          
          🕗 Friday 3pm - 5pm (previews)\\
          🕗 Friday 5pm - 8pm\\
          🕗 Saturday 10am - 6pm\\
          🕗 Sunday 10am - 4pm\\
          🕗 Sunday 4pm - 6pm (collection of purchased works)
        `,
        area: `
          m 114.65995,40.984725 23.05582,-0.141028
          v 36.691149
          l -24.48142,0.123965
          V 47.475375
          h 1.54946
          z
        `,
      },
      {
        id: "queens",
        label: "Queens",
        aliases: ["Dealers"],
        description: `
          A selection of dealers selling books, comics, games, and other merchandise.
          
          Our dealers and art show are open to members of both Iridescence and [HaruhiCon](https://www.haruhicon.co.uk/).

          🕗 Friday 3pm - 8pm\\
          🕗 Saturday 10am - 6pm\\
          🕗 Sunday 10am - 6pm\\
          🕗 Monday 10am - 2pm
        `,
        area: `
          m 137.71577,40.843697 33.28244,0.06819 0.12387,36.74692 -33.40631,-0.123965
          z
        `,
      },
      {
        id: "arden",
        label: "Arden",
        aliases: ["Fan lounge", "Social", "Seating", "Hampton", "Henley"],
        description: `
          A space to relax, socialise, and eat food.
        `,
        area: `
          m 145.01783,83.224192
          h 23.09592
          l -4e-5,2.541868 1.6654,1.314759
          v 10.737189
          l -1.70923,1.490059
          v 2.103613
          h -20.11575
          l -1.05181,-0.7012
          V 88.0888
          h -1.88449
          z
        `,
      },
      {
        id: "kent",
        label: "Kent",
        aliases: ["Listeners"],
        description: `
          A space to have private conversations with the listeners team, who are available to listen to any complaints.
        `,
        area: `
          m 184.50937,65.635015
          h 7.93322
          v 7.065531
          h -7.87122
          z
        `,
      },
      {
        id: "sussex",
        label: "Sussex",
        aliases: ["Programme", "Filk"],
        description: `
          A room for round-tables and other programme items.

          Late night, turns into the [filk](https://filk.co.uk/whatfilk.html) room, where attendees can perform or listen to music.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Sussex)
        `,
        area: `
          m 192.44259,65.635015
          h 8.42907
          l 0.12396,11.775879
          h -8.36707
          z
        `,
      },
      {
        id: "balmoral",
        label: "Balmoral",
        aliases: ["Programme", "♿ Access note"],
        description: `
          A room for talks, panels and other programme items.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Balmoral)

          ♿ For step-free access to Balmoral, please follow the purple step-free route through the lower corridor, starting to the right of the hotel reception.\\
          ♿ Stage is 1-foot high. Please let Green Room know if you are on the programme and require a stage lift.
        `,
        area: `
          m 191.11005,17.260961 18.54701,0.01549
          V 59.80905
          l -18.51599,0.123963 -3.96661,-3.842655 0.30985,-35.45158
          z
        `,
      },
      {
        id: "sandringham",
        label: "Sandringham",
        aliases: ["Programme", "♿ Access note"],
        description: `
          A room for talks, panels and other programme items.

          📑 [Programme schedule](https://guide.eastercon2026.org/loc/Sandringham)

          ♿ For step-free access to Sandringham, please follow the purple step-free route through the lower corridor, starting to the right of the hotel reception.\\
          ♿ Stage is 1-foot high. Please let Green Room know if you are on the programme and require a stage lift.
        `,
        area: `
          m 209.65705,17.27646 18.54701,0.01549 3.78068,3.625734 -10e-6,35.203667 -3.68771,3.625731 -18.63996,0.06197
          z
        `,
      },
      {
        id: "haruhicon",
        label: "HaruhiCon",
        description: `
          Iridescence is sharing the venue with [HaruhiCon](https://www.haruhicon.co.uk/), a convention for fans of anime, manga and Japanese pop culture.

          These rooms are used for HaruhiCon's programming, and are not accessible without a HaruhiCon badge.
        `,
        area: `
          M 229.78442 74.807837
          L 223.47525 81.673051
          L 217.33557 88.353263
          L 210.95302 95.298059
          L 225.98414 109.15096
          L 232.52896 102.33897
          L 238.92082 95.686666
          L 245.09977 89.255017
          L 229.78442 74.807837
          z

          M 191.94694 83.205774
          L 191.94694 87.110445
          L 186.15194 87.110445
          L 186.15194 83.329797
          L 171.83499 83.329797
          L 171.83499 101.52042
          L 186.12094 101.54006
          L 186.12817 97.182182
          L 200.62393 97.244194
          L 201.15051 96.562065
          L 201.15051 83.205774
          L 191.94694 83.205774
          z

          M 267.00231 96.810111
          L 232.63541 111.34411
          L 230.00146 116.86005
          L 232.92893 124.0932
          L 230.21851 125.07195
          L 230.55905 126.06362
          L 225.94176 128.04696
          L 225.47719 126.90078
          L 222.5952 127.95395
          L 220.89039 123.46068
          L 214.36728 126.12563
          L 216.36612 130.95997
          L 217.72986 130.40238
          L 217.85389 130.83594
          L 215.99457 134.89564
          L 214.25876 135.70128
          L 210.26158 134.18302
          L 207.99919 148.15892
          L 212.86453 159.47037
          L 210.09209 160.69252
          L 212.39944 165.79195
          L 215.31244 164.55223
          L 230.12549 199.9418
          L 246.98337 193.09364
          L 230.99314 154.63604
          L 231.92279 154.20196
          L 231.51972 153.36532
          L 240.10369 150.08024
          L 241.52944 153.39632
          L 244.34943 152.31163
          L 249.02873 163.56056
          L 255.3193 166.31853
          L 289.31464 152.40465
          L 292.22764 145.86603
          L 273.20038 99.413053
          L 267.00231 96.810111
          z
        `,
      },
      {
        id: "millers-bar",
        label: "Miller's Bar",
        aliases: ["Bar", "Food", "HaruhiCon", "Seating", "Social"],
        description: `
          A bar located on the ground floor of the hotel, near the main entrance.

          Primarily for use by HaruhiCon attendees, though open to all guests aged 16+

          [More information](https://hilton-birmingham.stagingbda.co.uk/millers)
        `,
        area: `
          m 177.07192,107.8916 4.21462,0.0126 -0.062,-3.53277
          h 9.51367
          v 10.3504
          h 4.52441
          v 10.5673
          l 11.12511,0.031 1.45648,3.47078 -0.99164,0.55779 -29.65669,-0.062
          z
        `,
      },
      {
        id: "nec",
        label: "Path to the NEC",
        aliases: ["NEC", "Food", "Train station", "Exit"],
        description: `
          # Resorts World

          Food and shopping, located next to the NEC. 0.5 mile walk from the hotel.

          [Resorts World food outlets](https://www.resortsworldbirmingham.co.uk/eat-drink)

          🕗 Friday & Saturday 8am - 12am \\
          🕗 Sunday 10am - 10pm \\
          🕗 Monday - Thursday 8am - 10pm \\
          Individual restaurant opening times may vary.

          # NEC

          0.5 mile walk from the hotel.

          The NEC has a variety of food outlets, including a large food court with options for various dietary requirements.

          You can also cut through the NEC to get to Birmingham International station.

          [NEC food outlets](https://www.thenec.co.uk/visitors/food-and-drink/)

          🕗 Open 6am - midnight
        `,
        area: `
        m 221.01463,114.31897 25.16311,-26.185824 3.09892,-16.424251
        c 40.61533,-3.994589 30.71182,24.222977 23.92362,27.704299
        l -6.19784,-2.60309 -3.87363,1.673418 -1.23957,-2.851002 -28.16913,11.7139 1.30154,2.91298 -2.38617,1.08462 -3.25386,3.34683 -3.6271,3.74629
        z
        `,
      },
      {
        id: "stairs-mezzanine",
        label: "Mezzanine Stairs",
        aliases: [
          "Stairs",
          "Games",
          "Ascot",
          "Devon",
          "Durham",
          "Sunningdale",
          "Windsor",
          "Meeting",
          "Newsletter",
          "♿ Access note",
        ],
        description: `
          Stairs providing access to Ascot, Devon, Durham, Sunningdale, and Windsor.

          Has space for overflow seating for the [games room](/room/london).

          ♿ Not accessible by wheelchair. There is no lift access to these rooms.
        `,
        area: `
          m 179.78688,66.88855
          h 4.75787
          v 5.55625
          h -4.75787
          z
        `,
      },
      {
        id: "stairs-kent-sussex",
        label: "Stairs and ramp (Kent and Sussex)",
        aliases: ["Stairs", "♿ Access note"],
        description: `
          Stairs providing access to Kent and Sussex.

          ♿ Four steps with a ramp alongside. There is also a stair lift available.
        `,
        area: `
          m 171.12209,70.345367
          h 6.54562
          v 12.98445
          h -6.54562
          z
        `,
      },
      {
        id: "stairs-balmoral-sandringham",
        label: "Stairs (Balmoral and Sandringham)",
        aliases: ["Stairs", "♿ Access note"],
        description: `
          Stairs providing access to Balmoral and Sandringham.

          ♿ Four steps with no ramp or stair lift. For step-free access to Balmoral and Sandringham, please follow the green step-free route to the lower corridor, and then the purple step-free route to Balmoral and Sandringham.
        `,
        area: `
          m 198.34102,77.543183 2.6546,-0.132289 -0.009,5.79497 -2.64588,-0.02667
          z
        `,
      },
      {
        id: "stairs-bedrooms",
        label: "Stairs (Bedrooms)",
        aliases: ["Stairs", "Guest bedrooms"],
        description: `
          Stairs providing access to the guest bedrooms on the upper floors of the hotel.

          For lift access, use Lifts A opposite.
        `,
        area: `
          m 119.61739,111.83927 5.41143,-1.09113 1.09823,5.44663 -5.41143,1.09114
          z
        `,
      },
      {
        id: "toilets-c-w-urinals",
        label: "Toilets (with urinals)",
        aliases: ["Toilets"],
        description: `
          Toilets with urinals and cubicles.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in. However, please note that these toilets are also used by non-convention guests, and may be labelled as men's toilets.
        `,
        area: `
          m 43.077267,77.193962
          h 2.724694
          v 3.242686
          h -2.724694
          z
        `,
      },
      {
        id: "toilets-c-no-urinals",
        label: "Toilets (without urinals)",
        aliases: ["Toilets"],
        description: `
          Toilets without urinals, only cubicles.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in. However, please note that these toilets are also used by non-convention guests, and may be labelled as women's toilets.
        `,
        area: `
          m 47.909225,77.19397
          h 2.841168
          v 3.377819
          h -2.841168
          z
        `,
      },
      {
        id: "toilets-c-accessible",
        label: "Accessible Toilet",
        aliases: ["Toilets"],
        description: `
          Accessible toilets with a wide cubicle and support rails.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in.
        `,
        area: `
          m 50.951075,77.193968
          h 2.841168
          v 3.377819
          h -2.841168
          z
        `,
      },
      {
        id: "toilets-corridor-w-urinals",
        label: "Toilets (with urinals)",
        aliases: ["Toilets", "♿ Access note"],
        description: `
          Toilets with urinals and cubicles.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in. However, please note that these toilets are also used by non-convention guests, and may be labelled as men's toilets.

          ♿ There are four steps down to the stalls. The urinals and sink are step-free. The accessible toilet, and the toilets near [Lift C](/room/toilets-c-w-urinals) are step free.
        `,
        area: `
          m 135.59667,84.670428
          h 2.84117
          v 3.377819
          h -2.84117
          z
        `,
      },
      {
        id: "toilets-corridor-no-urinals",
        label: "Toilets (without urinals)",
        aliases: ["Toilets", "♿ Access note"],
        description: `
          Toilets without urinals, only cubicles.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in. However, please note that these toilets are also used by non-convention guests, and may be labelled as women's toilets.

          ♿ There is one step down to the stalls. The sink area is step-free. The accessible toilet, and the toilets near [Lift C](/room/toilets-c-no-urinals) are step free.
        `,
        area: `
          m 132.17772,84.670428
          h 2.84117
          v 3.377819
          h -2.84117
          z
        `,
      },
      {
        id: "toilets-corridor-accessible",
        label: "Accessible Toilet",
        aliases: ["Toilets"],
        description: `
          Accessible toilets with a wide cubicle and support rails.

          The convention's policy is that people are welcome to use the toilets that they feel most comfortable in.
        `,
        area: `
          m 139.17382,83.224194
          h 2.84117
          v 3.377819
          h -2.84117
          z
        `,
      },
      {
        id: "vending-machine",
        label: "Vending Machine",
        aliases: ["Food", "Drinks"],
        description: `
          A vending machine selling snacks and drinks.

          Accepts both cash and card payments.

          🕗 Open 24/7
        `,
        area: `
          m 35.540764,109.97798 -3.023631,-2.66264 3.093976,-2.82754 2.815632,2.75926
          z
        `,
      },
      {
        id: "umberella-hire",
        label: "Umbrella Hire",
        description: `
          Rent an umberella. £3 for 48 hours.
        `,
        area: `
          m 108.7882,108.70634
          h 3.08542
          v 3.21479
          h -3.08542
          z
        `,
      },
      {
        id: "taxi-hire",
        label: "Uber Hire",
        description: `
          Computer terminal where you can book Uber taxis.
        `,
        area: `
          m 111.87362,108.70634
          h 3.08542
          v 3.21479
          h -3.08542
          z
        `,
      },
      {
        id: "atm",
        label: "ATM",
        description: `
          Cash machine where you can withdraw cash.

          Charges £1.99
        `,
        area: `
          m 114.95904,108.70634
          h 3.08542
          v 3.21479
          h -3.08542
          z
        `,
      },
      {
        id: "seats-lobby",
        label: "Lobby Seating",
        aliases: ["Seating", "Social"],
        description: `
          Seating area in the hotel lobby. A long couch runs along the wall.

          This area will be shared with [HaruhiCon](https://www.haruhicon.co.uk/), as well as non-convention guests.
        `,
        area: `
          m 90.894109,88.198049
          h 2.803418
          V 102.3908
          h -2.803418
          z
         `,
      },
      {
        id: "seats-corridor",
        label: "Corridor Seating",
        aliases: ["Seating", "Social"],
        description: `
          Seating area in the top corridor. A couple of alcoves have two-seater couches.
        `,
        area: `
          M 153.42733 77.570459
          L 153.42733 80.536686
          L 156.57959 80.536686
          L 156.57959 77.570459
          L 153.42733 77.570459
          z

          M 158.56396 77.6118
          L 158.56396 80.578027
          L 161.71571 80.578027
          L 161.71571 77.6118
          L 158.56396 77.6118
          z
        `,
      },
      {
        id: "food-trucks",
        label: "Food Trucks",
        aliases: ["Food"],
        description: `
          Food trucks located in the car park, near the main entrance.
          
          Three options which will vary daily:

          * Street Souvlaki (Greek BBQ street food)
          * Victoria Creperie desserts (Easter-themed menu)
          * Nayia's Nuggies (with variations/specials daily i.e nuggets, fried chicken, loaded fries)

          🕗 Friday 5pm - 9pm\\
          🕗 Saturday & Sunday Midday - 9pm\\
          🕗 Monday Midday - 3pm
        `,
        area: `
          m 87.329079,133.20099
          h 29.104171
          v 8.63202
          H 87.329079
          Z
        `,
      },
    ],
  },
};

export default config;
