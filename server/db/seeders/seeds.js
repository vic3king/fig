const Event = require('../models/event');
const User = require('../models/user');

const seeds = async () => {
  await Event.deleteMany({});
  await User.deleteMany({});

  const user1 = new User({
    _id: '5ded11a8af178a9daabca0e8',
    name: 'Vic3king',
    email: 'king@mail.com',
    password: 'king@show.com',
  });

  const user2 = new User({
    name: 'Vic3king',
    email: 'king@ssssshow.com',
    password: 'king@show.com',
  });

  const event1 = new Event({
    end: 'July 2, 1999',
    start: 'July 1, 1999',
    title: 'New event one',
    description: 'My shiny new event',
    address: 'No 1 city of power avenue off pedro road',
    category: 'investment',
  });

  const event2 = new Event({
    end: 'July 2, 1999',
    start: 'July 1, 1999',
    title: 'New event two',
    description: 'My shiny new event',
    address: 'No 1 city of power avenue off pedro road',
    category: 'fintech',
  });

  await user1.save();
  await user2.save();
  await event1.save();
  await event2.save();
};

export default seeds;
