// اwe define all of our models in this directory
const first_data = mongoose.model('first data', { name: String });

const kitty = new ({ name: 'mohammad' });
kitty.save().then(() => console.log('meow'));