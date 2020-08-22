Graph란?
- 연결의 집합을 모형화한 것
- 우리가 생각하는 X/Y축 그래프가 아님
- 예시 | 알렉스 -> 라마 -> 톰
- 여기서 알렉스, 라마, 톰과 같은 각 지점을 Node(정점), 연결선을 Edge(간선), 그리고 서로 이어진 정점을 Neighbor(이웃)이라고 함
  
Breadth-First-Search
- 두 가지 질문에 대한 대답
  - 정점 A에서 정점 B로 가는 경로가 존재하는가?
  - 정점 A에서 정점 B로 가는 최단 경로가 존재하는가?
- 실행 시간
  - O(V + E)
    - V = Node의 수
    - E = Edge의 수
  - 네트워크 전체를 탐색한다는 것은 모든 정점을 따라 움직인다는 의미이기 때문에 간선의 개수를 세고, 탐색할 사람을 저장하는 큐 또한 있어야 하는데, 큐에 사람을 추가하는데 걸리는 상수 시간은 O(1), 모든 사람에게 적용을 해야 하기 때문에 O(사람의 수)를 적용하여, 실행시간이 O(V + E)로 정리됨


Queue
- First In First Out(FIFO) : 처음 삽입(enqueue)된 항목이 가장 먼저 제거(dequeue) 됨 => queue
- Last In First Out(LIFO) : 후입선출 => stack


Graph의 구현
- 해시 테이블을 사용하여 구현 가능

연습문제 

1. 출발부터 도착까지의 최단 경로를 찾으세요.
   - 정답 : 2

2. CAB부터 BAT까지의 최단 경로를 찾으세요.
   - 정답 : 2

3. 아래의 세 가지 목록에서 올바른 것과 올바르지 않은 것을 고르세요
   - 정답 : A는 아침식사를 양치질 전에 했기 때문에 올바르지 않은 정답이고, B는 기상-> 양치질 -> 아침식사로 이어졌기 때문에 올바른 정답이며, C는 기상하기 전에 샤워부터 했기 때문에 올바르지 않은 정답임.

4. 이 그래프에 대해 올바른 목록을 만드세요.
   - 기상 > 운동 > 샤워 > 양치질 > 아침 식사 > 옷입기 > 점심 도시락 싸기

5. 다음 그래프도 트리인가요?~==
   - 트리임
   - 트리가 아님
   - 트리임