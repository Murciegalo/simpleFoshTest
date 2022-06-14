import axios from 'axios';

export default axios.create({
  baseURL:
    'https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/88cc6aadc12d4e66f1e48c81425034f31577b052/games.json',
});
