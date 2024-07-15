import { HttpResponse, HttpResponseResolver } from "msw";

interface Confirm {
  createdAt: number;
  imageUrl: string;
  success: boolean; 
}

const confirms: Confirm[] = []
const MAX_CONFIRM_LENGTH = 3;

export const getConfirmResolver = () => {
  return HttpResponse.json({
    totalAvailableCount: MAX_CONFIRM_LENGTH,
    history: confirms,
  })
}
interface PostConfirmResponse {
  confirmedRate: number; 
  success: boolean;
}
interface PostConfirmError {
  errorCode: string;
}

export const postConfirmResolver: HttpResponseResolver<never, FormData, PostConfirmResponse | PostConfirmError> = () => {
  const createdAt = Date.now();
  const imageUrl = 'https://d246jgzr1jye8u.cloudfront.net/development/admin/1644299105539.png';
  
  const completedLength = confirms.filter(x => x.success).length;
  if(completedLength >= MAX_CONFIRM_LENGTH + 1) {
    return HttpResponse.json({ errorCode: 'COMPLETED_CHALLENGE' }, { status: 400 })
  }
  
  if(isFail()) {
    confirms.push({
      createdAt,
      imageUrl, 
      success: false,
    })
    
    if(isExpiredChallenge()) {
      return HttpResponse.json({ errorCode: 'EXPIRED_CHALLENGE' }, { status: 400 })
    }
    return HttpResponse.json({ errorCode: 'INVALID_CONFIRM' }, { status: 400 })
  }

  confirms.push({
    createdAt,
    imageUrl, 
    success: true,
  })
  return HttpResponse.json({
    confirmedRate: completedLength / MAX_CONFIRM_LENGTH,
    success: true,
  })
}

function isFail () {
  return Math.random() < 0.5;
}

function isExpiredChallenge () {
  return Math.random() < 0.5;
}
