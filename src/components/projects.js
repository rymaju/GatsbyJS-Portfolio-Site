import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './projects.module.css'
import Img from 'gatsby-image'
import { Typography, Box, Container, Link } from '@material-ui/core'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
    max-width: 900px;
    margin: auto;
    text-align: left;

`
const Projects = () => {
  // query images for each project
  const data = useStaticQuery(graphql`
        query {
            explorable_trie: file(relativePath: { eq: "explorable_trie.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            portfolio: file(relativePath: { eq: "portfolio.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fundies: file(relativePath: { eq: "fundiescollab.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            c4c: file(relativePath: { eq: "c4c.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return (
    <Container size='lg' id='projects'>
      <Box paddingTop={10} />
      <Typography variant='h1'>
        <Box fontWeight={700}>
          Projects
        </Box>

      </Typography>
      <ProjectsContainer>

        <div className={styles.projectColumn}>
          <div className={styles.projectColumn}>

            <Typography variant='h6'>design+development</Typography>
            <Typography variant='h3'>
              <Box fontWeight={700}>
                c4cneu.com
              </Box>

            </Typography>
            <Typography variant='h5'>A website for Code4Community.</Typography>

            <div className={styles.projectRow}>

              <Img
                fluid={data.c4c.childImageSharp.fluid}
                className={styles.projectImage}
              />

              <div
                className={[
                  styles.projectsColumn,
                  styles.projectDescription
                ].join(' ')}
              >
                <Box marginTop={2}>
                  <Typography variant='body2' gutterBottom>
                    c4cneu.com is the public facing website for the Code4Community organization. The website was built with React.js, Typescript, and Material UI. The entire website was built over the course of a month. I led the development of the website and collaborated with another designer to wireframe the website. As both a developer and designer, I was responsible for implementing my Figma prototypes as React components with JSS. I have a keen understanding of the design handoff process and how to maximize developer and designer productivity.
                  </Typography>
                  <div className={styles.linksContainer}>
                    <Link href='https://github.com/Code-4-Community/c4cneu.com'>
                      See Code
                    </Link>
                                        &nbsp;|&nbsp;
                    <Link href='https://c4cneu.com'>
                      View Live
                    </Link>
                      &nbsp;|&nbsp;

                    <Link href='https://www.figma.com/file/bA9eqApzabGM7noFk6QX3F/C4CNEU.com-Inital-Designs'>
                      View Figma
                    </Link>
                  </div>
                </Box>

              </div>
            </div>
            <Typography variant='h6'>development</Typography>
            <Typography variant='h3'>
              <Box fontWeight={700}>
                FundiesCollab
              </Box>

            </Typography>
            <Typography variant='h5'>A collaborative online code editor.</Typography>

            <div className={styles.projectRow}>

              <Img
                fluid={data.fundies.childImageSharp.fluid}
                className={styles.projectImage}
              />

              <div
                className={[
                  styles.projectsColumn,
                  styles.projectDescription
                ].join(' ')}
              >
                <Box marginTop={2}>
                  <Typography variant='body2' gutterBottom>
                    FundiesCollab is a collaborative real-time code
                    editor for Java that allows users to instantly
                    compile and test their code using the Tester and
                    Image libraries from the introductory Computer
                    Science courses at Northeastern University.
                    FundiesCollab uses Vue for the frontend, and a
                    combination of socket.io, Docker, and Redis on
                    an Express server to create secure, fast, and
                    persistent "rooms" where users can code together.
                  </Typography>
                  <div className={styles.linksContainer}>
                    <Link href='https://github.com/rymaju/fundiescollab'>
                      See Code
                    </Link>
                                        &nbsp;|&nbsp;
                    <Link href='https://fundiescollab.com'>
                      View Live
                    </Link>
                  </div>
                </Box>

              </div>
            </div>

            <Typography variant='h6'>design+development</Typography>

            <Typography variant='h3'>
              <Box fontWeight={700}>
                Gatsby Portfolio & Blog
              </Box>

            </Typography>
            <Typography variant='h5'>A lightweight portfolio for my work.</Typography>

            <div className={styles.projectRow}>
              <Img
                fluid={data.portfolio.childImageSharp.fluid}
                className={styles.projectImage}
              />

              <div
                className={[
                  styles.projectsColumn,
                  styles.projectDescription
                ].join(' ')}
              >
                <Box marginTop={2}>
                  <Typography variant='body2' gutterBottom>
                    My personal site was built using GatsbyJS, which
                    required knowledge of ReactJS as well as basic
                    HTML/CSS and Javascript. Additional libraries
                    such as anime.js were used in order to create
                    SVG Path animations such as on the at the top of
                    this page. SEO components were also used to
                    increase searchability of the site, and uses
                    Gatsby lazy loading to achieve nearly perfect
                    scores on Lighthouse web audit.
                  </Typography>
                  <div className={styles.linksContainer}>
                    <Link href='https://github.com/rymaju/GatsbyJS-Portfolio-Site'>
                      See Code
                    </Link>
                                    &nbsp;|&nbsp;
                    <Link href='https://ryan-jung.netlify.com'>
                      View Live (You're already here)
                    </Link>
                  </div>
                </Box>

              </div>
            </div>

            <Typography variant='h6'>development</Typography>
            <Typography variant='h3'>
              <Box fontWeight={700}>
                Explorable Trie
              </Box>
            </Typography>
            <Typography variant='h5'>A D3 visualization of the Trie data structure.</Typography>
            <div className={styles.projectRow}>
              <Img
                fluid={data.explorable_trie.childImageSharp.fluid}
                className={styles.projectImage}
              />

              <div
                className={[
                  styles.projectsColumn,
                  styles.projectDescription
                ].join(' ')}
              >
                <Box marginTop={2}>
                  <Typography variant='body2' gutterBottom>
                    Explorable Trie is a educational web page that
                    allows users to learn about and play with the
                    Trie data structure. This was a final project
                    for my high school data structures course. It
                    uses basic Javascript and D3.js to display the
                    interactive Trie model.
                  </Typography>
                  <div className={styles.linksContainer}>
                    <Link href='https://github.com/rymaju/explorable-trie'>
                      See Code
                    </Link>
                                    &nbsp;|&nbsp;
                    <Link href='http://explorable-trie.glitch.me/'>
                      View Live
                    </Link>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </ProjectsContainer>
    </Container>
  )
}

export default Projects
