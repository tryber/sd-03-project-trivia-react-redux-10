import { MD5 } from 'crypto-js';

export const cryptEmail = (email) => MD5(email.trim().toLowerCase()).toString();