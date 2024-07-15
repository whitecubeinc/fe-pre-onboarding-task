import { HttpResponse, HttpResponseResolver } from "msw";

interface Acheivement {
  achievementDate: number;
  imageUrl: string;
  success: boolean; 
}

const acheivements: Acheivement[] = []
const MAX_ACHEIVEMENT_LENGTH = 3;

export const getAcheivementResolver = () => {
  return HttpResponse.json({
    totalAvailableCount: MAX_ACHEIVEMENT_LENGTH,
    history: acheivements,
  })
}

interface PostAcheivementParams {
  imageUrl: string;
}
interface PostAcheivementResponse {
  achievementRate: number; 
  success: boolean;
}
interface PostAcheivementError {
  errorCode: string;
}

export const postAcheivementResolver: HttpResponseResolver<never, PostAcheivementParams, PostAcheivementResponse | PostAcheivementError> = async ({ request }) => {
  const { imageUrl } = await request.json();
  const completedLength = acheivements.filter(x => x.success).length;

  if(completedLength >= MAX_ACHEIVEMENT_LENGTH + 1) {
    return HttpResponse.json({ errorCode: 'COMPLETED_CHALLENGE' }, { status: 400 })
  }
  
  if(isFail()) {
    acheivements.push({
      achievementDate: Date.now(),
      imageUrl, 
      success: false,
    })
    
    if(isInvalidRequest()) {
      return HttpResponse.json({ errorCode: 'EXPIRED_CHALLENGE' }, { status: 400 })
    }
    return HttpResponse.json({ errorCode: 'INVALID_ACHEIVEMENT' }, { status: 400 })
  }

  acheivements.push({
    achievementDate: Date.now(),
    imageUrl, 
    success: true,
  })
  return HttpResponse.json({
    achievementRate: completedLength / MAX_ACHEIVEMENT_LENGTH,
    success: true,
  })
}

function isFail () {
  return Math.random() < 0.5;
}

function isInvalidRequest () {
  return Math.random() < 0.5;
}
