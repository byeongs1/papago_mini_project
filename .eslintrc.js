module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {

        //함수 선언시 var 를 사용하지 않는다.
        "no-var": "error",
        //괄호 안에 공백을 삽입하지 않는다
        "array-bracket-spacing": ["error", "never"],
        //콤마(,)은 뒤에 공백을 삽입한다.
        "comma-spacing": ["error", { before: false, after: true }],
        //공백은 탭을 사용한다.
        "indent": ["error",
            "tab",
            {
                "SwitchCase": 1,
                "MemberExpression": 1
            }
        ],
        //콜론(:)을 사용하는 경우에는 반드시 뒤에 공백을 삽입한다
        "key-spacing": ["error", {
            "afterColon": true
        }],
        //함수 선언 간, 변수 선언 후 빈 줄 사용 준수
        "newline-after-var": ["error", "always"],
        //괄호 안에 공백을 삽입하지 않는다.
        "object-curly-spacing": ["error", "never"],
        // 함수 선언 후 빈줄 사용 지양
        "padded-blocks": ["error", "never"],
        //중괄호({})의 앞에 공백을 하나 넣는다.
        "space-before-blocks": "error",
        //산술 연산자, 비교 연산자 앞,뒤에 공백을 추가한다.
        "space-infix-ops": "error",
        // 배열 대괄호 간격
        "array-bracket-spacing": [
            "error"
        ],
        // 배열 요소 개행
        "array-element-newline": [
            "error"
        ],
        // 쉼표 간격
        "comma-spacing": [
            "error"
        ],
        // 암시적 화살표 줄바꿈
        "operator-linebreak": [
            "error"
        ],
        // 한 줄에 하나의 변수 선언
        "quotes": [
            "error"
        ],
        // 연산자 줄바꿈
        "semi-spacing": [
            "error"
        ],
        // 인용 부호
        "space-before-blocks": [
            "error"
        ],
        // 세미 간격
        "space-infix-ops": [
            "error"
        ],
        // 공백 이전 블록
        "implicit-arrow-linebreak": [
            "error"
        ],
        // 스페이스 인픽스 작전
        "one-var-declaration-per-line": [
            "error"
        ],
    }
}
