import { Products } from './products';
import { Sorts } from './sort';
import Utils from './utils'

export const SORTS: Sorts[] = [
    {
        "id": 1,
        "name": "Featured",
        "key": "isFavorite",
        "type" : "number",
        "desc" : true
    },{
        "id": 2,
        "name": "Best Selling",
        "key": "sellNo",
        "type" : "number",
        "desc" : true
    },{
        "id": 3,
        "name": "Alphabetically, A-Z",
        "key": "title",
        "type" : "string",
        "desc" : false
    },{
        "id": 4,
        "name": "Alphabetically, Z-A",
        "key": "title",
        "type" : "string",
        "desc" : true
    },{
        "id": 5,
        "name": "Price, low to high",
        "key": "price",
        "type" : "number",
        "desc" : false
    },{
        "id": 6,
        "name": "Price, high to low",
        "key": "price",
        "type" : "number",
        "desc" : true
    },{
        "id": 7,
        "name": "Date, new to old",
        "key": "openDate",
        "type" : "number",
        "desc" : true
    },{
        "id": 8,
        "name": "Date, old to new",
        "key": "openDate",
        "type" : "number",
        "desc" : false
    }
];

export const PRODUCTS: Products[] = [
    {
        "id": 1,
        "title": "Static and Ben El - Tudo Bom",
        "price": 109.95,
        "description": "Static & Ben El Tavori (Hebrew: סטטיק ובן אל תבורי) were an Israeli musical pop duo comprising the singers Liraz Russo (aka Static) and Ben El Tavori",
        "category": "hiphop",
        "image": "https://kanstatic.azureedge.net/download/pictures/2022/1/1/imgid=66780_E.jpeg",
        "isFavorite": 1,
        "music":"assets/staticB.mp3",
        "sellNo": 52,
        "openDate": 20200201
    }, {
        "id": 2,
        "title": "Baby Shark Dance ",
        "price": 22.3,
        "description": "Baby Shark is a children's song associated to a dance involving hand movements that originated as a campfire song dating back to at least the 20th century",
        "category": "childr",
        "image": "data:image/png;base64,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",
        "isFavorite": 0,
        "music":"assets/BabyShark.mp3",
        "sellNo": 5,
        "openDate": 20200201
    }, {
        "id": 3,
        "title": "Star Wars Darth Maul Duel Of The Fates",
        "price": 55.99,
        "description": "Duel of the Fates is a musical theme recurring in the Star Wars prequel trilogy and the Expanded Universe. It was composed by John Williams and recorded for the film soundtrack of Star Wars Episode I: The Phantom Menace by the London Symphony Orchestra (LSO) and the London Voices",
        "category": "opera",
        "image": "https://www.presse-citron.net/app/uploads/2022/03/Star-Wars-The-Clone-Wars-a-ramene-Darth-Maul-pour.jpeg",
        "isFavorite": 0,
        "music":"assets/DarthMaul.mp3",
        "sellNo": 0,
        "openDate": 20200201
    }, {
        "id": 4,
        "title": "Alessia Cara - Scars To Your Beautiful ",
        "price": 15.99,
        "description": "ars to Your Beautiful is a song recorded by Canadian singer and songwriter Alessia Cara. Def Jam Recordings and Universal Music Group serviced it to contemporary hit radio on July 26, 2016, as the third single from her debut studio album Know-It-All (2015) on November 13, 2015",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8GxEhVCfi0OvU3vodG2_2QHcx-L1s9CJmY70jk2m3vFMI_1pgQVi0LwESUMBOJF_wSM&usqp=CAU",
        "isFavorite": 1,
        "music":"assets/AlessiaCara.mp3",
        "sellNo": 39,
        "openDate": 20200205
    }, {
        "id": 5,
        "title": "Indila - Tourner Dans Le Vide",
        "price": 695,
        "description": "Mini World is the debut studio album by French singer and songwriter Indila. It was released on 24 February 2014 by Capitol Music France.",
        "category": "french",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpcAi2o5Xq_MfGyfxwzYZPbi42uCjzm1QDA&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/IndilaTourner.mp3",
        "sellNo": 2,
        "openDate": 20200205
    }, {
        "id": 6,
        "title": "Dream On",
        "price": 168,
        "description": "Dream On is a power ballad by Aerosmith from their 1973 debut album, Aerosmith. Written by lead singer Steven Tyler, this song was their first major hit and became a classic rock radio staple.",
        "category": "rock",
        "image": "https://i1.sndcdn.com/artworks-000491731896-zw58yw-t500x500.jpg",
        "isFavorite": 1,
        "music":"assets/DreamOn.mp3",
        "sellNo": 450,
        "openDate": 20190502
    }, {
        "id": 7,
        "title": "Ride of the Valkyries",
        "price": 9.99,
        "description": "The Ride of the Valkyries (German: Walkürenritt or Ritt der Walküren) refers to the beginning of act 3 of Die Walküre, the second of the four operas constituting Richard Wagner's Der Ring des Nibelungen.",
        "category": "opera",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uNmSm4n8Byl_3LbRSLF1PAXggmeDl1iOXA&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/Walkyries.mp3",
        "sellNo": 5,
        "openDate": 20200201
    }, {
        "id": 8,
        "title": "Epica - Cry For The Moon",
        "price": 10.99,
        "description": "Cry for the Moon (Epica song), a 2003 demo and 2004 single by Epica",
        "category": "opera",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaXegnta108aw9v70OyFqdubtfRyrPiwQdA&usqp=CAU",
        "isFavorite": 1,
        "music":"assets/Epica.mp3",
        "sellNo": 2,
        "openDate": 20210127
    }, {
        "id": 9,
        "title": "Slipknot - Psychosocial",
        "price": 64,
        "description": "Psychosocial is a song by American heavy metal band Slipknot. Released as the second single from the band's fourth studio album, All Hope Is Gone (2008).",
        "category": "rock",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Lc3CmViX78H2AmmfRDMKFP17k0W0RjEQUQ&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/Slipknot.mp3",
        "sellNo": 30,
        "openDate": 20200702
    }, {
        "id": 10,
        "title": "Slipknot - Duality ",
        "price": 109,
        "description": "Duality is a song by American heavy metal band Slipknot, released in 2004 as the first single from the band's third studio album Vol. 3: (The Subliminal Verses).",
        "category": "rock",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7YV1A_UMGZ_N0JdBCrxNi65-jopI67YbQQ&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/SlipknotDuality.mp3",
        "sellNo": 1,
        "openDate": 20200201
    }, {
        "id": 11,
        "title": "Selena Gomez & The Scene - Love You Like A Love Song",
        "price": 109,
        "description": "Love You Like a Love Song is a song by American band Selena Gomez & the Scene recorded for their third studio album When the Sun Goes Down (2011).",
        "category": "hiphop",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/26/Selena_Gomez_%26_the_Scene_-_Love_You_like_a_Love_Song.jpg",
        "isFavorite": 1,
        "music":"assets/SelenaGomez.mp3",
        "sellNo": 44,
        "openDate": 20200201
    }, {
        "id": 12,
        "title": "Ke$ha - TiK ToK",
        "price": 114,
        "description": "Tik Tok (stylized as TiK ToK and pronounced as tick tock) is the debut single by American singer Kesha, who co-wrote the song with its producers Dr. Luke and Benny Blanco. It was released on August 7, 2009, as the lead single from her debut studio album, Animal (2010).",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0E_LUGPracQ0ESN9x8LqOAGgY9ygRLw67Q&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/TiKToK.mp3",
        "sellNo": 3,
        "openDate": 20201111
    }, {
        "id": 13,
        "title": "Don Omar - Danza Kuduro",
        "price": 599,
        "description": "Danza Kuduro (English: Dance Kuduro) is a Spanish/Portuguese song by Puerto Rican recording artist Don Omar featuring Portuguese–French singer Lucenzo from Don Omar's collaborative album Meet the Orphans.",
        "category": "latine",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9AVPG6iUJhhWdqT9Ku-EPTnRQ8iYIt_G4g&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/DonOmar.mp3",
        "sellNo": 4,
        "openDate": 20210109
    }, {
        "id": 14,
        "title": "Lady Gaga - Bloody Mary",
        "price": 999.99,
        "description": "Bloody Mary is a song by American recording artist Lady Gaga from her second studio album, Born This Way (2011).",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDL6jkFXPZDfTFUITY-pc316Lg6Xc9voF5g&usqp=CAU",
        "isFavorite": 1,
        "music":"assets/LadyGaga.mp3",
        "sellNo": 103,
        "openDate": 20200407
    }, {
        "id": 15,
        "title": "Lady Gaga, Ariana Grande - Rain On Me",
        "price": 56.99,
        "description": "Rain on Me is a song by American singers Lady Gaga and Ariana Grande, from Gaga's sixth studio album, Chromatica (2020).",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3Okhb38dBxO4aK7zLsRDlyDOdWxrC4WJJQ&usqp=CAU",
        "isFavorite": 1,
        "music":"assets/LadyGagaR.mp3",
        "sellNo": 34,
        "openDate": 20200201
    }, {
        "id": 16,
        "title": "Iggy Azalea - Fancy ft. Charli XCX",
        "price": 29.95,
        "description": "Fancy is a song by Australian rapper Iggy Azalea featuring British singer Charli XCX, taken from the former's debut studio album, The New Classic (2014).",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZyA46Ssmo4rJ6p_gZ0Ja_1F31_1m2TJfFQ&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/IggyAzalea.mp3",
        "sellNo": 0,
        "openDate": 20200415
    }, {
        "id": 17,
        "title": "Jason Derulo x Nuka - Love Not War",
        "price": 39.99,
        "description": "Love Not War (The Tampa Beat) is a song by American singer Jason Derulo and New Caledonian beat maker Nuka.",
        "category": "hiphop",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioCSyl1YqHcR51vH6TeQylwOH9OflRyTlVQ&usqp=CAU",
        "isFavorite": 0,
        "music":"assets/JasonDerulo.mp3",
        "sellNo": 8,
        "openDate": 20200521
    }, {
        "id": 18,
        "title": "Tesher x Jason Derulo - Jalebi Baby ",
        "price": 9.85,
        "description": "Jalebi Baby is a Punjabi-English song sung and produced by Canadian-Indian singer, rapper and producer Tesher, first released on November 13, 2020 by Namah Music Group and Capitol Records.",
        "category": "hiphop",
        "image": "https://i1.sndcdn.com/artworks-QdbvqKVoxnVv-0-t500x500.jpg",
        "isFavorite": 0,
        "music":"assets/JalebiBaby.mp3",
        "sellNo": 12,
        "openDate": 20210201
    }, {
        "id": 19,
        "title": "booba paname",
        "price": 7.95,
        "description": "Élie Yaffa (French pronunciation: ​[eli jafa]; born 9 December 1976), better known under his stage name Booba, is a French rapper. After a brief stint as a break dancer in the early 1990s, Booba partnered with his friend Ali to form Lunatic. ",
        "category": "french",
        "image": "data:image/jpeg;base64,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",
        "isFavorite": 1,
        "music":"assets/Booba.mp3",
        "sellNo": 23,
        "openDate": 20200306
    }, {
        "id": 20,
        "title": "Kalash - Mwaka Moon ft. Damso",
        "price": 12.99,
        "description": "Mwaka Moon is a song by French rapper Kalash featuring Damso and Sfera Ebbasta released in October 2017. The song reached number one on the French Singles Chart.",
        "category": "french",
        "image": "data:image/jpeg;base64,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",
        "isFavorite": 0,
        "music":"assets/Damso.mp3",
        "sellNo": 2,
        "openDate": 20201225
    }
];
//                        שמןת הקתעטגורי
export const CATEGORIES = Object.keys(Utils.groupBy(PRODUCTS, 'category'));
