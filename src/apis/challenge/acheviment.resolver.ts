import { HttpResponse, HttpResponseResolver } from "msw";

interface Acheivement {
  achievementDate: number;
  imageUrl: string;
  success: boolean; 
}

const acheivements: Acheivement[] = []
const MAX_ACHEIVMENT_LENGTH = 3;

export const getAcheivementResolver = () => {
  return HttpResponse.json({
    totalAvailableCount: MAX_ACHEIVMENT_LENGTH,
    history: acheivements,
  })
}

interface PostAcheivmentParams {
  imageUrl: string;
}
interface PostAcheivmentResponse {
  achievementRate: number; 
  success: boolean;
}
interface PostAcheivmentError {
  errorCode: string;
}

export const postAcheivmentResolver: HttpResponseResolver<never, PostAcheivmentParams, PostAcheivmentResponse | PostAcheivmentError> = async ({ request }) => {
  const { imageUrl } = await request.json();
  const completedLength = acheivements.filter(x => x.success).length;

  if(completedLength >= MAX_ACHEIVMENT_LENGTH + 1) {
    return HttpResponse.json({ errorCode: 'COMPLETED' }, { status: 400, })
  }
  
  if(isFail()) {
    acheivements.push({
      achievementDate: Date.now(),
      imageUrl, 
      success: false 
    })
    
    if(isInvalidRequest()) {
      return HttpResponse.json({ errorCode: 'EXPIRED_ACHEIVMENT' }, { status: 400, })
    }
    return HttpResponse.json({ errorCode: 'INVALID_ACHEIVMENT' }, { status: 400 })
  }

  acheivements.push({
    achievementDate: Date.now(),
    imageUrl, 
    success: true,
  })
  return HttpResponse.json({
    achievementRate: completedLength / MAX_ACHEIVMENT_LENGTH,
    success: true
  })
}

function isFail () {
  return Math.random() < 0.5;
}

function isInvalidRequest () {
  return Math.random() < 0.5;
}