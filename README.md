# diagram
질문사항

컴포넌트 구조가 다음과 같이 설정되어있는 상황입니다.
App
 Header
 Sidebar
 Workspace

사이드바에서 도형을 선택할 경우 마우스 드래그로 도형을 생성하고 싶습니다.
이때 도형을 생성하는 함수를 어디에 두는것이 좋을지 고민입니다.

지금은 Workspace.jsx에 도형 생성 함수를 두고
Sidebar에서 버튼을 클릭할 경우 어떤 버튼을 클릭했는지 id 값을
Sidebar -> App -> Workspace 순서로 컴포넌트에 넘겨주는 방식을 생각하고 있습니다.
