const express = require('express');
const app = express();
const cors = require('cors');
const sendMail = require('./mailSettings');
const database = require('./FirebaseConfig');

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.post('/sendMsg', (req, res) => {
  const {
    name,
    email
  } = req.body;
  sendMail(name, email);
});

app.get('/unsubscribe/:email', async (req, res) => {
  const { email } = req.params;
  const subRef = database.collection('subs').doc(email);
  try {
    const result = await subRef.update({isActive: false});
    res.render('unsubscribed');
  } catch (err) { console.log(err) }
});

app.listen(5000, () => console.log('Backend hosting on 5000.'))