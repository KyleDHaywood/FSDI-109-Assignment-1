var catalog = [
  {
    _id: "12343426t45rtgdfc",
    title: "Vallejo Game Color Dead White",
    image: "game-color-vallejo-dead-white.jpg",
    description: "White",
    price: 12.0,
    category: "paint",
  },
  {
    _id: "sdfw456346344",
    title: "Vallejo Game Color Skin Tone",
    image: "game-color-vallejo-pale-flesh.jpg",
    description: "Flesh tone",
    price: 7.0,
    category: "paint",
  },
  {
    _id: "sf3457u567g",
    title: "Dragon Slayer",
    image: "dragon-slayer.jpg",
    description: "Diorama",
    price: 8.0,
    category: "model",
  },
  {
    _id: "serfw35467",
    title: "Hunter Killer",
    image: "judgement-day.jpg",
    description: "Model",
    price: 6.0,
    category: "model",
  },
  {
    _id: "sfrs54368900hbn",
    title: "Flush cut dykes",
    image: "dykes.jpg",
    description: "5.25 inch flush cut",
    price: 6.0,
    category: "tools",
  },
  {
    _id: "132dcvert312",
    title: "exacto knife set",
    image: "exacto-knife.jpg",
    description: "55 piece set",
    price: 4.0,
    category: "tools",
  },
  {
    _id: "1467fggb67676",
    title: "Testors Plastic Cement",
    image: "plastic-cement.jpg",
    description: "Not Super Glue",
    price: 12.0,
    category: "tools",
  },
  {
    _id: "88dbcxs23324",
    title: "Vallejo Game Color Gory Red",
    image: "game-color-vallejo-gory-red.jpg",
    description: "Blood red",
    price: 12.0,
    category: "paint",
  },
];

class DataService {
  getCatalog() {
    // create http request
    // to retrieve data from server
    //
    return catalog;
  }
  registerProduct() {}
}
export default DataService;
