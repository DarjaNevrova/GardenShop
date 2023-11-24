import React from 'react';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { CiInstagram } from "react-icons/ci";
import style from './style.module.css';
import Container from '../../UI/Container';

export default function Footer() {
    return (
        <Container>
            <div className={style.footerContainer}>
                <div className={style.contactAddressWrapper}>
                    <p className={style.contact}>Contact</p>
                    <p className={style.number}>+49 999 999 99 99</p>
                    <div className={style.socialIcons}>
                        <a href="https://instagram.com/startainstitute?igshid=NTc4MTIwNjQ2YQ==">
                            <p className={style.instagramIcon}><CiInstagram /></p>
                        </a>
                        <p className={style.whatsappIcon}><PiWhatsappLogoLight /></p>
                    </div>
                </div>
                <div className={style.information}>
                    <p className={style.adress}>Address</p>
                    <p className={style.schoolAdresses}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                    <p className={style.hours}>Working Hours:</p>
                    <p className={style.hours24}>24 hours a day</p>
                </div>
                <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792297!2d13.372469776680424!3d52.507932872058106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2slv!4v1697825668793!5m2!1sru!2slv" ></iframe>
            </div>
        </Container>
    )
}