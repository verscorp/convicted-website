import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import headerBackground from '../static/img/background.png'
import smokeLeft from '../static/img/smokeLeft.svg'
import smokeRight from '../static/img/smokeRight.svg'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import economics from '../static/img/economic_svg.svg'
import economicsTab from '../static/img/economicsTab.png'
import economicsMobile from '../static/img/economicSvgMob.svg'
import fights from '../static/icons/fist.png'
import prison from '../static/icons/prison.png'
import kitchen from '../static/icons/kitchen.png'
import bag from '../static/icons/bag.png'
import tattoo from '../static/icons/tattoo.png'
import stashes from '../static/icons/stashes.png'
import nftItems from '../static/img/nftitems.png'
import nftItemsMob from '../static/img/nftMobile.png'
import power from '../static/icons/power.png'
import keys from '../static/icons/keys.png'
import Footer from '../components/Footer'
import LatestNews from '../components/LatestNews'
import useWidth from "../hooks/useWidth";
import Roadmap from "../components/Roadmap";
import Title from "../components/common/Title";

export default function Home() {
    const {width} = useWidth()

    const getSchema = () => {
        if (width < 576) return economicsMobile
        else if (width < 1024) return economicsTab
        else return economics
    }

    const getNft = () => {
        if (width < 576) return nftItemsMob
        else return nftItems
    }

    // console.log(Keys)

    return (
        <div>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Header back={headerBackground} imageFull />
            </div>

            <LatestNews withHeader size={3} />

            <div className={css(styles.smoke)}>
                <div style={{ maxWidth: 1357 }}>
                    <img style={{ width: '100%' }} src={smokeLeft} alt="" />
                </div>
                <div style={{ maxWidth: 1357 }}>
                    <img style={{ width: '100%' }} src={smokeRight} alt="" />
                </div>
            </div>

            <Container>
                <div className={css(styles.about)}>
                    <Title>About the game</Title>
                    <span className={css(styles.aboutDescr)}>
                        You go to prison as an ordinary kid. In order to survive in these difficult conditions, you have to fight for the right to life. Fight with other prisoners and if you win you get a well-deserved reward - a cigarette. If you are strong in cooking, go to the kitchen and cook food. Start your journey of roofing business, conquering one prison after another.
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        But not all victories are easy, some bosses can't be defeated alone. You'll have to assemble your own team or join someone else's team to kill the most powerful boss. Do not miss the opportunity to keep your physical form at an appropriate level. A convict without a tattoo is not a convict. So put a tattoo on your body - they will increase your credibility among the prisoners.
                    </span>
                    <div className={css(styles.aboutButtons)}>
                        <Link to="whitepaper" style={{ textDecoration: 'none' }}>
                            <Button text="WHITEPAPER" className={css(styles.aboutBtn)} isAbout />
                        </Link>

                        <Link to="whitepaper" style={{ textDecoration: 'none', marginLeft: 20 }}>
                            <Button text="PITCHDECK" className={css(styles.aboutBtn)} isAbout />
                        </Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className={css(styles.nft)}>
                    <Title>NFT items</Title>
                    <span className={css(styles.aboutDescr)}>
                        To mine tokens, you will need to purchase one or several NFTs. They are of 3 types: “Weapon”, “Crime”, ”Chef’s Certificate”.
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        Each type of NFT produces its own specific resource: Weapon - Cigarettes (CCIG), Chef’s Certificate - Food (CFOD) Crime - Rubl (CRUB)
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        In our NFT game, this is like a pass to the game. Although he has basic production parameters, which play a large role, but ultimately the player can develop through active play and get more. In general, we encourage old and active players.
                    </span>
                    <div style={{ maxWidth: 1070, height: width < 576 && 250, margin: 'auto' }}>
                        <img src={getNft()} alt="" style={{ width: '100%', marginTop: width < 576 && -100 }} />
                    </div>
                </div>
            </Container>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: '100%', marginTop: 120 }}>
                <div style={{ maxWidth: 1357, height: 'auto' }}>
                    <img style={{ width: '100%' }} src={smokeLeft} alt="" />
                </div>
                <div style={{ maxWidth: 1357, height: 'auto' }}>
                    <img style={{ width: '100%' }} src={smokeRight} alt="" />
                </div>
            </div>
            <Container>
                <div className={css(styles.economics)}>
                    <Title>Game economics</Title>
                    <span className={css(styles.aboutDescr)}>
                        There are three economic currencies in the game: "Rubl", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level".
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        All these parameters will interact with each other and create an economic balance. Each currency will be tied to a specific token: Ruble, Cigarettes and Food corresponds to tokens: $CRUB (Rubl), $CCIG (Cigarettes), $CFOD (Food).
                    </span>
                    <span className={css(styles.aboutDescr)}>
                        Thus, you can not only mine the game currency you need using NFT, but also buy from the market.
                    </span>
                    <div style={{ maxWidth: 942, height: 'auto', margin: 'auto', marginTop: 60, padding: '0 30px', marginBottom: '5em' }}>
                        <img src={getSchema()} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
            </Container>
            <Container>
                <div className={css(styles.features)}>
                    <Title>Features available</Title>
                    <div className={css(styles.featuresContent)}>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={fights} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>fights</span>
                            <span className={css(styles.featuresDescr)}>Make single or massive attacks against prison bosses.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={prison} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>prison</span>
                            <span className={css(styles.featuresDescr)}>Go through prisons one by one and take over the prison business.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={stashes} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>stashes</span>
                            <span className={css(styles.featuresDescr)}>Collect various stashes and trade their collections for resources.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={power} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>power</span>
                            <span className={css(styles.featuresDescr)}>Upgrade your power to increase your damage on various raids.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={kitchen} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>kitchen</span>
                            <span className={css(styles.featuresDescr)}>If you are a good cook, then send to the kitchen to get “Food”.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                {/*<Bag />*/}
                                <img src={bag} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>bag</span>
                            <span className={css(styles.featuresDescr)}>Improve the items in your bag at the expense of “Level” and “Authority”.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={tattoo} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>tattoo</span>
                            <span className={css(styles.featuresDescr)}>Get tattoos to gain the "Authority" in the prison and pump your character.</span>
                        </div>
                        <div className={css(styles.featuresContentItem)}>
                            <div style={{ maxWidth: 200, height: 'auto' }}>
                                <img src={keys} alt="" style={{ width: '100%' }} />
                            </div>
                            <span className={css(styles.featuresTitle)}>keys</span>
                            <span className={css(styles.featuresDescr)}>Collect keys from prison bosses to start mining more.</span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <Roadmap />
            </Container>
            <div>
                {/*<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: '100%' }}>*/}
                {/*    <div style={{ maxWidth: 1357, height: 'auto' }}>*/}
                {/*        <img style={{ width: '100%' }} src={smokeLeft} alt="" />*/}
                {/*    </div>*/}
                {/*    <div style={{ maxWidth: 1357, height: 'auto' }}>*/}
                {/*        <img style={{ width: '100%' }} src={smokeRight} alt="" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Footer />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '17px 33px 0 26px',
        backgroundSize: 'cover',
        justifyContent: 'center',
        '@media(max-width: 1200px)': {
            padding: '15px 15px 0 15px',
        },
    },
    about: {
        marginTop: 275,
        position: 'relative',
        '@media(max-width: 992px)': {
            marginTop: 100,
        },
    },
    smoke: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        marginTop: 100,
        '@media(max-width: 576px)': {
            marginTop: 40
        },
    },
    aboutDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '20px 17px 0 15px',
        },
        '@media(max-width: 992px)': {
            fontSize: 30,
        },
        '@media(max-width: 576px)': {
            fontSize: 18,
            textAlign: 'left',
        },
    },
    aboutButtons: {
        width: 350,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 70,
        fontWeight: 400,
        padding: '0 10px',
        '@media(max-width: 576px)': {
            marginTop: 30,
            width: 200,
        },
    },
    nft: {
        marginTop: 275,
        '@media(max-width: 992px)': {
            marginTop: 150,
        },
    },
    nftDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '35px 30px 0 30px',
        },
        '@media(max-width: 992px)': {
            fontSize: 30,
        },
        '@media(max-width: 576px)': {
            fontSize: 18,
            textAlign: 'left',
        },
    },
    economics: {
        position: 'relative',
        marginTop: 220,
        '@media(max-width: 992px)': {
            marginTop: 100,
        },

    },
    economicsDescr: {
        fontFamily: 'BenchNine',
        fontSize: 35,
        color: '#9F9F9F',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 'normal',
        '@media (max-width: 1200px)': {
            margin: '35px 30px 0 30px',
        },
        '@media(max-width: 992px)': {
            fontSize: 30,
        },
        '@media(max-width: 576px)': {
            fontSize: 18,
            textAlign: 'left',
        },
    },
    features: {
        width: '100%',
        marginTop: 180,
        '@media(max-width: 576px)': {
            marginTop: 100
        },
    },
    featuresContent: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '1.5em',
        rowGap: '3.5em',
        marginTop: 30,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media(max-width: 1100px)': {
            columnGap: '0.3em',
            rowGap: '1.4em',
            width: '96%',
            marginLeft: '2%',
        },
        '@media(max-width: 576px)': {
            width: '94%',
            marginLeft: '3%',
            justifyContent: 'center',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '0.3em',
            rowGap: '0.7em',
        },

    },
    featuresContentItem: {
        display: 'flex',
        // maxWidth: '21%',
        width: '100%',
        border: 1,
        borderStyle: 'solid',
        borderColor: '#292929',
        borderRadius: '0.5em',
        padding: '30px 13px',
        boxSizing: 'border-box',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        '@media(max-width: 1024px)': {
            // width: 228,
            padding: '25px 18px 15px 18px',
        },
        '@media(max-width: 768px)': {
            // width: '17%',
            // padding: '10px 15px',
        },
        '@media(max-width: 576px)': {
            padding: '13px 2px 5px 4px',
        },
    },
    featuresTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 26,
        textTransform: 'uppercase',
        marginTop: 14,
        '@media(max-width: 992px)': {
            fontSize: 18,
        },
    },
    featuresDescr: {
        fontWeight: 'normal',
        color: '#A7A7A7',
        fontSize: 23,
        marginTop: 10,
        '@media(max-width: 992px)': {
            fontSize: 16,
        },
        '@media(max-width: 576px)': {
            fontSize: 14,
        },
    },
    roadmap: {
        marginTop: 100,
        padding: '0 30px',
    },
    roadmapContent: {
        width: '100%',
        display: 'flex',
        marginTop: 40,
        flexDirection: 'column',
        '@media(max-width: 820px)': {
            flexDirection: 'column',
        },
        '@media(max-width: 768px)': {
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    roadmapContentItem: {
        width: '50%',
        borderTopWidth: 1,
        borderTopColor: '#A7A7A7',
        borderTopStyle: 'dashed',
        '@media(max-width: 768px)': {
            padding: '20px 0 30px 0',
            width: '100%',
        },
        ':before': {
            content: "",
            position: 'absolute',
            border: '10px dashed #FF0000',
            top: '-8px',
            bottom: '-8px',
            left: '-8px',
            right: '-8px',
        },
        ':nth-child(1)': {
            borderRightWidth: 1,
            borderRightStyle: 'dashed',
            borderRightColor: '#A7A7A7',
            '@media(max-width: 768px)': {
                borderRightWidth: 0,
                borderLeftWidth: 1,
                borderLeftStyle: 'dashed',
                borderLeftColor: '#A7A7A7',
            },
        },
        ':nth-child(2n)': {
            marginTop: 250,
            '@media(max-width: 768px)': {
                marginTop: 0,
                borderLeftWidth: 1,
                borderLeftStyle: 'dashed',
                borderLeftColor: '#A7A7A7',
            },
        },
    },
    roadmapContentTitle: {
        fontFamily: 'Do Hyeon',
        fontWeight: 'normal',
        fontSize: 30,
        '@media(max-width: 576px)': {
            fontSize: 18
        },
    },
    roadmapContentDescr: {
        color: '#A7A7A7',
        fontSize: 22,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'normal',
        ':before': {
          content: `'\\2013'`,
            marginRight: 5
        },
        '@media(max-width: 576px)': {
            fontSize: 16
        },
    },
    roadmapContentItemFirst: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 65,
        marginLeft: 55,
        '@media(max-width: 1200px)': {
            marginLeft: 32,
        },
        '@media(max-width: 820px)': {
            marginLeft: 10,
        },
        '@media(max-width: 768px)': {
            marginTop: 0,
            marginLeft: 20,
        },
    },
    roadmapContentItemSecond: {
        display: 'flex',
        height: 450,
        flexDirection: 'column',
        marginTop: 40,
        marginLeft: 220,
        '@media(max-width: 1200px)': {
            marginLeft: 110,
        },
        '@media(max-width: 992px)': {
            marginLeft: 50,
        },
        '@media(max-width: 820px)': {
            height: 300,
        },
        '@media(max-width: 768px)': {
            marginTop: 0,
            marginLeft: 20,
            height: 'auto',
        },
    },
    roadmapContentItemThird: {
        maxWidth: 386,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 40,
        marginLeft: 55,
        '@media(max-width: 820px)': {
            marginLeft: 10,
            maxWidth: 320,
            height: 280,
        },
        '@media(max-width: 768px)': {
            width: '100%',
            marginTop: 0,
            height: 'auto',
            marginLeft: 20,
        },
        '@media(max-width: 375px)': {
            width: 294,
        },
    },
    aboutBtn: {
        textDecoration: 'none',
        fontSize: 34,
        border: 4,
        borderStyle: 'solid',
        borderColor: '#A7A7A7B2',
        height: 66,
        width: 343,
        fontWeight: 400,
        ':hover': {
            borderColor: '#ea6f2a',
        },
        ':nth-child(2n)': {
            marginLeft: 20,
        },
        '@media(max-width: 768px)': {
            width: 280,
        },
        '@media(max-width: 576px)': {
            width: 200,
            height: 38,
            fontSize: 18,
            border: 2,
            borderStyle: 'solid',
            borderColor: '#A7A7A7B2',
        },
        '@media(max-width: 450px)': {
            width: 163,
        },
    },
    roadmapContentItemBottom: {
        width: '50%',
        borderTopWidth: 1,
        borderTopColor: '#A7A7A7',
        borderTopStyle: 'dashed',
        borderRightWidth: 1,
        borderRightStyle: 'dashed',
        borderRightColor: '#A7A7A7',
        '@media(max-width: 768px)': {
            width: '100%',
            maxWidth: 351,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
            borderRightWidth: 0,
            borderLeftWidth: 1,
            borderLeftStyle: 'dashed',
            borderLeftColor: '#A7A7A7',
            padding: '20px 0 30px 0',
        },
    },
    roadmapFlex: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        '@media(max-width: 768px)': {
            justifyContent: 'center',
            flexDirection: 'column',
        },
    },
})
