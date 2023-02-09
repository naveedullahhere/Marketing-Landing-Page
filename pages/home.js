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

const Homemain = () => {


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
                starting for Rs 5000 per Month.
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
            <div className="col-sm-8 my-md-auto my-3 text-end">
              <h1 className={styles.heading}>
                rent or lease a website :
              </h1>
              <p className={styles.para}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora pariatur mollitia in laboriosam, odit ad ipsum nulla delectus nemo, neque illum minima facere amet, explicabo unde soluta quisquam cumque! Facere obcaecati nobis reiciendis quaerat molestiae ipsam totam deserunt, dolor debitis explicabo consectetur cupiditate? Ut repudiandae consequatur doloremque eveniet earum itaque, veniam distinctio cumque assumenda quaerat nulla nesciunt harum molestiae ipsum laudantium quos obcaecati?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1 className={styles.heading}>
                what is a website leasing or website renting?
              </h1>
            </div>
            <div className="col-12">
              <p className={`my-3 ${styles.para}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora pariatur mollitia in laboriosam, odit ad ipsum nulla delectus nemo, neque illum minima facere amet, explicabo unde soluta quisquam cumque! Facere obcaecati nobis reiciendis quaerat molestiae ipsam totam deserunt, dolor debitis explicabo consectetur cupiditate? Ut repudiandae consequatur doloremque eveniet earum itaque, veniam distinctio cumque assumenda quaerat nulla nesciunt harum molestiae ipsum laudantium quos obcaecati?
              </p>
              <p className={`my-4 ${styles.para}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <p className={`${styles.para} text-main`}>
                <i>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora pariatur mollitia in laboriosam, odit ad ipsum nulla delectus nemo, neque illum minima facere amet, explicabo unde soluta quisquam cumque! Facere obcaecati nobis reiciendis quaerat molestiae ipsam totam deserunt, dolor debitis explicabo consectetur cupiditate? Ut repudiandae consequatur doloremque eveniet earum itaque, veniam distinctio cumque assumenda quaerat nulla nesciunt harum molestiae ipsum laudantium quos obcaecati?
                </i>
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
                step for our website rental
              </h1>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants0} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }} >


                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step1} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 1. Analyze
                    </p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magni accusantium sed. Labore doloribus saepe voluptate numquam hic reiciendis corrupti iste, quam in.
                    </p>
                  </div>


                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants1} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step2} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 2. Analyze
                    </p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magni accusantium sed. Labore doloribus saepe voluptate numquam hic reiciendis corrupti iste, quam in.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants2} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step3} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 3. Analyze
                    </p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magni accusantium sed. Labore doloribus saepe voluptate numquam hic reiciendis corrupti iste, quam in.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className={`col-lg-3 col-sm-6 col-12 my-3 ${styles['rental-steps']}`}>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={cardVariants3} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
                  <div className={styles['web-rental-step']}>
                    <div>
                      <Image src={Step4} style={{ width: '122px', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p className="my-3">
                      Step 4. Analyze
                    </p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magni accusantium sed. Labore doloribus saepe voluptate numquam hic reiciendis corrupti iste, quam in.
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
                you will recieve eleven items from your rental website:
              </h1>
              <ul className='ps-0 mt-md-1 mt-3'>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li className='ms-3'><p className='mb-0'><b>100% Custom website design: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
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