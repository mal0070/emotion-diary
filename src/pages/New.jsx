import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

function New() {
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'} />}
      />
      <Editor/>
    </div>
  );
}

export { New };
