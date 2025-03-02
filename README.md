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


박현진
굳이 App순서로 컴포넌트에 넘겨줄필요있나?
생성하는함수는 workspace에두는게맞는거같고
ID값을 컴포넌트에 넘겨주는거보다 전역변수로 관리하는게 앞으로 여러 도형추가할때 효과적일수도 redux라고 있음 한번 찾아보고 적용해보시게 그걸통화면 독립적으로 적용가능
리엑트하면 필수니까 한번 공부해봐
