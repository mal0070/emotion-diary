import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0]; //dom 요소를 저장하는 변수의 이름- $붙이는 관례
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
