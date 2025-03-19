import React from 'react'
import { Card, CardImg } from 'reactstrap';
import streching from './IMG/streching.png'
import './excSection.css'

const Section2 = () => {

    return (
        <div style={{ marginTop: 40 }}>
            <Card >
                <CardImg height={300} src={streching}
                    alt="스트레칭 배너" />
            </Card>
        </div>
    )

}

export default Section2;