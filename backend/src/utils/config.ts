import dotenv from 'dotenv';

dotenv.config();

const PORT: string | undefined = process.env.PORT;
const RIJKSMUSEUM_KEY: string | undefined = process.env.RIJKSMUSEUM_KEY;

export { PORT, RIJKSMUSEUM_KEY };
