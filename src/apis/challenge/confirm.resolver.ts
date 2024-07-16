
import { HttpResponse, HttpResponseResolver,  } from "msw";
import ConfirmRepository from "./confirm.repository";

const MAX_CONFIRM_LENGTH = 3;
const repository = new ConfirmRepository(MAX_CONFIRM_LENGTH);

export const getConfirmResolver = () => {
  const completedLength = repository.getList({ status: 'SUCCESS' }).length;
  const confirms = repository.getList();
  
  return HttpResponse.json({
    totalAvailableCount: MAX_CONFIRM_LENGTH - confirms.length,
    success: completedLength === MAX_CONFIRM_LENGTH,
    history: confirms,
  })
}

interface PostConfirmPathParams {
  id: string;
}

interface PostConfirmResponse {
  confirmedRate: number; 
  success: boolean;
}
interface PostConfirmError {
  errorCode: string;
}

export const postConfirmResolver: HttpResponseResolver<
  PostConfirmPathParams, 
  FormData, 
  PostConfirmResponse | PostConfirmError
> = ({ params }) => {
  const confirmId = Number(params.id);
  try {
    const confirm = repository.getById(confirmId);
    
    if(confirm.status === 'SUCCESS') {
      return HttpResponse.json({ errorCode: 'COMPLETED_CONFIRM' }, { status: 400 })
    }

    if(isExpiredChallenge()) {
      return HttpResponse.json({ errorCode: 'EXPIRED_CHALLENGE' }, { status: 400 })
    }

    const imageUrl = 'https://d246jgzr1jye8u.cloudfront.net/development/admin/1644299105539.png';
    if(isConfirmFail()) {
      repository.updateById(confirmId, {
        imageUrl,
        status: 'FAIL'
      });
      return HttpResponse.json({ errorCode: 'INVALID_IMAGE' }, { status: 400 })
    }

    repository.updateById(confirmId, {
      imageUrl,
      status: 'SUCCESS',
    })
    const completedLength = repository.getList({ status: 'SUCCESS' }).length;
    return HttpResponse.json({
      confirmedRate: completedLength / MAX_CONFIRM_LENGTH,
      success: true,
    })
  } catch (error) {
    return HttpResponse.json(null, { status: 404 });
  }
}

function isConfirmFail () {
  return Math.random() < 0.5;
}

function isExpiredChallenge () {
  return Math.random() < 0.5;
}


