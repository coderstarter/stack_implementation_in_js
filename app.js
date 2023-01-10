class stack {
    constructor() {
        this.st = [];
    }
    push(value) {
        this.st.push(value);
    }
    pop() {
        this.st.pop();
    }
    length() {
        return this.st.length;
    }
    peek() {
        return this.st[this.length - 1];
    }
    printStack() {
        console.log(this.st)
    }
    search(ele) {
        return this.st.includes(ele);
    }
}

const st = new stack();
st.push(18);
st.push(83);
st.push(85);
st.push(82);
st.push(98);
st.push(128);
st.printStack()
console.log(st.search(938))
