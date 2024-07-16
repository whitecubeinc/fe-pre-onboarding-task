import { http } from 'msw';
import { getConfirmResolver, postConfirmResolver } from './confirm.resolver';
import { getChallengeResolver } from './challenge.resolver';

export const handlers = [
  http.get('/challenge', getChallengeResolver),
  http.get('/challenge/confirms', getConfirmResolver),
  http.post('/challenge/confirms/:id', postConfirmResolver),
];
