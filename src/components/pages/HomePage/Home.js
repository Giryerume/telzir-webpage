import React from 'react'
import PageSection from '../../PageSection'
import PageSection2 from '../../PageSection2'
import Pricing from '../../Pricing'
import { homeObj, homeObjOne, homeObjTwo } from '../Data'

function Home() {
    return (
        <>
            <PageSection {...homeObjOne} />
            <PageSection {...homeObjTwo} />
            <Pricing />
            <PageSection2 {...homeObj} />
        </>
    )
}

export default Home
