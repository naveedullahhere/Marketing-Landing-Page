import React from 'react'
import styles from '@/styles/Home.module.css';
import Sec2 from '@/public/img/sec-2.png'
import Sec1 from '@/public/img/sec-1.png'
import Step1 from '@/public/img/step1.png'
import Step2 from '@/public/img/step2.png'
import Step3 from '@/public/img/step3.png'
import Step4 from '@/public/img/step4.png'
import Image from 'next/image';
import Contact from '@/Components/contact';
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import Head from 'next/head';

const Homemain = ({ title, description }) => {


  const cardVariants0 = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    }
  };
  const cardVariants1 = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const cardVariants2 = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };
  const cardVariants3 = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

  // const hue = (h) => `hsl(${h}, 100%, 50%)`;
  // const background = `linear-gradient( ${hue(33)}, ${hue(33)})`;

  return (
    <>

      <Head>
        <title>{title}</title>
        <meta description={description} name="description" />
      </Head>
      <div className={`${styles.sec} bg-secondary text-white`}>
        <div className="container">
          <div className="row">
            <div className="col-6 my-md-auto my-3">
              <h1 className={styles.heading}>
                rent or lease a website
              </h1>
              <h1 className={styles['heading-sm']}>
                starting for Rs 5000 per Month.
              </h1>
              <p className={styles.para}>
                Custom made responsive website with Free hosting

                and domain connections.
              </p>
            </div>
            <div className="col-6 my-md-auto my-3">
              <Image src={Sec1} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

      </div>
      <div className={styles.sec}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 my-md-auto my-3">
              <Image src={Sec2} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className='p-sm-1 p-4' />
            </div>
            <div className="col-sm-8 my-md-auto my-3 text-md-end text-center">
              <h1 className={styles.heading}>
                rent or lease a website
              </h1>
              <p className={styles.para}>
                Covid 19 has dramatically changed our lives. Many small
                companies struggle to survive. In this context, it is very challenging
                to invest ad lump sum on a website. We are offering a website rental
                service to help such entrepreneurs. A website can be rented now.
                Gain a functional website from only Rs 5000 per month. Our offer
                includes a hand-made professional responsive website, web
                hosting, business email, conversion rate optimization and monthly 
                updates. You do what you do the best and let us manage your web 
                presence. </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1 className={styles.heading}>
                WHAT IS A WEBSITE LEASING
                OR WEBSITE RENTING?
              </h1>
            </div>
            <div className="col-12">
              <p className={`my-3 ${styles.para}`}>
                Small or new businesses often struggle to pay 5 to 7 lacs to build their new website and not have surplus money
                to promote them. Development of a website can be time-consuming and costly affairs. Website maintenance,
                server costs, and designing costs can often get out of control. Moreover, to keep web-site current, constant
                tweaking and upgrading adds more time and cost.

              </p>
              <p className={`my-4 ${styles.para}`}>
                So, there is a better way to handle this — renting or leasing a website!               </p>
              <p className={`${styles.para} text-main`}>
                <i>
                  According to Wikipedia "Website leasing is an agreement between the user (lessee) and the owner (lessor)
                  whereby the privilege of using a website is offered in exchange for regular payments. Website Rental is a similar concept, however, often does not always require a fixed agreement.
                  The idea of website leasing or Rental is for a user to have a website promoting their products or services but not have any overall ownership of the site (in some cases the Domain name can be owned by the lessee or renter). Generally, the website owner will charge a monthly or annual fee for this service.”                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sec}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className={styles.heading}>
                STEP FOR OUR WEBSITE RENTAL
              </h1>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container h-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants0} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} className="h-100" >


                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step1} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 1. Analyze
                    </p>
                    <p className="mb-0">
                      In order to know your business and necessity, we will send you a questionnaire. This consultation is 100% FREE.                    </p>
                  </div>


                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container h-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants1} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} className="h-100" >
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step2} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 2. Strategize
                    </p>
                    <p className="mb-0">
                      After understanding your requirements, we will propose a monthly rental fee. You then have to sign an agreement with us.              </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container h-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants2} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} className="h-100" >
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step3} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 3. Implement
                    </p>
                    <p className="mb-0">
                      Once we agree, your website will be hosted online by our professional team within a week.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container h-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants3} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} className="h-100" >
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step4} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 4. Make Live
                    </p>
                    <p className="mb-0">
                      You can start earning money now with your own website. You only have to pay a monthly or annual rental fee for us.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sec} id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-7 my-md-auto my-3">
              <h1 className={styles.heading}>
                YOU WILL RECEIVE ELEVEN ITEMS
                FROM YOUR RENTAL WEBSITE:
              </h1>
              <ul className='ps-0 mt-md-1 mt-3'>
                <li className='ms-3'><p className='mb-0'><b>100% custom website designed </b>exclusive for your business—website architecture,
                  design, logo, image and content, to your complete satisfaction.</p></li>
                <li className='ms-3'><p className='mb-0'><b>No big cash deposit up front, </b> just low pre-agreed monthly payments—your
                  website pays for itself!</p></li>
                <li className='ms-3'><p className='mb-0'><b>Professional guidance  </b>as you assemble and create the content for your site.</p></li>
                <li className='ms-3'><p className='mb-0'><b> Choose a conventional site, </b> a blog, or a site-plus-blog.</p></li>
                <li className='ms-3'><p className='mb-0'><b>Free web site hosting  </b> is included in your monthly rental fee.</p></li>
                <li className='ms-3'><p className='mb-0'><b>Social media integration </b> your visitors can share your site via Facebook, Twitter,
                  Linkedin, etc.... and follow your social profiles too, just by clicking a button.</p></li>
                <li className='ms-3'><p className='mb-0'><b>Mailing list integration. </b> We hook up web email signup forms for all the major
                  mailing list managers—Aweber, MailChimp, Constant Contact, or whatever one you
                  choose (you pay any ongoing fees charged by a list manager service).</p></li>
                <li className='ms-3'><p className='mb-0'><b>Analytics included, </b>so you can track your site visitors and how they find your site.</p></li>
                <li className='ms-3'><p className='mb-0'><b>Free Google sitemap  </b>that helps get your site found more quickly by automatically
                  letting Google know any time you add a page or a blog post to your site.</p></li>
                <li className='ms-3'><p className='mb-0'><b>Basic-SEO </b> — your entire site with all of the hidden custom tags that help your site
                  attract visitors more quickly.</p></li>
                <li className='ms-3'><p className='mb-0'><b> Code based platform </b>— the open source platform that makes editing your site as typing in Word.</p></li>
              </ul>
            </div>
            <div className="col-md-5 my-md-auto my-3">
              <div className="bg-secondary rounded-3 p-3 text-white">
                <h1 className={styles.heading}>
                  send us your requirements
                </h1>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className={`text-main mb-0 ${styles.heading}`}>
                speak with conversion expert
              </h1>
              <p className={`my-3 ${styles.para}`}>
                give us 30 minutes and we'll show you how we can help you achieve better results.
              </p>
              <Link href={'/'} className="btn btn-main bg-secondary text-uppercase w-auto">
                SCHEDULE MY CALL NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homemain

export async function getStaticProps() {
  return {
    props: {
      title: "Home",
      description: "Marketing Chapter | Home"
    }
  }
}