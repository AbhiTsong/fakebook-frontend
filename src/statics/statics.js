const staticData = [
  {
    name: "Sam Smith",
    description: "likes the video that you were tagged in",
    image: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
    time: "35 minutes ago",
  },

  {
    name: "Jacob Jazz",
    description: "posted in Jazz Cornor",
    image: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    time: "2 hours ago",
  },

  {
    name: "Eric Johnson",
    description: "invired You To like My Story Club",
    buttons: true,
    image: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    time: "5 hours ago",
  },

  {
    name: "Dime Bag",
    description: "have birthday today",
    image: "https://i.ibb.co/dJbG1cT/yeezy.png",
    time: "7 hours ago",
  },

  {
    name: "Roshek Rai",
    description: "invited you to like his page",
    buttons: true,
    image: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    time: "9 hours ago",
  },

  {
    name: "Mohmmad Abdul",
    description: "liked a picture you are tagged in",
    image: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    time: "10 hours ago",
  },
  {
    name: "Eric Plant",
    description: "likes the video that you were tagged in",
    image: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    time: "12 hours ago",
  },

  {
    name: "Brenden Page",
    description: "posted in Country Music Club",
    image: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    time: "15 hours ago",
  },

  {
    name: "Abigail Johns",
    description: "invited You To like Guitar Fans Page",
    buttons: true,
    image: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    time: "19 hours ago",
  },

  {
    name: "Simmy Nan",
    description: "have birthday today",
    image: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    time: "20 hours ago",
  },

  {
    name: "Divas Rai",
    description: "invited you to like his page Bantawa Fans",
    buttons: true,
    image: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    time: "23 hours ago",
  },

  {
    name: "Mohmmad Kreem",
    description: "liked a picture you are tagged in",
    image: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    time: "24 hours ago",
  },
  {
    name: "Rojer Feder",
    description: "likes the video that you were tagged in",
    image: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
    time: "Yesterday",
  },

  {
    name: "Yakub Hans",
    description: "posted in Drummers Magazine",
    image: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    time: "1 week ago",
  },

  {
    name: "John Doe",
    description: "invired You To like Web Dev Community",
    buttons: true,
    image: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
    time: "1 week ago",
  },

  {
    name: "James Hammet",
    description: "had birthday",
    image: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
    time: "2 weeks ago",
  },

  {
    name: "Sammy Fang",
    description: "invited you to like his page",
    buttons: true,
    image: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
    time: "2 weeks ago",
  },

  {
    name: "Nate Buster",
    description: "liked a picture you are tagged in",
    image: "https://i.ibb.co/qBcrsJg/white-vest.png",
    time: "3 weeks ago",
  },
  {
    name: "Tim Jam",
    description: "likes the video that you were tagged in",
    image: "https://i.ibb.co/55z32tw/long-sleeve.png",
    time: "About a month ago",
  },

  {
    name: "Fila Suz",
    description: "posted in Bass Magazine",
    image: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
    time: "About a month ago",
  },
];

const messageData = [
  {
    name: "Sam Smith",
    description: "whats up bro",
    image: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
    time: "35 minutes ago",
  },

  {
    name: "Jacob Jazz",
    description: "Hi",
    image: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    time: "2 hours ago",
  },

  {
    name: "Eric Johnson",
    description: "Call me its urgent",
    image: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    time: "5 hours ago",
  },

  {
    name: "Dime Bag",
    description: "Where are you bro",
    image: "https://i.ibb.co/dJbG1cT/yeezy.png",
    time: "7 hours ago",
  },

  {
    name: "Roshek Rai",
    description: "Can i borrow some cash bro",
    image: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    time: "9 hours ago",
  },

  {
    name: "Mohmmad Abdul",
    description: "Lets meet up tomorrow",
    image: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    time: "10 hours ago",
  },
  {
    name: "Eric Plant",
    description: "Where have you reached",
    image: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
    time: "12 hours ago",
  },
  
  {
    name: "Brenden Page",
    description: "Where were you yesterday",
    image: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    time: "15 hours ago",
  },
  
  {
    name: "Abigail Johns",
    description: "Alice wnats to c u",
    image: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    time: "19 hours ago",
  },
  
  {
    name: "Simmy Nan",
    description: "Good Morning Bro",
    image: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    time: "20 hours ago",
  },
  
  {
    name: "Divas Rai",
    description: "Where is the shop",
    image: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    time: "23 hours ago",
  },
  
  {
    name: "Mohmmad Kreem",
    description: "I saw u yesterday",
    image: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    time: "24 hours ago",
  },
  {
    name: "Rojer Feder",
    description: "Call me its urgent",
    image: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
    time: "Yesterday",
  },
  
  {
    name: "Yakub Hans",
    description: "Yoo whats up man",
    image: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    time: "1 week ago",
  },
  
  {
    name: "John Doe",
    description: "Who is that person next to you",
    image: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
    time: "1 week ago",
  },
  
  {
    name: "James Hammet",
    description: "Lets have some beer..",
    image: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
    time: "2 weeks ago",
  },
  
  {
    name: "Sammy Fang",
    description: "have a good day bro",
    image: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
    time: "2 weeks ago",
  },
  
  {
    name: "Nate Buster",
    description: "Nice pic bro",
    image: "https://i.ibb.co/qBcrsJg/white-vest.png",
    time: "3 weeks ago",
  },
  {
    name: "Tim Jam",
    description: "Plz check your email bro",
    image: "https://i.ibb.co/55z32tw/long-sleeve.png",
    time: "About a month ago",
  },
  
  {
    name: "Fila Suz",
    description: "Hi good morning",
    image: "https://i.ibb.co/XzcwL5s/blck-shearling.png",
    time: "About a month ago",
  },
];

export { staticData, messageData };
