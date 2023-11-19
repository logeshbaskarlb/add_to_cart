const navigationLinks = [
    { text: "Home", url: "#" },
    { text: "About", url: "#" },
    {
      text: "Shop",
      url: "#",
      subLinks: [
        { text: "All Products", url: "#" },
        { text: "Popular Items", url: "#" },
        { text: "New Arrivals", url: "#" },
      ],
    },
  ];
  
  const product_list = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Apple",
      id:1.5,
      rating:4,
      newprice: 40.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Orange",
      id:2,
      rating:5,
      sale: "Sale",
      oldprice: 20.0,
      newprice: 18.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Grpes",
      id:3,
      rating:3,
      sale: "Sale",
      oldprice: 12.0,
      newprice: 8.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "WaterMelon",
      id:4,
      rating:5,
      newprice: 30.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Avocado",
      id:5,
      rating:3,
      sale: "Sale",
      oldprice: 50.0,
      newprice: 40.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Banana",
      id:6,
      rating:4,
      newprice: 9.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Mango",
      id:7,
      rating:5,
      sale: "Sale",
      oldprice: 20.0,
      newprice: 18.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Pineapple",
      id:8,
      rating:3,
      newprice: 45.0,
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Strawberry",
      id:9,
      rating:3,
      newprice: 40.0,
    },
  ];
  export { product_list, navigationLinks };