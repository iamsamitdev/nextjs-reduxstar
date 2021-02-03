import Head from 'next/head'
import Navbar from '../components/Navbar'
import {connect} from 'react-redux'
import {incrementCounter,decrementCounter} from '../redux/actions/conterActions'

const Home = (props) => {

  console.log(props)

  return (
    <div>

      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />

      <div style={{textAlign:'center'}}>
        <h1>Counter : {props.counter}</h1>
        <button onClick={props.incrementCounter}>+ Count up</button> &nbsp;
        <button onClick={props.decrementCounter}>+ Count down</button>
      </div>
    
    </div>
  )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
  counter: state.counter.value
})

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)