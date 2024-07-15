import { http } from 'msw';
import { getConfirmResolver, postConfirmResolver } from './confirm.resolver';
import { getChallengeResolver } from './challenge.resolver';

export const handlers = [
  http.get('/challenge', getChallengeResolver),
  http.get('/challenge/confirm', getConfirmResolver),
  http.post('/challenge/confirm', postConfirmResolver),
];
