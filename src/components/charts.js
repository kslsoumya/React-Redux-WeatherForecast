import React  from 'react';

import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';



function average(data) {
    return  _.sum(data)/data.length;

 }

export default  (props) => {
    

    return (
        <div>
            <Sparklines data={props.data} limit={5} width={150} height={80}>
                <SparklinesLine color ={props.color}/>
                <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{average(props.data)}</div>
        </div>
    )


}