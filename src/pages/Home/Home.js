import React from 'react'
import Section1 from "./Section1"
import Section2 from "./Section2"
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css"
function Home() {
  return (
    <>
    <Layout>
      {/*Home Section hero banner */}
    <Section1/>
    {/*Home Section About */}
    <Section2/>
    </Layout>
    </>
  )
}

export default Home