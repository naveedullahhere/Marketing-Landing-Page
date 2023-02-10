import Logo from '@/public/img/footerLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

export const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true)

        data = JSON.stringify(data);
        fetch(`https://marketingchapter.com.pk/e-panel/api/newsletter-subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(json => { 
                if (json.success) {
                    toast.success(json.message);
                }
                else {
                    toast.error(json.message);
                }
                setIsLoading(false);
                reset()
            }).catch(err => {
                toast.error("Something Went Wrong!");
                setIsLoading(false);
            })
    };
    const userid = 1;
    return (
        <footer className="py-md-4 py-3 bg-secondary text-white">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-sm-6 my-md-0 my-3">
                        <Link href="/" className=" ">
                            <Image src={Logo} style={{ width: '50%', objectFit: 'contain', height: "100%" }} />
                        </Link>
                    </div>
                    <div className="col-sm-6 my-md-0 my-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-sm-12 ms-auto">

                                <div className="d-flex w-100 gap-2 flex-column mt-3">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" class={`form-control mb-2 shadow-none text-dark border-0 py-2 ${errors.email && "form-control is-invalid  text-dark"}`} {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email address" />
                                        <input type="hidden" name="user_id" value={userid} />
                                        <p className="my-2">
                                            {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}
                                        </p>

                                        <button className="btn btn-main w-100 bg-main-light" type="submit">
                                            Subscribe
                                            {isLoading &&
                                                <div className="spinner-border me-5" style={{ "float": "right" }} role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            }
                                        </button>

                                        <Link className="btn btn-main w-100 bg-main-light mt-2" target={'_blank'} href="https://marketingchapter.com.pk/">VISIT MARKETING CHAPTER</Link>


                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
