fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      console.log("--------------");
      console.log(item.title);
      console.log(item.description);
    });
  });
