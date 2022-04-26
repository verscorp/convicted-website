import React, {useState} from 'react'
import {css, StyleSheet} from 'aphrodite'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../static/icons/logo.svg'
import menuArrow from '../static/icons/menuArrow.svg'
import Button from './common/Button'
import Hamburger from '../static/icons/hamburger.svg'
import {DiscordMobile, TwitterMobile, FacebookMobile, GithubMobile, TelegramMobile} from './Social'

export default function Header({height, boxShadow = true, back, imageFull = false}) {
    const [burger, setBurger] = useState(false)
    const [menuItem, setMenuItem] = useState(null)
    const [languageItem, setLanguageItem] = useState(false)
    const [menuBurgerItem, setMenuBurgerItem] = useState(null)
    const navigate = useNavigate()

    const menu = [
        {id: 1, soon: false, title: 'NEWS', img: false, href: '/news'},
        {
            id: 2,
            title: 'TOKENS',
            img: true,
            icons: false,
            soon: true,
            submenu: [
                {title: 'TOKENOMICS', href: '/tokenomics'},
                {title: 'DAO/TOKEN INFORMATION', href: '/token-information'},
                {title: 'BUY INTERNAL TOKENS', soonTitle: 'coming soon'}
            ],
        },
        {
            id: 3,
            title: 'PAPERS',
            img: false,
            icons: false,
            soon: false,
            submenu: [{title: 'WHITEPAPER', href: '/whitepaper'}, {title: 'PITCH DECK', href: '/pitchdeck'}],
        },
        // { id: 4, title: 'STAKING / LIQUIDITY', img: true },
        {
            id: 5,
            title: 'COMMUNITY',
            img: true,
            icons: true,
            soon: false,
            submenu: [{
                title: 'DISCORD',
                icon: <DiscordMobile/>,
                href: 'http://discord.gg/ZqjwdSDk8c'
            }, {title: 'TWITTER', icon: <TwitterMobile/>, href: 'https://twitter.com/convictednft'}, {
                title: 'TELEGRAM',
                icon: <TelegramMobile/>,
                href: 'https://t.me/convictednft'
            }, {
                title: 'FACEBOOK',
                icon: <FacebookMobile/>,
                href: 'https://www.facebook.com/convictednft'
            }, {title: 'GITHUB', icon: <GithubMobile/>, href: 'https://github.com/verscorp'}],
        },
        {
            id: 6,
            title: 'MORE',
            img: true,
            soon: false,
            icons: false,
            submenu: [
                {title: 'FAQ', href: '/faq'},
                {title: 'GUIDE TO CRYPTOCURRENCY', href: '/guide'},
                {title: 'CONTRIBUTORS', href: '/contributors'},
                {title: 'CAREERS', href: '/careers'},
                {title: 'INVESTMENTS', href: '/investements'}
            ],
        },
    ]

    return (
        <>
            <div className={css(styles.wrapper, boxShadow && styles.shadow)} style={{height: height || '100%'}}>
                <div className={css(styles.header)}>
                    {burger ? (
                        <div className={css(styles.burgerContent)}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 30,
                                padding: '0 15px',
                            }}>
                                <div style={{maxWidth: 220, height: 'auto'}}>
                                    <img src={logo} alt="" className={css(styles.logo)}/>
                                </div>
                                <div className={css(styles.burger)} onClick={() => setBurger(!burger)}>
                                    <img src={Hamburger} alt=""/>
                                </div>
                            </div>
                            <div style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflowY: 'scroll',
                                // marginTop: 20
                            }}>
                                <ul style={{listStyleType: 'none', padding: 0}}>
                                    {menu.map((item) => (
                                        <div key={item.id}>
                                            <div className={css(styles.burgerItem)}
                                                 onClick={() => {
                                                     if (item.href) {
                                                         navigate('/news')
                                                         return
                                                     }
                                                     setMenuBurgerItem(menuBurgerItem && menuBurgerItem === item.id ? null : item.id)
                                                 }}>
                                                <li className={css(styles.burgerItemText)}>{item.title}</li>
                                                {item.submenu?.length > 0 ? (
                                                    <div style={{
                                                        width: 10,
                                                        height: 6,
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        <img src={menuArrow} alt="" style={{marginLeft: 5}}/>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div>
                                                {item.submenu?.length > 0 && menuBurgerItem === item.id ? (
                                                    <div className={css(styles.dropdownBurgerMenu)}>
                                                        {item.submenu.map((itemChild) => (
                                                            <div key={itemChild.href}>
                                                                {itemChild.href && item.icons === true ? (
                                                                    <div style={{marginTop: 10}}>
                                                                        <a href={itemChild.href} target="_blank"
                                                                           referrerPolicy="no-referrer"
                                                                           rel="noreferrer"
                                                                           className={css(styles.dropdownBurgerLink)}>
                                                                            <div style={{
                                                                                width: 19,
                                                                                height: 19,
                                                                                marginRight: 10
                                                                            }}>
                                                                                {itemChild.icon}
                                                                            </div>
                                                                            <span
                                                                                className={css(styles.dropdownBurgerText)}>
                                                                            {itemChild.title}
                                                                        </span>
                                                                        </a>
                                                                    </div>
                                                                ) : (
                                                                    <div className={css(styles.dropdownBurgerLink)}>
                                                                        <a href={itemChild.href}>
                                                                        <span
                                                                            className={css(styles.dropdownBurgerText)}>
                                                                            {itemChild.title}
                                                                        </span>
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                                <div>
                                    <div className={css(styles.burgerLanguage)}>
                                        <span className={css(styles.burgerLanguageTitle)}>LOGIN/REGISTER</span>
                                        <span className={css(styles.burgerLanguageTitle)}>SELECT LANGUAGE</span>
                                    </div>
                                    <div className={css(styles.burgerButtons)}>
                                        <Button
                                            text="marketplace"
                                            className={css(styles.burgerButton)}
                                        />
                                        <Button
                                            text="download"
                                            style={{marginLeft: 20}}
                                            className={css(styles.burgerButton)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className={css(styles.headerMobile)}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <div style={{maxWidth: 220, height: 'auto'}}>
                                    <img src={logo} alt="" className={css(styles.logo)}/>
                                </div>
                            </Link>

                            <div style={{marginLeft: 20}}>
                                <ul className={css(styles.menu)}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            {menu.map((item) => (
                                                <div key={item.id} style={{display: 'flex', flexDirection: 'column'}}>
                                                    <div
                                                        style={menuItem === item.id ? {
                                                            backgroundColor: 'rgba(47, 47, 47, 0.5)',
                                                            borderRadius: '5px 0',
                                                            border: 2,
                                                            borderStyle: 'solid',
                                                            borderColor: 'transparent',
                                                        } : null}
                                                        className={css(styles.menuItem)}
                                                        onClick={() => {
                                                            if (item.href) {
                                                                navigate('/news')
                                                            }
                                                        }}
                                                        onMouseEnter={() => {
                                                            if (!item.href) {
                                                                setMenuItem(menuItem && menuItem === item.id ? null : item.id)
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            if (!(item.submenu?.length > 0) && !item.href) {
                                                                setMenuItem(false)
                                                            }
                                                        }}>
                                                        <li key={item.id}
                                                            className={css(styles.menuItemText)}>{item.title}</li>
                                                        {item.submenu?.length > 0 ? (
                                                            <div style={{
                                                                width: 10,
                                                                height: 6,
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}>
                                                                <img src={menuArrow} alt="" style={{marginLeft: 5}}/>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    <div>
                                                        {item.submenu?.length > 0 && menuItem === item.id ? (
                                                            <div onMouseLeave={() => setMenuItem(false)}
                                                                 className={css(styles.dropdownMenu)}>
                                                                {item.submenu.map((itemChild) => (
                                                                    <div>
                                                                        {itemChild.href && item.icons === true ? (
                                                                            <div style={{marginTop: 10}}>
                                                                                <a href={itemChild.href}
                                                                                   target="_blank"
                                                                                   referrerPolicy="no-referrer"
                                                                                   rel="noreferrer"
                                                                                   className={css(styles.dropdownLink)}>
                                                                                    <div style={{
                                                                                        width: 19,
                                                                                        height: 19,
                                                                                        marginRight: 10
                                                                                    }}>
                                                                                        {itemChild.icon}
                                                                                    </div>
                                                                                    <span
                                                                                        className={css(styles.dropdownText)}>
                                                                                    {itemChild.title}
                                                                                </span>
                                                                                </a>
                                                                            </div>
                                                                        ) : (
                                                                            <div style={{marginTop: 10}}>
                                                                                <a href={itemChild.href}
                                                                                   className={css(styles.dropdownLink)}>
                                                                                <span
                                                                                    className={css(styles.dropdownText)}>
                                                                                    {itemChild.title}
                                                                                </span>
                                                                                </a>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={css(styles.burger)} onClick={() => setBurger(!burger)}>
                            <img src={Hamburger} alt=""/>
                        </div>
                    </div>
                    <div className={css(styles.menuLanguage)}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{textAlign: 'right'}}>
                                <span className={css(styles.menuOption)}>LOGIN/REGISTER</span>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                                     onMouseEnter={() => setLanguageItem(true)}>
                                    <span className={css(styles.menuOption)}>SELECT LANGUAGE</span>
                                    <img src={menuArrow} style={{marginLeft: 5}} alt=""/>
                                </div>
                            </div>
                            {languageItem ? (
                                <div className={css(styles.languageMenu)} onMouseLeave={() => setLanguageItem(false)}>
                                    <span className={css(styles.languageMenuText)}>English</span>
                                    <span className={css(styles.languageMenuText)}>Русский (Russian)</span>
                                    <span
                                        className={css(styles.languageMenuText)}>Español - España (Spanish - Spain)</span>
                                </div>
                            ) : null}
                        </div>
                        <div className={css(styles.menuButtons)}>
                            <Button
                                text="marketplace"
                                style={{maxWidth: 200, padding: '0 25px', height: 40, fontSize: 22}}
                            />
                            <Button
                                text="download"
                                style={{marginLeft: 10, maxWidth: 200, padding: '0 30px', height: 40, fontSize: 22}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img src={back} className={css(styles.background, imageFull && styles.backFull)}/>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        '@media(max-width: 992px)': {
            width: '80%',
        },
        '@media(max-width: 576px)': {
            width: '70%',
        },
    },
    background: {
        width: '100%',
        // height: 553,
        objectFit: 'cover',
        zIndex: 100,
        height: 553,
        '@media(max-width: 576px)': {
            height: 553,
        },
    },
    backFull: {
        height: '100%',
        '@media(max-width: 576px)': {
            height: 553,
        },
    },
    shadow: {
        boxShadow: 'inset 0 -100px 70px -30px rgba(0,0,0,1)',
        '@media(max-width: 576px)': {
            boxShadow: 'inset 0 120px 70px -30px rgba(0,0,0,1)',
        },
    },
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 17,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '@media(max-width: 576px)': {
            zIndex: 1000000,
            // height: '100vh',
            paddingTop: 30
        },
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        '@media(max-width: 992px)': {
            display: 'none',
        },
    },
    menuItemText: {
        fontFamily: 'BenchNine',
        fontWeight: 800,
        fontSize: 22,
        color: 'white',
        '@media (max-width: 1200px)': {
            fontSize: 16,
        },
    },
    menuItem: {
        display: 'flex',
        padding: '7px 10px',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        marginLeft: 10,
        transition: '0.2s',
        border: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
        '@media (max-width: 1200px)': {
            marginLeft: 0,
        },
        ':hover': {
            backgroundColor: 'rgba(47, 47, 47, 0.5)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            borderStyle: 'solid',
            borderRadius: '5px 5px 0 0',
        },
    },
    headerButtons: {
        marginLeft: 15,
        '@media(max-width: 992px)': {
            display: 'none',
        },
    },
    menuOption: {
        fontFamily: 'BenchNine',
        color: '#A7A7A7',
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: '0.3s',
        ':hover': {
            color: 'white',
        },
        '@media (max-width: 1200px)': {
            fontSize: 12,
        },
        '@media(max-width: 992px)': {
            display: 'none',
        },
    },
    headerButtonsItem: {
        marginRight: 12,
        '@media(max-width: 992px)': {
            display: 'none',
        },
    },
    menuButtons: {
        maxWidth: 410,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        '@media (max-width: 992px)': {
            display: 'none',
        },
    },
    menuLanguage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media (max-width: 992px)': {
            display: 'none',
        },
    },
    burger: {
        display: 'none',
        '@media(max-width: 992px)': {
            display: 'block',
            cursor: 'pointer',
        },
    },
    headerMobile: {
        '@media(max-width: 992px)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            // position: 'fixed',
            // zIndex: '100',
            backgroundAttachment: 'fixed'
        },
    },
    burgerContent: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        zIndex: 50,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    burgerItem: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 992,
        height: 70,
        borderTop: 0.5,
        borderTopColor: 'rgba(242,242,242,0.1)',
        justifyContent: 'space-between',
        borderTopStyle: 'solid',
        alignItems: 'center',
        padding: '0 20px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    burgerItemText: {
        fontFamily: 'BenchNine',
        fontWeight: 800,
        color: '#C1C1C1',
        fontSize: 24,
        '@media(max-width: 992px)': {
            fontSize: 36
        },
        '@media(max-width: 576px)': {
            fontSize: 24
        },
    },
    burgerButtons: {
        display: 'flex',
        // height: 100,
        flexDirection: 'row',
        fontSize: 36,
        justifyContent: 'center',
        padding: '0 20px',
        marginBottom: 120,
    },
    burgerButton: {
        '@media(max-width: 992px)': {
            fontSize: 40,
            padding: 25
        },
        '@media(max-width: 576px)': {
            fontSize: 20,
            padding: 5
        },
    },
    dropdownMenu: {
        position: 'absolute',
        backgroundColor: 'rgba(47, 47, 47, 0.5)',
        border: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        marginLeft: 10,
        transitionDuration: '.3s',
        padding: '0 20px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        '@media(max-width: 1200px)': {
            marginLeft: 0,
        },
    },
    dropdownLink: {
        fontSize: 22,
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
    },
    dropdownText: {
        display: 'flex',
        flexDirection: 'row',
        color: '#C6C6C6',
        fontWeight: 'normal',
        transition: '0.3s',
        ':hover': {
            color: 'white',
        },
    },
    soon: {
        color: '#777777',
        fontSize: 8,
        fontFamily: 'Do Hyeon',
        textTransform: 'uppercase',
    },
    dropdownBurgerMenu: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        padding: '0 0 15px 20px',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(242,242,242,0.1)',
        borderTopStyle: 'solid',
    },
    dropdownBurgerLink: {
        fontSize: 26,
        zIndex: 999,
        textDecoration: 'none',
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        '@media(max-width: 992px)': {
            fontSize: 26,
            // padding: 25
        },
        '@media(max-width: 576px)': {
            fontSize: 24,
            // padding: 5
        },
    },
    dropdownBurgerText: {
        color: '#5E6972',
        fontWeight: 800,
        transition: '0.3s',
        ':hover': {
            color: '#C1C1C1',
        },
    },
    blur: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 124,
        backgroundColor: '#070707',
        filter: 'blur(40px)',
    },
    languageMenu: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        top: 60,
        width: 239,
        backgroundColor: 'rgba(4, 4, 4, 0.5)',
        backdropFilter: 'blur(20px)',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        padding: '0 0 10px 12px',
    },
    languageMenuText: {
        fontFamily: 'Bergen Sans',
        fontSize: 12,
        color: '#A7A7A7',
        fontWeight: 'normal',
        marginTop: 10,
        cursor: 'pointer',
        transition: '0.3s',
        ':hover': {
            color: 'white',
        },
    },
    burgerLanguage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 20px',
        marginTop: 50,
    },
    burgerLanguageTitle: {
        color: '#A7A7A7',
        fontWeight: 800,
        fontSize: 18,
        marginBottom: 12,
        cursor: 'pointer',
        transition: '0.3s',
        ':hover': {
            color: 'white',
        },
        '@media(max-width: 992px)': {
            fontSize: 30
        },
        '@media(max-width: 576px)': {
            fontSize: 18
        },
    },
})
