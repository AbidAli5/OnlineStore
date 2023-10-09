const express = require('express');
const request = require('request');
const cors = require('cors')
const app = express();
app.use(cors)
app.get('/',(req,res)=> {
    res.send('Hello World');
})
app.get('/getShopifyProducts', (req, res) => {
    const shopifyUrl = 'https://a26238af24d28490b0df51bfb2bcdb65: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@04fa2a-2.myshopify.com/admin/api/2023-10/products.json';
    const options = {
      url: shopifyUrl,
      headers: {
        // 'Authorization': 'a26238af24d28490b0df51bfb2bcdb65',
      },
    };
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body);
      } else {
        res.status(500).send('Error fetching data from Shopify');
      }
    });
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });