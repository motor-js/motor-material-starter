const axios = require('axios');
const res = require('express/lib/response');
const config = require('./config');

(async () => {
  console.log('called!')
  // Retrieve the requestTicket
  const { data } = await axios.post(config.ticketURL(), config.ticketReqBody(), config.ticketReqConfig);
  console.log(data.Ticket)
  res.json({ ticket: data.Ticket})
})();
