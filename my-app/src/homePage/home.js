import React from 'react';
import { Consumer } from '../contextFn';

export default function Home(props) {
    console.log(props)
    return(
        <div>
            <Consumer>
                {ctx => {
                    return(
                        <div>
                            homePage
                            name: {ctx.user.name}
                            age: {ctx.user.age}
                        </div>
                    )
                }}
            </Consumer>
        </div>
    )
}