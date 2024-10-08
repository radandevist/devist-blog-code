import { ParseServer } from 'parse-server';
import express from 'express';

const main = async () => {
  try {
    const app = express();
    
    const parseServer = new ParseServer({
      appId: 'my-app-id',
      masterKey: 'my-master-key',
      databaseURI: 'mongodb://localhost:27017/my-database-name',
      cloud: './cloud.js',
      publicServerURL: 'http://localhost:3000/parse',
      serverURL: 'http://localhost:3000/parse',
    });
    
    await parseServer.start();
    
    app.use('/parse',parseServer.app);
    
    app.listen(3000, () => {
      console.log('🚀 running on port 3000 🚀')
    });
  } catch (error) {
  console.error(error)
  }
};

main();