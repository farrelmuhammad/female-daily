import React from 'react'
import Billboard from '../components/Billboard'
import EditorChoice from '../components/EditorChoice'
import Header from '../components/Header'
import TopFrame from '../components/TopFrame'

const Homepage = () => {
    return (
        <>
            <Header />
            <TopFrame />
            <Billboard text="Billoard 970x270" />
            <EditorChoice />
        </>
    )
}

export default Homepage