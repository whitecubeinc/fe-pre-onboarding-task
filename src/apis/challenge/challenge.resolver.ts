import { HttpResponse } from "msw"

export const getChallengeResolver = () => {
  return HttpResponse.json({
    title: '1만보 걷기',
    imageUrl: 'https://d246jgzr1jye8u.cloudfront.net/development/admin/1644299105539.png'
  })
}
  