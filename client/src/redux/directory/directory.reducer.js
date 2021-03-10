const INITIAL_STATE = {
  sections: [
    {
      title: "Snacks",
      imageUrl: "https://i.imgur.com/qbuBWqf.jpg",
      id: 1,
      linkUrl: "shop/snacks",
    },
    {
      title: "Preorder Items",
      imageUrl: "https://i.imgur.com/J6wxPHN.jpg",
      id: 2,
      linkUrl: "shop/preorder",
    },
    {
      title: "Miscellaneous",
      imageUrl: "https://i.imgur.com/TdWm6Pq.jpg",
      id: 3,
      linkUrl: "shop/misc",
    },
    {
      title: "Dry (Sandesh) Sweets",
      imageUrl: "https://i.imgur.com/gByMqXL.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/dry",
    },
    {
      title: "Wet (Syrup) Sweets",
      imageUrl: "https://i.imgur.com/kd6XM9i.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/wet",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
