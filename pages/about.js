import Head from 'next/head'
import React from 'react'

const About = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta description={description} name="description" />
      </Head>
      <div>About</div>
    </>
  )
}

export default About

export async function getStaticProps() {
  return {
    props: {
      title: "About",
      description: "Marketing Chapter | About"
    }
  }
}