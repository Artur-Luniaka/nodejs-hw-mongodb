import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const PORT = 3000;

export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
