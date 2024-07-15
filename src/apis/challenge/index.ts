import { http } from 'msw';
import { getAcheivementResolver, postAcheivementResolver } from './acheviment.resolver';
import { getChallengeResolver } from './challenge.resolver';

export const handlers = [
  http.get('/challenge', getChallengeResolver),
  http.get('/challenge/acheivment', getAcheivementResolver),
  http.post('/challenge/acheivment', postAcheivementResolver),
];
