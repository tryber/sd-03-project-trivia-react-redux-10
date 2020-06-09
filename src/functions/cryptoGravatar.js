import { MD5 } from 'crypto-js';

const cryptEmail = (email) => MD5(email.trim().toLowerCase()).toString();
export default cryptEmail;
