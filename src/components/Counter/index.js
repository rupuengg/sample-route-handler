import React from 'react'
import withCounter from './withCounter'

class ClickCounter extends React.Component<any> {
    constructor(props:any){
        super(props);
    }
    render() {
        const {incrementCount, count} = this.props
        return (
            <div>
               <button onClick={incrementCount}>  Button clicked {count} times</button> 
            </div>
        )
    }
}

export default withCounter(ClickCounter)