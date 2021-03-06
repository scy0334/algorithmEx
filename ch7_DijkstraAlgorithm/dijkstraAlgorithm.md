학습 목표
- 그래프의 간성에 가중치를 준 Weighted Graph에 대한 개념을 이해한다.
- Weighted Graph에서 X까지의 최단 경로를 구하는 Dijkstra's Algorithm에 대해서 학습한다.
- 그래프에 Cycle이 있는 경우에는 다익스트라 알고리즘을 쓸 수 없다는 것을 배운다. 

다익스트라 알고리즘의 4 단계
1. 가장 "가격"이 "싼" 정점을 찾는다. 가장 가격이 싼 정점이란 도달하는 데 시간이 가장 적게 걸리는 정점을 말 함
2. 이 정점의 이웃 정점들의 가격을 조사
3. 그래프 상의 모든 정점에 대해 이러한 일을 반복
4. 최종 경로를 계산함

가중치(Weight)이란
- 각 간선에 부여되는 숫자
- 가중치를 가지는 그래프를 Weighted Graph, 없는 그래프를 Unweighted Graph(균일 그래프)라고 함
- Unweighted Graph는 너비 우선 탐색을, Weighted Graph는 Dijkstra's Algorithm을 활용


Cycle에 대한 정리
- 사이클이란 그래프가 어떤 정점에서 출발해서 한 바퀴 돌아 같은 정점에서 끝나는 경우임
- 무방향 그래프의 경우도 사이클이라고 할 수 있음
- Dijkstra's Algorithm은 방향성 비순환 그래프(Directed Acylcic Graph)에만 적용이 됨(사이클이 있으면 안 된다는 의미임)

Dijkstra's Algorithm 구현
- 모든 정점을 처리할 때까지 반복
- 출발점에서 가장 가까운 정점을 탐색
- 이웃 정점의 가격을 갱신
- 만약 이웃 정점의 가격을 갱신하면 부모도 갱신
- 해당 정점을 처리했다는 사실을 기록 
- Recursion

연습문제
1. 아래의 그래프 각각에 대해 출발점으로부터 도착점까지의 최단 경로의 가중치는 얼마인가요?
   - A: 8, B: 60, C: 4
   - 정답 : C의 경우 음수 가중치 때문에 최단 경로 계산이 불가능함...