import styles from './styles/Roadmap.module.scss'
import React from "react";
import Title from "./common/Title";
import {css} from "aphrodite";

const Roadmap = () => {
    return (
        <div className={styles.roadmap}>
            <Title>Roadmap</Title>
            <div className={styles.grid}>
                <div className={styles.block}>
                    <span className={styles.roadmapContentTitle}>Stage 1 <br /> (Q2 2022)</span>
                    <span className={styles.roadmapContentDescr}>Creation of social networks </span>
                    <span className={styles.roadmapContentDescr}>Creation of the game's website</span>
                </div>
                <div></div>
                <div></div>
                <div className={styles.block}>
                    <span className={styles.roadmapContentTitle}>Stage 2 <br /> (Q3 2022)</span>
                    <span className={styles.roadmapContentDescr}>Marketplace launch on Near Testnet</span>
                    <span className={styles.roadmapContentDescr}>Project MVP development on the Near test network</span>
                    <span className={styles.roadmapContentDescr}>Searching for investments on Private round</span>
                    <span className={styles.roadmapContentDescr}>Launching the beta version of the game on Near testnet</span>
                    <span className={styles.roadmapContentDescr}>Selling NFT WhiteLis</span>
                </div>
                <div className={styles.block}>
                    <span className={styles.roadmapContentTitle}>Stage 3 <br /> (Q4 2022)</span>
                    <span className={styles.roadmapContentDescr}>Marketplace release on the main network</span>
                    <span className={styles.roadmapContentDescr}>Closing token sales rounds</span>
                    <span className={styles.roadmapContentDescr}>First release of custom NFT sales</span>
                    <span className={styles.roadmapContentDescr}>Releasing the game on PC</span>
                </div>
                <div></div>
                <div></div>
                <div className={styles.block}>
                    <span className={styles.roadmapContentTitle}>Stage 4 <br /> (Q1 2023)</span>
                    <span className={styles.roadmapContentDescr}>Game release on MacBooks and smartphones</span>
                    <span className={styles.roadmapContentDescr}>Working on updates and new caste NFTs</span>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
