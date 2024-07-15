import { http } from 'msw';
import { getAcheivementResolver, postAcheivmentResolver } from './acheviment.resolver';
import { getChallengeResolver } from './challenge.resolver';

export const handlers = [
  http.get('/challenge/:id', getChallengeResolver),
  http.get('/challenge/:id/acheivment', getAcheivementResolver),
  http.post('/challenge/:id/acheivment', postAcheivmentResolver)
]
