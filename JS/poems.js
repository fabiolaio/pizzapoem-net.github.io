const poemsArray = [
    "Roses are red,\nPizzas are too,\nI ordered a large,\nAnd none of it's for you.",
    "Love is like a pizza,\nWarm,\ndelightful and cheesy,\nBut it's best enjoyed,\nWith someone not too greasy.",
    "Amidst the glow of screens,\nPizza warms my solitary heart,\nBytes and bites,\nmy dual arts.",
    "Lost in the digital sea,\nI find solace in a slice,\nMelted cheese,\nlife's spice.",
    "To the lighthouse of my WiFi,\nGuide my pizza's delivery swift,\nFor love and hunger,\nI drift.",
    "Chatrooms buzzing,\nkeyboards click,\nYet in the quiet of the night,\nPizza's aroma feels just right.",
    "Love letters in binary,\nYet,\nthe heart craves something primary,\nCheese and crust,\na love so culinary.",
    "Pixels portray our modern love,\nBut pizza? Timeless,\nfrom above,\nBaked warmth,\na digital world devoid of.",
    "Love's vast ocean,\nthe internet deep,\nYet in my kitchen,\npassions leap,\nA pizza,\nmy heart to keep.",
    "Tweets flutter,\nposts rise and fall,\nIn pizza's embrace,\nI recall,\nTrue love's timeless protocol.",
    "Love's algorithm,\ncomplex and vast,\nYet,\npizza's allure,\nunsurpassed,\nIn melted moments,\nmemories cast.",
    "Within the screen's cold light,\nPizza brings a warmth so bright,\nLove tangible,\nevery bite.",
    "Love online,\nfleeting and fast,\nPizza's comfort,\never to last,\nIn its crust,\nmemories of the past.",
    "Data flows,\nlove's new stream,\nYet pizza remains,\na tangible dream,\nWarm and real,\nlove's supreme.",
    "The web weaves tales of modern age,\nYet pizza,\ntimeless,\nturns the page,\nLove's true story,\nstage by stage.",
    "Emojis convey,\nfeelings slight,\nBut pizza,\nin its savory might,\nWhispers of love,\nevery bite.",
    "In the vast digital sprawl,\nPizza stands,\nlove's beckoning call,\nReal,\nwarm,\nbreaking the protocol.",
    "Online,\nlove's echo may fleet,\nBut in pizza's rhythm,\nhearts beat,\nLove's true form,\nsavory and sweet.",
    "In the vast digital sprawl,\nPizza stands,\nlove's beckoning call,\nReal,\nwarm,\nbreaking the protocol.",
    "Pixels portray our modern love,\nBut pizza,\nin its golden glow,\nWhispers of love,\nstories to bestow.",
    "Amidst the digital,\nlove's cart,\nPizza offers a restart,\nLove's true form,\never smart.",
    "In the vastness of the online tide,\nPizza stands,\nby love's side,\nWarm and real,\nlove's true guide.",
    "Streams of data,\nlove's new age plea,\nYet pizza,\nin its simplicity,\nTells of love,\npure and free.",
    "Amidst the hum of servers,\nso fleet,\nPizza offers a retreat,\nWhere digital and real love meet.",
    "To the web,\nhearts may race,\nBut pizza offers an embrace,\nLove's true form,\nin every trace.",
    "In the web's vast domain so wide,\nPizza stands,\nlove's true guide,\nIn its warmth,\nemotions reside.",
    "Love online,\na modern spree,\nYet pizza,\nwith its legacy,\nTells of love,\nwild and free.",
    "Amidst the glow of LED light,\nPizza offers love,\npure and bright,\nAn embrace,\nholding tight.",
    "Algorithms define love's new start,\nYet pizza remains,\nlove's true part,\nAn ode to the culinary art.",
    "Amidst the digital,\nlove's art,\nPizza,\ntimeless,\nplays its part,\nWhispers of love,\nstraight from the heart.",
    "In the online maze,\nhearts dart,\nYet,\npizza's allure,\noff the chart,\nIts warmth,\nlove's counterpart.",
    "Amidst pixels and data so smart,\nPizza remains,\nlove's true heart,\nA symphony,\nevery part.",
    "To the lighthouse of my web's glow,\nPizza's warmth begins to grow,\nA love story,\nbite by bite,\nit does show.",
    "In the digital night's afterglow,\nPizza stands,\nlove's true bow,\nA timeless story,\nits warmth does bestow.",
    "Amidst the bytes,\nlove might slow,\nBut pizza,\nin its radiant throw,\nWhispers tales of love,\nin each tow.",
    "Love's new age,\nfast and low,\nYet,\npizza stands,\ncasting a golden glow,\nStories of love,\nit does bestow.",
    "In the online realm,\nlove might forgo,\nBut pizza,\nwith its dough,\nRekindles love,\nmaking it grow.",
    "In a vast universe so wide,\nPizza becomes our singular guide,\nIs love real,\nor just pride?,\nOr merely flavors that coincide?",
    "Existence is fleeting and brief,\nYet,\npizza offers some relief,\nLove's joy or its grief,\nIn every slice,\na belief.",
    "Why are we here,\nand to what end?,\nFor love,\nor just to attend,\nA pizza party with a friend,\nSeeking answers around the bend.",
    "The void stares back,\nso vast,\nYet,\npizza's warmth contrasts,\nThe questions of the past,\nLove's moment,\nwill it last?",
    "In a world,\nso uncertain and hazy,\nLove's like a pizza,\nwarm and cheesy,\nBut is it real,\nor just a phase we,\nNavigate,\nlost and uneasy?",
    "To be or not,\nthe eternal query,\nYet,\npizza's allure is not so eerie,\nDoes love's truth make us teary,\nOr is it just culinary theory?",
    "In the cosmos,\nwhere do we stand?,\nWith a pizza slice in hand,\nIs love scripted,\nor just unplanned?,\nLife's mysteries,\nlike grains of sand.",
    "Existential dread,\nthe human plight,\nYet pizza brings a spark so bright,\nIs love the answer,\nor just a slight,\nGlimmer in the endless night?",
    "Life's meaning,\never so elusive,\nYet pizza's charm is not reclusive,\nIs love's dance so exclusive,\nOr just flavors,\neffusive and effulgent?",
    "In the abyss,\nwe search for a sign,\nWith pizza and love,\nthings align,\nBut what's the design,\nOf this existential line?",
    "The cosmos vast,\nour place so tiny,\nYet in pizza,\nwe find love's shinny,\nEcho,\na tune so whiny,\nOr truth's eternal spinny?",
    "To exist or fade,\nthe poignant song,\nYet with pizza,\ncan we go wrong?,\nDoes love to us belong,\nOr is it just a life-long gong?",
    "Sartre said,\n\"Hell is other people\",\nBut with pizza,\nall feels equal,\nIs love the towering steeple,\nOr just life's next sequel?",
    "Kierkegaard's leap of faith so grand,\nMeets pizza,\nin love's warm land,\nIs it fate's hand,\nOr just existential sand?",
    "Camus found life absurd and stark,\nYet pizza lights the existential dark,\nIs love the needed spark,\nOr just a fleeting lark?",
    "Nietzsche proclaimed God's demise,\nBut in pizza,\nlove's truth lies,\nIs it the universe's ties,\nOr just existential cries?",
    "In a society of pure desire,\nPizza,\na symbol of capitalist mire,\nYet in its layers,\nlove does conspire,\nA truth more profound than mere culinary fire.",
    "Does not love,\nlike a pizza slice,\nOffer a temporary capitalist paradise?,\nThe toppings,\nchoices,\nall a guise,\nFor the void it can never suffice.",
    "Love's dialectic,\nmuch like cheese,\nStretches,\npulls,\names to please,\nBut beneath,\nthere's always unease,\nAn emptiness no pizza can appease.",
    "In the realm of the Real,\nlove's a maze,\nMuch like choosing pizza's toppings and glaze,\nYet both are traps,\nin capitalism's haze,\nSymbols of a society in malaise.",
    "Isn't pizza,\nin its circular form,\nA representation of societal norm?,\nYet love,\never rebellious,\never warm,\nSeeks to go beyond,\nto transform.",
    "Lacan said,\n'Desire is the desire of the Other',\nPizza,\nthen,\nthe desire of the mother?,\nLove,\nan attempt to seek another,\nYet both are fraught,\nlike no other.",
    "In the gaze of the Other,\nwe seek validation,\nIn pizza,\nwe seek mere satiation,\nBut love,\nit demands a foundation,\nBeyond mere capitalist jubilation.",
    "Does not the crust signify the boundary,\nOf love's limit,\nits profound quandary?,\nYet,\nwith each bite,\nthere's a sundry,\nTaste of truth,\nand also,\nof quandary.",
    "Hegel's dialectic,\nthesis and antithesis,\nLove and pizza,\na modern synthesis?,\nYet,\nin the jouissance,\nthere's a twist,\nAn emptiness,\nthat always persists.",
    "The crust,\nthe boundary of the Real,\nThe toppings,\nsymbols of the societal deal,\nBut love,\ndoes it not make us feel,\nA rupture,\na truth,\nthat's truly surreal?",
    "In the Spectacle,\nlove is commodified,\nLike pizza,\npackaged,\nand sold worldwide,\nYet,\ntrue love can't be identified,\nBy capitalist measures,\nhowever tried.",
    "Pizza,\na comfort in late capitalism's despair,\nLove,\na hope,\nthin as air,\nBoth are consumed,\nwith little care,\nIn the grand theatre,\nof society's fair.",
    "Is not the pizza slice,\nin its triangular shape,\nAn echo of the Other's gaping gape?,\nLove too,\ntries to drape,\nBut in the Real,\nalways ends up an escape.",
    "The pepperoni,\na signifier,\nstands apart,\nMuch like love's ever-beating heart,\nYet both,\nin the end,\nare a la carte,\nTransient moments,\nthat soon depart.",
    "Cheese,\nstretching between slices,\nLike love's many vices,\nYet,\nin the capitalist crisis,\nBoth are mere market devices.",
    "The void,\never present,\nalways lurking,\nIn love's shadows,\nalways working,\nYet pizza,\ncapitalism's perking,\nOffers a momentary shirking.",
    "Does not the oven's heat,\nSymbolize love's ultimate feat?,\nYet,\nin the end,\nboth are bittersweet,\nMoments of joy,\nand also,\nof defeat.",
    "Pizza,\na commodity,\nin endless supply,\nLove,\nthough,\ncan't be bought,\nno matter how high,\nYet both,\nunder capitalism's sky,\nAre fleeting moments,\npassing by.",
    "The sauce,\nhidden,\nyet profound,\nLike love's emotions,\ndeep and unbound,\nYet,\nin the Spectacle,\nboth are drowned,\nIn the noise,\nthe unending sound.",
    "Capitalism's logic,\nalways consumes,\nTurning love into mere perfumes,\nYet pizza,\nin its many plumes,\nOffers a joy,\nthat sometimes resumes.",
    "The slice,\na fragment of the whole,\nMuch like love,\na part of the soul,\nYet,\nin the capitalist dole,\nBoth are played,\na mere role.",
    "Pizza's allure,\nglobal and wide,\nMuch like love,\ncan't be denied,\nYet,\nbeneath the cheese,\ndoes hide,\nThe truth of the system,\nworldwide.",
    "Swiping right,\non a moonlit night,\nA notification,\nand my heart takes flight,\nJust like that pizza,\nsoon in sight,\nDelivered to my door,\noh what a delight.",
    "Pixelated love,\non a screen so clear,\nClicking 'order now',\nand pizza is near,\nBoth satisfying,\nbringing cheer,\nIn a digital age,\nwhat's more dear?",
    "Love's text notification,\na beep so sweet,\nJust like the app,\nwhere pizzas I greet,\nBoth signaling,\na brighter day,\nIn bytes and bites,\nlove's retreat.",
    "In chat rooms,\nour love did start,\nMuch like the pizza cart,\nAdding toppings,\na work of art,\nBoth delivered,\nstraight to the heart.",
    "Virtual hugs,\nand digital kiss,\nOrdering pizza,\nin online bliss,\nBoth modern love,\nhard to dismiss,\nMoments of joy,\nin the internet abyss.",
    "Emojis of love,\nsent your way,\nJust like the pizza tracker's display,\nBoth signaling,\na brighter day,\nIn the digital dance,\nof love's foray.",
    "Video calls,\nfaces aglow,\nPizza on its way,\nthe app does show,\nBoth connections,\nmake hearts grow,\nIn the vast web,\nlove's undertow.",
    "Tweets of affection,\nposts of the heart,\nPizza on order,\na culinary art,\nBoth in the digital age,\nplay their part,\nWhispers of love,\nfrom the start.",
    "Online dates,\nand virtual spree,\nOrdering pizza,\njust for me,\nBoth moments of joy,\nin the digital sea,\nConnections made,\nin pixels and glee.",
    "In the web of love,\nconnections are spun,\nJust like the pizza,\nhot and done,\nBoth delivered,\nunder the same sun,\nIn the digital age,\nlove's fun.",
    "Streaming love,\nin HD clear,\nPizza on its way,\ndrawing near,\nBoth moments,\nwe hold dear,\nIn the vast net,\nof joy and fear.",
    "Binary love,\nin zeros and ones,\nOrdering pizza,\nwith toppings and buns,\nBoth modern tales,\nwith twists and puns,\nWhispers of joy,\nin digital runs.",
    "Pixelated romance,\nso profound,\nJust like the pizza,\nround and round,\nBoth connections,\nin the web found,\nMoments of love,\nin bytes and sound.",
    "Love's status update,\non my wall,\nPizza on its way,\nthe app does call,\nBoth signaling,\na connection's thrall,\nIn the digital age,\nlove's protocol.",
    "Emojis of heart,\nand pizza slice,\nBoth in the digital age,\nfeel nice,\nWhispers of love,\nin a modern vice,\nConnections made,\nin a digital dice.",
    "Swipe left,\nand love's gone astray,\nBut pizza's just a click away,\nBoth moments of joy,\nand some say,\nIn the vast web,\nlove's display.",
    "Virtual love,\nin pixels deep,\nOrdering pizza,\nfor a treat,\nBoth connections,\nin the digital sweep,\nMoments of joy,\nhearts leap.",
    "Streaming romance,\nbuffering love,\nPizza on its way,\nfrom above,\nBoth moments,\nwe're thinking of,\nIn the digital age,\nlove's push and shove.",
    "Digital love,\na modern feat,\nJust like the pizza,\nhot and neat,\nBoth moments,\nin bytes and wheat,\nWhispers of joy,\nin a digital beat.",
    "Love's ping,\na notification sweet,\nPizza on its way,\na treat,\nBoth moments,\nin the digital street,\nConnections made,\nhearts meet.",
    "Bytes of affection,\nin the vast web spun,\nJust like the pizza,\nhot and done,\nBoth modern tales,\nunder the sun,\nWhispers of love,\nnever outdone.",
    "Online romance,\nhearts in sync,\nOrdering pizza,\nin a blink,\nBoth moments of joy,\nand we think,\nIn the digital age,\nlove's link.",
    "Streaming hearts,\nbuffering kiss,\nPizza on its way,\nbliss,\nBoth moments,\nin the vast abyss,\nWhispers of love,\nand pizza's hiss.",
    "Love in bytes,\na modern song,\nOrdering pizza,\nwon't be long,\nBoth moments,\nin the web throng,\nWhispers of affection,\nstrong.",
    "Ping of love,\na message clear,\nPizza on its way,\ndrawing near,\nBoth connections,\nin the digital sphere,\nMoments of joy,\nwe hold dear.",
    "Love's email,\nin the inbox glow,\nOrdering pizza,\nwith toppings to show,\nBoth moments,\nin the web's flow,\nWhispers of affection,\nin tow.",
    "Binary affection,\nin zeros and twos,\nPizza on its way,\ngood news,\nBoth moments,\nwe never lose,\nIn the vast net,\nlove's cues.",
    "Love's emoji,\nand pizza's charm,\nBoth moments,\nin the digital arm,\nWhispers of joy,\nand some alarm,\nConnections made,\nwarm.",
    "Pixelated hearts,\nand love's spree,\nOrdering pizza,\njust for thee,\nBoth moments,\nfree,\nIn the vast web,\nsee.",
    "Online hearts,\nbeating in time,\nPizza's rhythm,\na digital rhyme,\nBoth moments,\nin the web's climb,\nWhispers of love,\nprime.",
    "Love's gif,\nanimated and free,\nPizza on its way,\nfor me,\nBoth moments,\nin glee,\nIn the digital world,\nwe see.",
    "Ping of affection,\na beep so sweet,\nPizza on its way,\na treat,\nBoth moments,\nneat,\nIn the vast web,\na seat.",
    "Love's text,\na message profound,\nPizza on its way,\nround and round,\nBoth connections,\nunbound,\nIn the digital age,\nsound.",
    "Binary love,\nin ones and zeros,\nPizza's call,\nthe modern heroes,\nBoth moments,\nin the web's throes,\nWhispers of joy,\nand sometimes sorrows.",
    "Pixelated kiss,\na digital art,\nPizza on its way,\npart by part,\nBoth moments,\nin the web's chart,\nWhispers of love,\nsmart.",
    "Online whispers,\nhearts in chat,\nOrdering pizza,\nwhere I'm at,\nBoth moments,\nin the digital spat,\nConnections made,\npat.",
    "Streaming affection,\nbuffering hug,\nPizza on its way,\ncozy and snug,\nBoth moments,\nin the digital rug,\nWhispers of love,\nand a bug.",
    "Love in pixels,\na modern tale,\nOrdering pizza,\nwithout fail,\nBoth moments,\nin the digital gale,\nWhispers of affection,\npale.",
    "Ping of romance,\na beep so dear,\nPizza on its way,\nnear,\nBoth moments,\nwe hear,\nIn the vast web,\nsteer.",
    "Love's chat,\nhearts in flow,\nOrdering pizza,\nwith a show,\nBoth moments,\nin the web's glow,\nWhispers of affection,\nrow by row.",
    "Binary romance,\nin ones and threes,\nPizza's tune,\nthe modern keys,\nBoth moments,\nin the web's breeze,\nWhispers of joy,\nand sometimes tease.",
    "Pixelated hug,\na digital spree,\nPizza on its way,\njust for we,\nBoth moments,\nin glee,\nIn the vast web,\ntree.",
    "Online kisses,\nhearts in rhyme,\nPizza's rhythm,\na digital chime,\nBoth moments,\nin the web's prime,\nWhispers of love,\ntime by time.",
    "Love's emoji,\nanimated and neat,\nPizza on its way,\na treat,\nBoth moments,\nin the digital heat,\nWhispers of affection,\nbeat by beat.",
    "Ping of love,\na message clear,\nPizza on its way,\ndear,\nBoth moments,\nin the digital sphere,\nConnections made,\nnear and near.",
    "Love's gif,\na motion profound,\nPizza on its way,\nround and round,\nBoth moments,\nin the web's mound,\nWhispers of affection,\nunwound.",
    "Binary affection,\nin twos and fours,\nPizza's charm,\nthe modern floors,\nBoth moments,\nin the web's doors,\nWhispers of joy,\nand sometimes roars.",
    "Pixelated romance,\na digital art,\nPizza on its way,\npart by part,\nBoth moments,\nin the web's chart,\nWhispers of love,\ndart by dart.",
    "Online emotions,\nhearts in chat,\nOrdering pizza,\nthat's where it's at,\nBoth moments,\nin the digital hat,\nConnections made,\nstat.",
    "Streaming love,\nbuffering heart,\nPizza on its way,\nstart by start,\nBoth moments,\nin the digital cart,\nWhispers of affection,\nsmart by smart.",
    "Love in pixels,\na modern song,\nOrdering pizza,\nwon't be long,\nBoth moments,\nin the web throng,\nWhispers of affection,\nstrong by strong.",
    "Ping of romance,\na beep so dear,\nPizza on its way,\nnear and clear,\nBoth moments,\nwe cheer,\nIn the vast web,\nsteer by steer.",
    "Love's chat room,\nhearts in flow,\nOrdering pizza,\nwith a glow,\nBoth moments,\nin the web's throw,\nWhispers of love,\nshow by show.",
    "Binary love,\nin threes and fives,\nPizza's rhythm,\nthe modern drives,\nBoth moments,\nin the web's dives,\nWhispers of joy,\nand sometimes jives.",
    "Pixelated emotions,\na digital spree,\nPizza on its way,\njust for thee,\nBoth moments,\nin glee,\nIn the vast web,\nsea by sea.",
    "Online hearts,\nbeating in time,\nPizza's rhythm,\na digital rhyme,\nBoth moments,\nin the web's climb,\nWhispers of affection,\nlime by lime.",
    "Love's animated gif,\nso neat,\nPizza on its way,\na treat so sweet,\nBoth moments,\nin the digital fleet,\nWhispers of love,\nbeat by beat.",
    "Ping of affection,\na message clear,\nPizza on its way,\ndrawing near and near,\nBoth moments,\nin the digital pier,\nConnections made,\ndeer by deer.",
    "Love's digital note,\na sound profound,\nPizza on its way,\nround and round,\nBoth moments,\nin the web's playground,\nWhispers of romance,\nunbound by bound.",
    "Binary emotions,\nin fours and sixes,\nPizza's allure,\nthe modern fixes,\nBoth moments,\nin the web's mixes,\nWhispers of joy,\nand sometimes nixes.",
    "Pixelated hearts,\na digital art,\nPizza on its way,\npart by part,\nBoth moments,\nin the web's cart,\nWhispers of affection,\ndart by dart.",
    "Online chats,\nhearts in sync,\nOrdering pizza,\nin a digital blink,\nBoth moments,\nmake us think,\nIn the web's brink,\ndrink by drink.",
    "Streaming connections,\nbuffering soul,\nPizza on its way,\nrole by role,\nBoth moments,\nin the digital hole,\nWhispers of love,\npole by pole.",
    "Love in bytes,\na modern beat,\nOrdering pizza,\nhot and neat,\nBoth moments,\nin the web's seat,\nWhispers of affection,\nsweet by sweet.",
    "Ping of romance,\na beep so neat,\nPizza on its way,\na treat,\nBoth moments,\nwhen we meet,\nIn the digital world,\ncomplete by complete.",
    "Love's chat window,\nopen and profound,\nPizza on its way,\nround and round,\nBoth connections,\nin the web unbound,\nWhispers of love,\nsound by sound.",
    "Binary affections,\nin fives and sevens,\nPizza's magic,\nthe modern heavens,\nBoth moments,\nin the web's leavens,\nWhispers of joy,\nelevens by elevens.",
    "Pixelated dreams,\na digital spree,\nPizza on its way,\njust for we,\nBoth moments,\nso free,\nIn the vast web,\ntree by tree.",
    "Online whispers,\nhearts intertwined,\nPizza's melody,\na digital chime,\nBoth moments,\nin the web's prime,\ntime by time,\nline by line.",
    "Love's emoji wink,\nflirty and neat,\nPizza on its way,\na treat so sweet,\nBoth moments,\nin the digital fleet,\nWhispers of love,\nbeat by unique beat.",
    "Ping of love,\nso clear and pure,\nPizza on its way,\nsure by sure,\nBoth moments,\nan allure,\nIn the vast web,\ntour by tour.",
    "Love's digital footprint,\nso profound,\nPizza on its way,\nround by special round,\nBoth connections,\nin the web found,\nWhispers of affection,\nunbound by ground.",
    "Binary tales,\nin sixes and eights,\nPizza's story,\nthe modern fates,\nBoth moments,\nin the web's gates,\nWhispers of joy,\nstates by great states.",
    "Pixelated memories,\na digital art,\nPizza on its way,\npart by special part,\nBoth moments,\nin the web's cart,\nWhispers of love,\nheart by warm heart.",
    "Online stories,\nhearts in a link,\nOrdering pizza,\nin a digital wink,\nBoth moments,\nmake us think,\nIn the web's brink,\ndrink by special drink.",
    "Streaming tales,\nbuffering life,\nPizza on its way,\nrife by rife,\nBoth moments,\nend strife,\nIn the digital age,\nknife by knife.",
    "Love in digital ink,\na modern sheet,\nOrdering pizza,\nneat by neat,\nBoth moments,\nmake hearts beat,\nIn the vast web,\nmeet by special meet.",
    "Ping of joy,\nso sweet and neat,\nPizza on its way,\na treat,\nBoth moments,\nwhen eyes greet,\nIn the digital age,\ndelete by fleet.",
    "Love's virtual embrace,\ndeep and profound,\nPizza on its way,\nround by special round,\nBoth connections,\nin the web unbound,\nWhispers of affection,\nsound by special sound.",
    "Binary emotions,\nin sevens and nines,\nPizza's dance,\nthe modern lines,\nBoth moments,\nin the web's signs,\nWhispers of joy,\npines by fine pines.",
    "Pixelated moments,\na digital spree,\nPizza on its way,\njust for thee,\nBoth moments,\nso free,\nIn the vast web,\nsea by special sea.",
    "Online beats,\nhearts in a rhyme,\nPizza's melody,\na digital chime,\nBoth moments,\nin the web's climb,\ntime by special time,\nline by perfect line.",
    "Slid into DMs with love so deep,\nOrdering pizza while we Co-op on the creep,\nStreaming our moments,\nno skip,\njust repeat,\nWith every slice and kill,\nour hearts leap.",
    "Swipe right on love,\nleft on defeat,\nPizza's the MVP,\nevery bite's elite,\nGaming with you,\nevery win feels so sweet,\nStreaming our love,\nnow that's a feat!",
    "Love's not offline,\nit's on a streak,\nPizza,\nour loot,\nevery weekend's peak,\nGaming through night,\nno need for sleep,\nWith every stream,\nour bond grows deep.",
    "In the chat,\nour emojis speak,\nPizza and game nights,\nevery week,\nStreaming our love,\nnever bleak,\nIn this digital world,\nit's you I seek.",
    "Dropped a pin for our secret meet,\nGaming and pizza,\nman that's neat,\nLove's in the chat,\nfeels so elite,\nWith every stream,\nmy heart skips a beat.",
    "AFK from world,\nwith you it's yeet,\nPizza,\nour power-up,\nlove's treat,\nGaming till dawn,\ncan't accept defeat,\nStreaming our stories,\nmake memories fleet.",
    "Love's our story,\nnever discreet,\nWith pizza raids and gaming beat,\nStreaming on Twitch,\ncan't press delete,\nFor in this digital realm,\nour souls meet.",
    "Love's the DLC,\nalways complete,\nPizza on speed dial,\nthat's the cheat,\nStreaming our dreams,\nfeeling so elite,\nIn this game of life,\nwith you,\nit's yeet.",
    "Hit me up with that love,\nso sweet,\nGaming and pizza,\ncan't be beat,\nStreaming all night,\nour own retreat,\nEvery victory and slice,\nmakes life neat.",
    "BRB,\ngetting pizza,\nquick and fleet,\nLove's our server,\nfeels so replete,\nGaming with you,\nmakes my heart beat,\nStreaming memories,\nevery tweet's a treat.",
    "Squad up in love,\nfeel the heat,\nPizza levels up,\nevery eat,\nGaming till sunrise,\ncan't take a seat,\nStreaming our saga,\nit's so elite.",
    "No cap,\nwith you,\nlove's concrete,\nGaming marathons,\nwith pizza treat,\nStreaming on Discord,\nfeels so sweet,\nIn this pixel world,\nyou're my heartbeat.",
    "Lowkey,\nour love's on fleek,\nPizza and chill,\nevery stream's peak,\nGaming battles,\nside by side,\nunique,\nWith every win,\nit's only you I seek.",
    "Emoji hearts,\nmemes so neat,\nPizza's the badge,\nfor every feat,\nGaming and streaming,\ncan't press alt+delete,\nIn the internet's maze,\nyou're the main street.",
    "Snap streaks of love,\nso elite,\nPizza snaps,\nmake it complete,\nGaming filters,\nour love's tweet,\nStreaming our vibes,\nfeels so upbeat.",
    "Finsta love,\nfeels so petite,\nPizza stories,\nthat's the treat,\nGaming highlights,\nlove's tweet,\nStreaming our moments,\ncan't hit retreat.",
    "Drop a like for love,\nso replete,\nPizza in the feed,\nfeels so neat,\nGaming together,\ncan't admit defeat,\nStreaming our love,\nfeels so elite.",
    "Bio reads 'Gamer,\nwith love's beat',\nPizza in the avatars,\nthat's sweet,\nStreaming our adventures,\nlife's cheat,\nIn the digital age,\nour love's on repeat.",
    "Ghosting the world,\nbut with you,\nit's greet,\nPizza on the story,\nthat's a treat,\nGaming DMs,\nwhere love and pixels meet,\nStreaming our saga,\nit's always elite.",
    "On the gram,\nlove's fleet,\nPizza filters,\nthat's so sweet,\nGaming hashtags,\nwhere challenges meet,\nStreaming our love,\nevery heartbeat.",
    "Reddit upvotes for our love seat,\nPizza memes,\noh so elite,\nGaming threads,\nwhere we greet,\nStreaming our love,\nit's so replete.",
    "TikTok dances,\nwith love's beat,\nPizza duets,\ncan't be beat,\nGaming trends,\nwhere we meet,\nStreaming our moments,\nlife's treat.",
    "Viral love,\nfeels so sweet,\nPizza and game tags,\nthat's neat,\nStreaming our stories,\ncan't hit defeat,\nIn the pixel realm,\nlove's the main feat.",
    "Dropped a comment,\nlove's tweet,\nPizza emoji,\nfeels so neat,\nGaming together,\nno cheat,\nStreaming our saga,\nit's so complete.",
    "Pinned our love,\nfeels so elite,\nPizza GIFs,\nthat's the treat,\nGaming moments,\nwhere we greet,\nStreaming our dreams,\ncan't skip or delete.",
    "In the DM's shadow,\nlove does creep,\nPizza's warmth,\na solace deep,\nStreaming emotions,\nwhere pixels weep,\nIn the digital abyss,\nour secrets keep.",
    "Swipe left on despair,\nright on the sleep,\nOf pizza dreams,\nwhere feelings seep,\nLost in the feed,\nlove's echo beep,\nAmidst online chaos,\nPlath's shadows leap.",
    "Heart reacts,\nyet the void is steep,\nPizza,\na fleeting joy,\nin the online heap,\nStreaming sorrow,\nwhere memories peep,\nIn the algorithm's pull,\nour promises keep.",
    "BRB,\nin this digital space we sweep,\nYet,\npizza's aroma reminds of a leap,\nInto love's chasm,\nhaunting and deep,\nWhere Plath's words,\nour souls do reap.",
    "Ghosted in chats,\nwhere shadows creep,\nPizza's comfort,\nis all I seek,\nStreaming past love,\na dive so steep,\nEchoes of Plath,\nin every heartbeep.",
    "No filter for love,\nor the sorrow we reap,\nYet,\npizza brings solace,\nbreaking the sleep,\nLost in the online maze,\nfeelings steep,\nUnder Plath's moon,\nour secrets we keep.",
    "Notifications silent,\ninto the void we leap,\nYet pizza's glow,\nour hearts does keep,\nStreaming Plath's lullaby,\nmaking us weep,\nLove online,\na commitment so deep.",
    "Emojis mask,\nthe pain so steep,\nBut pizza? It stirs love in a heap,\nStreaming in the abyss,\nwhere shadows creep,\nPlath whispers,\n'love's dive is deep'.",
    "Pixelated love,\nthe cost is steep,\nPizza's crust,\na promise to keep,\nIn the dark web,\nPlath's words leap,\nEchoing love's haunting beep.",
    "AFK from sorrow,\ninto dreams we seep,\nYet,\npizza's warmth,\nour souls does sweep,\nStreaming memories,\nwhere love does creep,\nIn Plath's embrace,\nthe internet's leap.",
    "On read,\nlove's promise gone cheap,\nYet,\npizza's cheese pulls feelings deep,\nStreaming the night,\nPlath's shadows creep,\nIn the digital dance,\nlove's cost is steep.",
    "Muted stories,\nwhere memories sleep,\nPizza's slice,\na solace we keep,\nStreaming old love songs,\nmaking us weep,\nPlath's digital echo,\nin the heart does beep.",
    "Online status: 'In love's despair deep',\nYet,\npizza's aroma does seep,\nLost in the cloud,\nwhere feelings leap,\nPlath's haunting lullaby,\nover love's keep.",
    "Bio reads 'Plath's disciple,\nin love so deep',\nPizza and sorrow,\nthe company I keep,\nStreaming tears,\nwhere shadows creep,\nIn the online realm,\nemotions steep.",
    "Heart emojis,\nlove's pact to keep,\nYet,\npizza's warmth feels so cheap,\nIn the digital void,\nPlath's sorrows leap,\nWhispering love's secrets,\nthat we reap.",
    "Unseen in DMs,\nlove's game is steep,\nPizza's fleeting joy,\nin night does creep,\nStreaming the abyss,\nwhere memories sleep,\nPlath's online echo,\nmakes us weep.",
    "Blocked,\nyet in memories deep,\nPizza's scent,\nover sorrows does sweep,\nStreaming Plath's verses,\nin heart they seep,\nLove online,\na wound so deep.",
    "Online,\nPlath's sonnets of love we keep,\nYet,\npizza's allure is more than skin deep,\nLost in the code,\nwhere shadows leap,\nIn the internet's embrace,\nlove's promise we reap.",
    "Ghosts of unread chats,\nin heart they creep,\nYet,\npizza's golden crust,\na bond so deep,\nStreaming sorrow,\nPlath's vigil we keep,\nLove online,\nwhere feelings leap.",
    "WiFi connected,\nyet alone we weep,\nPizza,\na solace,\nin its warmth we leap,\nStreaming the void,\nPlath's shadows creep,\nEchoing love's secrets,\nin the deep.",
    "Searched love online,\nthe price is steep,\nPizza's fleeting joy,\nover sorrow does sweep,\nStreaming in Plath's rhythm,\nwhere dreams sleep,\nIn the digital night,\nlove's vigil we keep.",
    "Seen,\nyet love's promise didn't keep,\nYet,\npizza's embrace,\nout of screen does leap,\nLost in the feed,\nPlath's sorrow does creep,\nWhispering love's tales,\nin the abyss deep.",
    "Memes mask,\nlove's pain so deep,\nYet,\npizza's taste,\nour hearts does sweep,\nStreaming Plath's haunting,\nmaking us weep,\nIn the digital world,\nlove's cost we reap.",
    "Logged out from love,\ninto dreams we leap,\nPizza,\na momentary joy,\nin memories we keep,\nStreaming the night,\nPlath's echo does beep,\nLove online,\na dive so steep.",
    "Glitches in love,\nthe pain does creep,\nYet,\npizza's warmth,\nover heart does sweep,\nStreaming Plath's sorrows,\nin heart they seep,\nEchoing love's promises,\nthat we reap.",
    "BRB,\nyet love's absence is deep,\nPizza's comfort,\nover sorrows does leap,\nIn the digital realm,\nPlath's shadows creep,\nWhispering tales of love,\nin the beep.",
    "Deleted chats,\nyet memories steep,\nPizza's crust,\nlove's promise to keep,\nStreaming the abyss,\nwhere dreams sleep,\nPlath's haunting lullaby,\nover heart does sweep.",
    "Tweets mask,\nlove's sorrow so deep,\nYet,\npizza's embrace,\nover night does creep,\nLost in the online maze,\nPlath's echo does beep,\nWhispering love's secrets,\nin the deep.",
    "Gaming away sorrows,\nyet they leap,\nPizza's fleeting joy,\nin heart does seep,\nStreaming Plath's rhythm,\nmaking us weep,\nLove online,\na bond so steep.",
    "Streaming love,\nyet alone we sleep,\nPizza,\na momentary comfort,\nover sorrows does sweep,\nIn the digital void,\nPlath's shadows creep,\nEchoing love's tales,\nthat we keep.",
    //... add more poems here
];
