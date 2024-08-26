const axios = require('axios');

async function getYouTubeInfo(ytUrl) {
  const apiUrl = `https://joncll.serv00.net/yt.php?url=${encodeURIComponent(ytUrl)}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.title && response.data.audio) {
      return {
        title: response.data.title,
        audio: response.data.audio,
      };
    } else {
      throw new Error('Invalid response from API');
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

module.exports = {
  getYouTubeInfo,
};
