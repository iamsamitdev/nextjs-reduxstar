import {connect} from 'react-redux'

function Navbar(props) {
    return (
        <div style={{background:'green',color:'white', textAlign:'right', paddingRight:'20px'}}>
            <h1>Counter top: {props.counter}</h1>
        </div>
    )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
    counter: state.counter.value
})

export default connect(mapStateToProps)(Navbar)
