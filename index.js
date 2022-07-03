const express = require('express');

// sample payload
const trx = {
    "ID": 13082,
    "Amount": 4500,
    "Currency": "NGN",
    "CustomerEmail": "anon8@customers.io",
    "SplitInfo": [
        {
            "SplitType": "FLAT",
            "SplitValue": 450,
            "SplitEntityId": "LNPYACC0019"
        },
        {
            "SplitType": "FLAT",
            "SplitValue": 2300,
            "SplitEntityId": "LNPYACC0011"
        }
    ]
}

const app = express();
app.use(express.json());

// -- ENDPOINT -- //
app.post('/split-payments/compute', (req, res) => {
    const { ID, Amount, Currency, CustomerEmail, SplitInfo } = req.body;
    if (ID == trx.ID && 
        Amount == trx.Amount && 
        Currency == trx.Currency && 
        CustomerEmail == trx.CustomerEmail ) {
        res.status(200).json('OK');
    }
    else {
        res.status(400).json('Bad Request');
    }
})


// -- LISTEN ENDPOINT -- //
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
app.listen(3000)