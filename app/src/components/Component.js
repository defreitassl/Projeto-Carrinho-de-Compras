export default class Component {

    constructor (outerDivTag, content) {
        this.outerDivTag = outerDivTag
        this.container = document.querySelector(this.outerDivTag)
        this.content = content
    }

    render () {
        this.container.innerHTML = this.content
        console.log(`Conteúdo renderizado na tag ${this.outerDivTag}`)
    }

    remove () {
        this.container.innerHTML = ''
        console.log(`Conteúdo removido da tag ${this.outerDivTag}`)
    }
}