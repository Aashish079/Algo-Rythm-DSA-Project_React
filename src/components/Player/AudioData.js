import DoublyLinkedList from "../../algorithms/dll.js";
import song1 from "../../assets/music/02. Paul Flint - Savage.mp3";
import song2 from "../../assets/music/04. Syn Cole - Feel Good.mp3";
import song3 from "../../assets/music/03. Retrovision - Puzzle.mp3";
import RedBlackTree from "../../algorithms/red_black_tree.js";

const songsdata = [
  {
    title: "zFlint - Savage",
    artist: "Paul Flint",
    artistCover:
      "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/352/325x325/1597165641_NFWo1NewLF_Paul-Flint.png",
    cover: "https://i1.sndcdn.com/artworks-000178640584-kie7ij-t500x500.jpg",
    url: song1,
  },
  {
    title: "Retrovision - Puzzle",
    artist: "Retrovision",
    artistCover:
      "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/377/325x325/1597166077_RAHYVPaDfQ_RetroVision.png",
    cover: "https://i1.sndcdn.com/artworks-000196908840-gcl3jn-t500x500.jpg",
    url: song2,
  },
  {
    title: "Syn Cole - Feel Good",
    artist: "Syn Cole",
    artistCover:
      "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/434/325x325/1597179223_bgwJeQP8Gl_Syn-Cole.png",
    cover: "https://i1.sndcdn.com/artworks-000149107009-m881ek-t500x500.jpg",
    url: song3,
  },
];

class song_node {
  constructor() {
    this.title = null;
    this.url = null;
    this.cover = null;
  }
}

const s1 = new song_node();
const s2 = new song_node();
const s3 = new song_node();

s1.title = "zFlint - Savage";
s1.artist = "Paul Flint";
s1.url = song1;
s1.cover = "https://i1.sndcdn.com/artworks-000178640584-kie7ij-t500x500.jpg";

s2.title = "Retrovision - Puzzle";
s2.artist = "Retrovision";
s2.url = song3;
s2.cover = "https://i1.sndcdn.com/artworks-000196908840-gcl3jn-t500x500.jpg";

s3.title = "Syn Cole - Feel Good";
s3.artist = "Syn Cole";
s3.url = song2;
s3.cover = "https://i1.sndcdn.com/artworks-000149107009-m881ek-t500x500.jpg";

const song_dll = new DoublyLinkedList();
song_dll.pushBack(s1);
song_dll.pushBack(s2);
song_dll.pushBack(s3);

// tree
const songTree = new RedBlackTree();
let cur_ptr = song_dll.head;
let counter = 0;
while (counter < song_dll.size) {
  songTree.add(cur_ptr.data.title, cur_ptr.data);
  cur_ptr = cur_ptr.next;
  counter++;
}

const sortedList = songTree.inOrderTraversal(songTree.root);
console.log(sortedList);

// making sorted sll
const sorted_song_dll = new DoublyLinkedList();
for (let i = 0; i < sortedList.length; i++) {
  sorted_song_dll.pushBack(sortedList[i]);
}

window.current_song_ptr = song_dll.head;
export { song_dll, sorted_song_dll, song_node, songsdata };

//Better Data
// let savage = {
//     name: "Savage",
//     path: "02. Paul Flint - Savage",
//     artist: "Paul Flint",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/352/325x325/1597165641_NFWo1NewLF_Paul-Flint.png",
//     cover: "https://i1.sndcdn.com/artworks-000178640584-kie7ij-t500x500.jpg",
//     genres: ["Dubstep", "Energetic", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 132,
//   };
//   let puzzle = {
//     name: "Puzzle",
//     path: "03. Retrovision - Puzzle",
//     artist: "Retrovision",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/377/325x325/1597166077_RAHYVPaDfQ_RetroVision.png",
//     cover: "https://i1.sndcdn.com/artworks-000196908840-gcl3jn-t500x500.jpg",
//     genres: ["House", "Energetic", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 245,
//   };
//   let feelgood = {
//     name: "Feel Good",
//     path: "04. Syn Cole - Feel Good",
//     artist: "Syn Cole",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/434/325x325/1597179223_bgwJeQP8Gl_Syn-Cole.png",
//     cover: "https://i1.sndcdn.com/artworks-000149107009-m881ek-t500x500.jpg",
//     genres: ["House", "Hopeful", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 189,
//   };
//   let roots = {
//     name: "Roots",
//     path: "06. Tobu - Roots",
//     artist: "Tobu",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/456/325x325/1597179629_uqJjm9Uuiw_Tobu.png",
//     cover:
//       "https://lastfm.freetls.fastly.net/i/u/300x300/d55932d44b33e431e68a3c0c4daceb98.png",
//     genres: ["EDM"],
//     audio: null,
//     isFav: null,
//     duration: 200,
//   };
//   let dreamingofme = {
//     name: "Dreaming of Me",
//     path: "07. Jack Shore - Dreaming of Me",
//     artist: "Jack Shore",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/693/325x325/1642341501_yCYJidAFba_129896948_885396732024883_8614097797124242129_n.jpg",
//     cover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/033/325x325/dreaming-of-me-1635854432-lB4hOLMPWe.jpg",
//     genres: ["Indie", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 199,
//   };
//   let phoenix = {
//     name: "Phoenix",
//     path: "08. Halvorsen - Phoenix",
//     artist: "Halvorsen",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/171/325x325/1597150417_n2EhsQtFlT_Halvorsen.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/7438735b-7816-415a-b3bb-985b6a3f930b/artwork-440x440.jpg",
//     genres: ["Indie", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 238,
//   };
//   let cloud9 = {
//     name: "Cloud9",
//     path: "09. Tobu - Cloud9",
//     artist: "Tobu",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/456/325x325/1597179629_uqJjm9Uuiw_Tobu.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/4670ee7b-68e1-4d08-a52d-4db36daca1e1/artwork-440x440.jpg",
//     genres: ["House", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 275,
//   };
//   let canonind = {
//     name: "Canon in D",
//     path: "10. Pachelbel - Canon in D",
//     artist: "Pachelbel",
//     artistCover:
//       "https://images.genius.com/bd5981d30b874051a096701fb418de27.278x396x1.jpg",
//     cover: "https://i.imgur.com/MxKbJ68.jpeg",
//     genres: ["Piano", "Hopeful"],
//     audio: null,
//     isFav: null,
//     duration: 228,
//   };
//   let chains = {
//     name: "Chains",
//     path: "11. Alina Renae - Chains",
//     artist: "Alina Renae",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/017/325x325/1597147105_EWcVRjCw3z_Alina-Renae.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/2401d934-83be-4849-9fcd-9d31990e7ca9/artwork-440x440.jpg",
//     genres: ["Chill"],
//     audio: null,
//     isFav: null,
//     duration: 194,
//   };
//   let symphony = {
//     name: "Symphony",
//     path: "12. Arc North - Symphony",
//     artist: "Arc North",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/616/325x325/1613042030_E6OSCB3RPf_Arc-North.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/6da8f4d1-115c-44f7-8b14-94bd2e46d0b1/artwork-440x440.jpg",
//     genres: ["Chill"],
//     audio: null,
//     isFav: null,
//     duration: 190,
//   };
//   let whatyoulike = {
//     name: "What You Like",
//     path: "13. Curbi - What You Like",
//     artist: "Curbi",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/094/325x325/1597148713_Owam2tOH4a_Curbi.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/f4a06b83-8acb-484f-becc-a752d6ecc611/artwork-440x440.jpg",
//     genres: ["Bass", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 158,
//   };
//   let newstyle = {
//     name: "New Style",
//     path: "14. Droptek - New Style",
//     artist: "Droptek",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/122/325x325/1597149758_Imed6OA39w_Droptek.png",
//     cover:
//       "https://linkstorage.linkfire.com/medialinks/images/93d156a9-31cc-403d-9433-932c4b6622b1/artwork-440x440.jpg",
//     genres: ["Bass", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 227,
//   };
//   let backyardmoon = {
//     name: "Backyard Moon",
//     path: "Backyard Moon - Props",
//     artist: "Props",
//     artistCover:
//       "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/9c/08/b3/9c08b349-2045-ec29-4a2c-e89e3ea72270/5059806887495_cover.jpg/400x400cc.jpg",
//     cover:
//       "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/9c/08/b3/9c08b349-2045-ec29-4a2c-e89e3ea72270/5059806887495_cover.jpg/400x400cc.jpg",
//     genres: ["Indie", "LoFi"],
//     audio: null,
//     isFav: null,
//     duration: 157,
//   };
//   let onandon = {
//     name: "On & On (Itro Remix)",
//     path: "Cartoon - On & On",
//     artist: "Cartoon",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/073/325x325/1597148402_SavquoNo8D_Cartoon.png",
//     cover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/1000x0/on-on-feat-daniel-levi-1586947008-oeI24in2Ga.jpg",
//     genres: ["Dreamy", "EDM"],
//     audio: null,
//     isFav: null,
//     duration: 294,
//   };
//   let invincible = {
//     name: "Invincible",
//     path: "DEAF KEV - Invincible",
//     artist: "DEAV KEV",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/103/325x325/1597148851_NLkqcNRLl3_DEAF-KEV.png",
//     cover: "https://i1.sndcdn.com/artworks-000224592805-nhfd2x-t500x500.jpg",
//     genres: ["Dubstep", "Hopeful"],
//     audio: null,
//     isFav: null,
//     duration: 273,
//   };
//   let myheart = {
//     name: "My Heart",
//     path: "My Heart",
//     artist: "Different Heaven & EH!DE",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/110/325x325/1597149100_6jB4ktu67O_Different-Heaven.png",
//     cover: "https://i1.sndcdn.com/artworks-000372362241-tdudx0-t500x500.jpg",
//     genres: ["Energetic"],
//     audio: null,
//     isFav: null,
//     duration: 267,
//   };
//   let flowers = {
//     name: "Flowers",
//     path: "Flowers - Sakura Girl",
//     artist: "Sakura Girl",
//     artistCover:
//       "https://i.scdn.co/image/ab67616d0000b273ed63305d487d528ab8495be9",
//     cover: "https://i.scdn.co/image/ab67616d0000b273ed63305d487d528ab8495be9",
//     genres: ["Chill", "Happy"],
//     audio: null,
//     isFav: null,
//     duration: 225,
//   };
//   let heroestonight = {
//     name: "Heroes Tonight",
//     path: "Janji - Heroes Tonight",
//     artist: "Janji",
//     artistCover:
//       "https://ncsmusic.s3.eu-west-1.amazonaws.com/artists/000/000/198/325x325/janji-1586942350-QUHR3pfFSM.jpg",
//     cover: "https://i1.sndcdn.com/artworks-000119717450-w3zyh8-t500x500.jpg",
//     genres: ["House", "Hopeful", "Energetic"],
//     audio: null,
//     isFav: null,
//     duration: 208,
//   };
//   let sincethatsummerbegan = {
//     name: "Since That Summer Began",
//     path: "Since That Summer Began - Broke in Summer",
//     artist: "Broke in Summer",
//     artistCover:
//       "https://brokeinsummer.com/wp-content/uploads/Since-that-summer-began-Cover-1080x1080.jpg",
//     cover:
//       "https://brokeinsummer.com/wp-content/uploads/Since-that-summer-began-Cover-1080x1080.jpg",
//     genres: ["Chill", "LoFi"],
//     audio: null,
//     isFav: null,
//     duration: 125,
//   };
//   let sunriseinyoureyes = {
//     name: "Sunrise In Your Eyes",
//     path: "Sunrise In Your Eyes - Scandinavianz",
//     artist: "Scandinavianz",
//     artistCover:
//       "https://i1.sndcdn.com/artworks-pTLJ0ROg3lXumjdC-68qOqA-t500x500.jpg",
//     cover:
//       "https://i1.sndcdn.com/artworks-pTLJ0ROg3lXumjdC-68qOqA-t500x500.jpg",
//     genres: ["Chill", "Happy"],
//     audio: null,
//     isFav: null,
//     duration: 158,
//   };
//   let sunsetdreams = {
//     name: "Sunset Dreams",
//     path: "Sunset Dreams - Cheel",
//     artist: "Cheel",
//     artistCover:
//       "https://i1.sndcdn.com/artworks-qWWKONMyNiDLBvxQ-Rpkyxw-t500x500.jpg",
//     cover:
//       "https://i1.sndcdn.com/artworks-qWWKONMyNiDLBvxQ-Rpkyxw-t500x500.jpg",
//     genres: ["Indie"],
//     audio: null,
//     isFav: null,
//     duration: 161,
//   };
