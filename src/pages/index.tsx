import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {width} from "@mui/system";
import {Divider} from "@mui/material";

export default function Home() {
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Asurion Rentals +</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLogo}>
                        <img className={styles.innerImage} src="https://i.ibb.co/C22zGXf/rental-logo.png"
                             alt="rental-logo"/>
                    </div>
                    <div className={styles.headerButtons}>
                        <div className={styles.asurionButton}>
                            <div className={styles.asurionButtonContent}>
                                <img src={'https://i.ibb.co/z4LWZWZ/Vector.png'}/>
                                <div>My Account</div>
                            </div>
                        </div>
                        <div className={styles.asurionButton2}>Claims</div>
                    </div>
                </div>
                <div className={styles.hero}>
                    <div className={styles.mobileHeroImage}>
                        <img className={styles.innerImageHero} src="https://i.ibb.co/zPwwwtm/Mobile-Hero-image.png"
                             alt="Mobile-Hero-image"/>
                    </div>
                    <div className={styles.heroText}>
                        <div className={styles.heroTextContainer}>
                            <div className={styles.heroText1}>The new way to protect your rental investment</div>
                        </div>
                        <div className={styles.heroTextContainer}>
                            <div className={styles.heroText2}>From home tech to appliances, we’ve got you covered.</div>
                        </div>
                        <div className={styles.heroTextContainer}>
                            <div className={styles.asurionButton3}
                                 onClick={() => window.open('https://enroll.asurion.com/home-plus')}>Sign up now
                            </div>
                        </div>
                    </div>
                    <div className={styles.desktopHeroImage}>
                        <img className={styles.innerImage} src="https://i.ibb.co/s2YwZ7j/Desktop-Hero-image.png"
                             alt="Desktop-Hero-image"/>
                    </div>
                </div>
                <div className={styles.mobileBubbles}>
                    <img className={styles.innerImage} src="https://i.ibb.co/qBvDVLb/Mobile-bubbles.png"
                         alt="Mobile-bubbles"/>
                </div>
                <div className={styles.text1}>Protect your rental home for less than $2 a day</div>
                <div className={styles.text2}>Asurion Rental+ offers coverage for all of the tech and appliances in your
                    rental home.
                    From TVs and gaming consoles, to washers and dryers, we’re here to help.
                </div>
                <div className={styles.desktopBubbles}>
                    <img className={styles.innerImage} src="https://i.ibb.co/17PX4bM/Desktop-bubbles.png"
                         alt="Desktop-bubbles"/>
                </div>
                <div className={styles.coverageAndSupportContainer}>
                    <div className={styles.coverageAndSupportImage}>
                        <img className={styles.innerImageHero} src="https://i.ibb.co/NNWJgxD/PNG-APP-D1-210629-0139.png"
                             alt="PNG-APP-D1-210629-0139"/>
                    </div>
                    <div className={styles.coverageAndSupportText}>
                        <div className={styles.coverageAndSupportTextTitle}>Coverage and support, all in one plan</div>
                        <div className={styles.coverageAndSupportTextItem}>
                            <div className={styles.coverageAndSupportTextCheck}><img className={styles.innerImage}
                                                                                     src="https://i.ibb.co/QYrLz6b/Checkmark-V.png"
                                                                                     alt="Checkmark-V"/></div>
                            <div>Thousands of devices and appliances covered, including future purchases</div>
                        </div>
                        <div className={styles.coverageAndSupportTextItem}>
                            <div className={styles.coverageAndSupportTextCheck}><img className={styles.innerImage}
                                                                                     src="https://i.ibb.co/QYrLz6b/Checkmark-V.png"
                                                                                     alt="Checkmark-V"/></div>
                            <div>Simple claims, no receipts necessary</div>
                        </div>
                        <div className={styles.coverageAndSupportTextItem}>
                            <div className={styles.coverageAndSupportTextCheck}><img className={styles.innerImage}
                                                                                     src="https://i.ibb.co/QYrLz6b/Checkmark-V.png"
                                                                                     alt="Checkmark-V"/></div>
                            <div>24/7 Expert support for you and your guests online, at home, or in-store</div>
                        </div>
                        <div className={styles.coverageAndSupportTextImages}>
                            <div className={styles.coverageAndSupportTextImage1}>
                                <img className={styles.innerImage} src="https://i.ibb.co/QNC3wH1/home-logo.png"
                                     alt="home-logo"/>
                            </div>
                            <div className={styles.coverageAndSupportTextImage2}>
                                <img className={styles.innerImage} src="https://i.ibb.co/xmnfcr0/appliance-logo.png"
                                     alt="appliance-logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider light/>
                <div className={styles.footer}>
                    <div className={styles.footerLogo}><img className={styles.innerImage}
                                                            src="https://i.ibb.co/wKvk4f4/asurion-Logo.png"
                                                            alt="asurion-Logo"/></div>
                    <div className={styles.footerLinks}>
                        <a className={styles.footerLink} href={'/'}>Terms of Use</a>
                        <a className={styles.footerLink} href={'/'}>Privacy Policy</a>
                        <a className={styles.footerLink} href={'/'}>Do Not Sell My Information</a>
                        <div className={styles.footerLink}>© Asurion 1992-2021</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
