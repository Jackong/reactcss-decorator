import ReactCSS from 'reactcss'

const Decorator = Component => {
    class CSS extends Component {
        constructor() {
            super(...arguments)
        }
        styles() {
            return ReactCSS.mixin.css.call(this)
        }
        render() {
            return super.render()
        }
    }
    return CSS
}

export default Decorator
