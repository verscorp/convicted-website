import React from 'react'
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite'
import Container from './common/Container'
import logo from '../static/icons/logo.svg'
import { Discord, Twitter, Facebook, Github, Telegram } from './Social'

export default function Footer() {
    return (
        <div style={{ marginTop: 100, width: '100%', height: 300 }}>
            <Container>
                <div className={css(styles.footer)}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className={css(styles.footerContent)}>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={css(styles.footerMenu)}>
                                    <span className={css(styles.footerItem)}>PLAY & EARN</span>
                                    <span className={css(styles.footerItem)}>MARKETPLACE</span>
                                    <span className={css(styles.footerItem)}>REGISTRATION</span>
                                    <span className={css(styles.footerItem)}>STAKING</span>
                                    <span className={css(styles.footerItem)}>LIQUIDITY</span>
                                </div>
                                <div className={css(styles.footerMenu)}>
                                    <Link to="/whitepaper" style={{ textDecoration: 'none' }}><span className={css(styles.footerItem)}>WHITEPAPER</span></Link>
                                    <span className={css(styles.footerItem)}>ROADMAP</span>
                                    <span className={css(styles.footerItem)}>GETTING STARTED</span>
                                    <Link to="/faq" style={{ textDecoration: 'none' }}><span className={css(styles.footerItem)}>FAQ</span></Link>
                                    <span className={css(styles.footerItem)}>PRIVACY POLICY</span>
                                    <span className={css(styles.footerItem)}>TERMS & CONDITIONS</span>
                                </div>
                                <div className={css(styles.footerMenu)}>
                                    <span className={css(styles.footerItem)}>CONTRIBUTORS</span>
                                    <span className={css(styles.footerItem)}>CAREERS</span>
                                    <span className={css(styles.footerItem)}>INVESTEMENTS</span>
                                </div>
                            </div>
                        </div>
                        <div className={css(styles.footerContactContent)}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div className={css(styles.footerIcons)}>
                                    <Discord />
                                </div>
                                <div className={css(styles.footerIcons)}>
                                    <Twitter />
                                </div>
                                <div className={css(styles.footerIcons)}>
                                    <Facebook />
                                </div>
                                <div className={css(styles.footerIcons)}>
                                    <Telegram />
                                </div>
                                <div className={css(styles.footerIcons)}>
                                    <Github />
                                </div>
                            </div>
                            <div className={css(styles.footerContact)}>
                                <span className={css(styles.footerContactTitle)}>Support</span>
                                <span className={css(styles.footerContactDescr)}>support@convicted.app</span>
                            </div>
                            <div className={css(styles.footerContact)}>
                                <span className={css(styles.footerContactTitle)}>Investments</span>
                                <span className={css(styles.footerContactDescr)}>investments@convicted.app</span>
                            </div>
                        </div>
                    </div>
                    <span className={css(styles.footerCompany)}>USA, Delaware. Vers Corporation, Tax ID - 61-2024187</span>
                </div>
                <div className={css(styles.footerMobile)}>
                    <div style={{ marginLeft: 10 }}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={css(styles.footerContactContent)}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', order: 2, marginTop: 20 }}>
                            <div className={css(styles.footerIcons)}>
                                <Discord />
                            </div>
                            <div className={css(styles.footerIcons)}>
                                <Twitter />
                            </div>
                            <div className={css(styles.footerIcons)}>
                                <Facebook />
                            </div>
                            <div className={css(styles.footerIcons)}>
                                <Telegram />
                            </div>
                            <div className={css(styles.footerIcons)}>
                                <Github />
                            </div>
                        </div>
                        <div style={{ order: 1 }}>
                            <div className={css(styles.footerContact)}>
                                <span className={css(styles.footerContactTitle)}>Support</span>
                                <span className={css(styles.footerContactDescr)}>support@convicted.app</span>
                            </div>
                            <div className={css(styles.footerContact)}>
                                <span className={css(styles.footerContactTitle)}>Investments</span>
                                <span className={css(styles.footerContactDescr)}>investments@convicted.app</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 5, marginTop: 40, flexWrap: 'wrap' }}>
                        <div className={css(styles.footerMenu)}>
                            <span className={css(styles.footerItem)}>PLAY & EARN</span>
                            <span className={css(styles.footerItem)}>MARKETPLACE</span>
                            <span className={css(styles.footerItem)}>REGISTRATION</span>
                            <span className={css(styles.footerItem)}>STAKING</span>
                            <span className={css(styles.footerItem)}>LIQUIDITY</span>
                        </div>
                        <div className={css(styles.footerMenu)}>
                            <Link to="/whitepaper" style={{ textDecoration: 'none' }}><span className={css(styles.footerItem)}>WHITEPAPER</span></Link>
                            <span className={css(styles.footerItem)}>ROADMAP</span>
                            <span className={css(styles.footerItem)}>GETTING STARTED</span>
                            <Link to="/faq" style={{ textDecoration: 'none' }}><span className={css(styles.footerItem)}>FAQ</span></Link>
                            <span className={css(styles.footerItem)}>PRIVACY POLICY</span>
                            <span className={css(styles.footerItem)}>TERMS & CONDITIONS</span>
                        </div>
                        <div className={css(styles.footerMenu)}>
                            <span className={css(styles.footerItem)}>CONTRIBUTORS</span>
                            <span className={css(styles.footerItem)}>CAREERS</span>
                            <span className={css(styles.footerItem)}>INVESTEMENTS</span>
                        </div>
                    </div>
                    <span className={css(styles.footerCompany)}>USA, Delaware. Vers Corporation, Tax ID - 61-2024187</span>
                </div>
            </Container>
        </div>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: '60px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        '@media(max-width: 992px)': {
            padding: '60px 20px 0 20px',
        },
        '@media(max-width: 576px)': {
            display: 'none',
        },
    },
    footerItem: {
        color: '#B0B0B0',
        fontWeight: 'normal',
        fontSize: 20,
        marginTop: 5,
        transition: '0.2s',
        cursor: 'pointer',
        ':hover': {
            color: 'white',
        },
    },
    footerMenu: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 80,
        '@media(max-width: 992px)': {
            marginLeft: 60,
            ':nth-child(1)': {
                marginLeft: 15,
            },
        },
        '@media(max-width: 768px)': {
            marginLeft: 30,
        },
        '@media(max-width: 576px)': {
            width: '46%',
            marginLeft: 0,
            ':nth-child(3n)': {
                marginLeft: 15,
            },
        },
    },
    footerContact: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
    },
    footerContactTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15,
    },
    footerContactDescr: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15,
        color: '#B0B0B0',
    },
    footerCompany: {
        display: 'flex',
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 15,
        justifyContent: 'center',
        marginTop: 40,
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'row',
        '@media(max-width: 992px)': {
            flexDirection: 'column',
        },
        '@media(max-width: 576px)': {
            alignItems: 'center',
        },
    },
    footerContactContent: {
        '@media(max-width: 576px)': {
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 20,
        },
    },
    footerIcons: {
        width: 40,
        height: 'auto',
        marginLeft: 20,
        cursor: 'pointer',
        ':nth-child(1)': {
            marginLeft: 0,
        },
    },
    svg: {
        transition: '0.1s',
        ':hover': {
            fill: '#5865F2',
        },
    },
    footerMobile: {
        display: 'none',
        '@media(max-width: 576px)': {
            display: 'block',
            paddingBottom: 30,
        },
    },
})
