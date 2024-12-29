import {getEmotionImage} from '../utils/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';

function DiaryItem() {

    const emotionId = 4;
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt='img'/>
      </div>
      <div className="info_section">
        <div className='created_date'>{new Date().toLocaleDateString()}</div>
        <div className='content'>content</div>
      </div>
      <div className="button_section"><Button text={'수정하기'}/></div>
    </div>
  );
}

export default DiaryItem;
