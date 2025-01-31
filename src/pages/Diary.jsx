import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../utils/get-stringed-date';
import usePageTitle from '../hooks/usePageTitle';

function Diary() {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  const curDiaryItem = useDiary(params.id);
  //useEffect는 컴포넌트가 렌더링된 이후에 실행되는데, 초깃값이 지금 undefined
  if(!curDiaryItem) {
    return <div>데이터 로딩중...</div>
  }

  const {createdDate, emotionId, content} = curDiaryItem;
 

  return (
    <div>
      <Header
        title={`${getStringedDate(new Date(createdDate))} 기록`}
        leftChild={<Button text={'< 뒤로 가기'} onClick={()=>nav(-1)}/>}
        rightChild={<Button text={'수정하기'} onClick={()=>nav( `/edit/${params.id}`)}/>}
      />
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  );
}

export { Diary };
