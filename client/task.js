export default class Task {
    constructor(content) {
        this.content = content;
        this.completed = false;
    }

    toggle() {
            this.completed = !this.completed;
    }
}