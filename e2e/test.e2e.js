const axios = require('axios');

(async () => {
  try {
    const res = await axios.get('http://localhost:3000/health');
    if (res.status === 200) {
      console.log('E2E OK');
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (e) {
    process.exit(1);
  }
})();