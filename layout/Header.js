
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/public/img/logo.png';


const Header = () => {


    return (
        <>
            <div className="navigation-wrap bg-white start-header start-style py-3">
                <div className="container">
                    <div className="row w-100 mx-auto">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light justify-content-between">
                                <Link href="/" className="navbar-brand me-lg-5">
                                    <Image src={Logo} className="blogo" width={148} height={78} />
                                    {/* <img src={Logo} alt="Discount Space" className='blogo' width="90" /> */}
                                </Link>


                                <div className='w-50 text-end'>
                                    <a href='#contact' className="btn btn-main bg-main text-uppercase w-auto">
                                        GET A proposal
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header