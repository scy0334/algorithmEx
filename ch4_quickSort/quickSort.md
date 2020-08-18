연습문제

4-1 처음 나왔던 sum 함수를 작성해 볼 것 

```javascript
const sumRecursion = (...args) => {
    let newArr = [...args];
    const head = newArr[0]
    const tail = newArr.slice(1);
    if (args.length < 1) {
        return 0;
    }
    return head + sumRecursion(...tail)
}
```

4-2 리스트에 포함된 원소의 숫자를 세는 재귀 함수를 작성해볼 것 
```javascript
const lengthRecursion = (arr) => {
    const head = arr[0];
    const tail = arr.slice(1);
    if (arr.length === 0) {
        return 0;
    }
    return 1 + lengthRecursion(tail);
}
```

4-3 리스트에서 가장 큰 수를 찾아보세요
```javascript
const findMaxRecursion = (arr) => {
    const head = arr[0]
    const tail = arr.slice(1);
    if (arr.length === 1) {
        return arr[0];
    }
    if (head > findMaxRecursion(tail)) {
        return head;
    } else {
        return findMaxRecursion(tail);
    }
}
```

4-4 이진 탐색도 분할 정복 전략이라고 할 수 있는데, 이진 탐색에 대해 기본 단계와 재귀 단계를 찾을 수 있나요?
- 정답 : 기본 단계는 배열의 값이 하나일 경우이고, 재귀 단계는 배열을 2등분하고 다시 이진 탐색을 실행하는 경우임

다음을 빅오 표기법으로 표현하라

4-5 배열의 모든 원소의 값을 출력
- 정답 : O(n)

4-6 배열의 모든 원소의 값을 두 배로 만들기
- 정답 : O(n)

4-7 배열의 첫 번째 원소의 값만 두 배로 만들기
- 정답 : O(1)
  
4-8 배열의 모든 원소 조합에 대해 곱셈표 만들기
- 정답 : O(n^2)











학습내용 정리

1) 분할정복에 대한 개념 정리
   - 가장 간단한 경우로 기본 단계를 찾는다
   - 주어진 문제를 작게 줄여서 기본 단계가 되도록 만든다. 
2) 귀납적 증명
   - 귀납적 증명은 기본 단계와 귀납 단계로 나뉨
   - 기본 단계가 가능하다는 전제 하에, 귀납 단계 또한 단계적으로 쪼갠다면 작동이 가능하다는 원리임

3) 배운 내용 정리
   - 분할 정복은 문제를 더 작은 조각으로 나누어 품. 만약 리스트에 분할 정복을 적용한담녀 기본 단계는 원소가 없는 빈 배열이거나 하나의 원소만 가진 배열이 됨
   - 퀵 정렬을 구현하려면 기준 원소를 무작위로 선택. 퀵 정렬의 평균 실행 시간은 O(n log n)
   - 빅오 표기법에서 가끔 상수가 중요해질 때도 있음. 퀵 정렬이 병합 정렬보다 빠른 이유도 상수 때문임
   - 단순 탐색과 이진 탐색을 비교할 때는 상수항이 문제되지 않음. 리스트가 길어질 경우 O(logn n)이 O(n)보다 훨씬 빨라지기 때문




예시 

재귀로 sum 함수를 구현하는 경우
1) sum (2, 4, 6) => 해당 함수 호출은 기본 단계 전까지 완료도지 않음
2) 2 + sum(4, 6) => 해당 함수 호출은 기본 단계 전까지 완료도지 않음
3) 4 + sum(6) => 실제로 함수 값이 반환되는 첫 함수

