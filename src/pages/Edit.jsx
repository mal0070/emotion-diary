import { useParams } from "react-router-dom"

function Edit() {
    const parmas = useParams();
  return (
    <div>{parmas.id}번 일기 수정페이지입니다</div>
  )
}

export {Edit}