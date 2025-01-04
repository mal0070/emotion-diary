import './EmotionItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';

function EmotionItem({ emotionId, emotionName, isSelected, onClick }) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt="이미지"
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}

export default EmotionItem;
