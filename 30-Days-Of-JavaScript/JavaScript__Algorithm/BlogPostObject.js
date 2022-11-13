function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post("Title", "Body", "Author");
console.log(post);

//  Price Range Objects
const priceRanges = [
  { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Expensive", minPerPerson: 22, maxPerPerson: 60 },
];

// Filter features!
let restaurants = [{ averagePerPerson: 6 }];
