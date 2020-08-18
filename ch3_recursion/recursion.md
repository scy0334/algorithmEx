const greet2 = (name) => {
    console.log(`how are you, ${name}?`)
}

const buy = () => {
    console.log("ok bye!")
}

const greet = (name) => {
    console.log(`hello, ${name}!`)
    greet2(name); //함수가 호출된 경우 => 대체가 가능하면 내부 함수가 아니기 때문에 closure라고 부를 수가 없음
    buy();
}

Greet2 ->name: Maggie
Greet -> name: Maggie 

3-1 위와 같이 생긴 호출 스택이 있다고 가정합시다. 이 호출 스택을 보고 어떤 정보를 알 수 있나요? 이제 재귀 함수에서 호출 스택이 어떻게 동작하는지 살펴봅시다.
- 내 생각 : 함수 상으로는 Greet 함수가 고차 함수가 되고, 그 밑에 있는 Greet2가 closure 함수라고 할 수 있음. 
- 오답 노트 : 저 경우에는 Greet 함수가 Parameter로 greet2를 받은 게 아니기 때문에, 고차함수라고 볼 수 없음. 또한, greet2 함수는 밖에서 변수 선언이 된 경우 이기 때문에 내부 함수라고 볼 수 없음. 
- 정답 : 처음에 greet 함수가 maggie라는 인수를 가지고 호출 됨 => Maggie라는 인수로 greet2 함수가 호출 됨 => greet 함수는 아직 완료되지 않았으며 정지된 상태임 => 함수 호출은 greet2 함수에 머물러 있음 => 함수 호출이 완료되면 다시 greet 함수가 재개 됨 

3-2 여러분이 어쩌다가 재귀 함수를 무한 실행하게 되었다고 가정합시다. 여러분이 앞에서 살펴보았듯이 컴퓨터는 함수 호출 때마다 스택에 메모리를 할당합니다. 재귀 함수가 무한 실행하면 스택에는 어떤 일이 발생할까요?
- 정답 : 스택에 계속해서 메모리가 쌓이다가 오류가 발생함.


return(값을 돌려줄 때 & 할당할 때) & invoke function(함수 호출의 개념)