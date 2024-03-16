import React from 'react'
import Section1 from "./Section1"
import Section2 from "./Section2"
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css"
import Section3 from './Section3';
function Home() {
  return (
    <>
    <Layout>
      {/*Home Section hero banner */}
    <Section1/>
    {/*Home Section About */}
    <Section2/>
    {/*Home Section Menu*/}
    <Section3/>
    </Layout>
    </>
  )
}

export default Home