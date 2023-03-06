// functions/3-z-complete.js
const result = document.querySelector('.result');

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading...</h2>`;
  try {
    const id = window.location.search;
    const {
      data: { fields },
    } = await axios.get(`/api/3-z-complete${id}`);
    const { name, description, price, image } = fields;
    console.log(fields);
    result.innerHTML = `
    <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${description}</p>
    </div>
  </article>
    `;
    // console.log(data);
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();

// functions/3-airtable.js
// functions/3-product.js
// const result = document.querySelector('.result');

// const fetchProduct = async () => {
//   result.innerHTML = `<h2>Loading...</h2>`;
//   // console.log('single product page');
//   try {
//     // const id = '?id=4';
//     const id = window.location.search;
//     // console.log(id);
//     // const data = await axios.get(`/api/3-product${id}`);
//     const {
//       data: { fields },
//     } = await axios.get(`/api/3-product${id}`);
//     const { name, description, price, image } = fields;
//     console.log(fields);
//     result.innerHTML = `
//     <h1 class="title">${name}</h1>
//   <article class="product">
//     <img class="product-img"
//     src="${image[0].url}"
//     alt="${name}"
//     />
//     <div class="product-info">
//       <h5 class="title">${name}</h5>
//       <h5 class="price">$${price}</h5>
//       <p class="desc">${description}</p>
//     </div>
//   </article>
//     `;
//     // console.log(data);
//   } catch (error) {
//     result.innerHTML = `<h2>${error.response.data}</h2>`;
//   }
// };

// fetchProduct();
