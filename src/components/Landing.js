import React from "react";
import { Link } from "gatsby";
import styles from "./landing.module.css";

const SVGPath =
    "M22.08 44.53L15.68 32.04L10.08 32.04L10.08 44.53L3.05 44.53L3.05 10.41L15.73 10.41Q21.77 10.41 25.05 13.10Q28.34 15.80 28.34 20.72L28.34 20.72Q28.34 24.21 26.82 26.54Q25.31 28.88 22.24 30.26L22.24 30.26L29.63 44.20L29.63 44.53L22.08 44.53ZM10.08 16.10L10.08 26.34L15.75 26.34Q18.40 26.34 19.85 25.00Q21.30 23.65 21.30 21.28L21.30 21.28Q21.30 18.87 19.93 17.48Q18.56 16.10 15.73 16.10L15.73 16.10L10.08 16.10ZM37.99 19.17L42.70 34.95L47.39 19.17L54.66 19.17L44.46 48.47L43.90 49.80Q41.63 54.77 36.40 54.77L36.40 54.77Q34.92 54.77 33.40 54.33L33.40 54.33L33.40 49.20L34.43 49.22Q36.35 49.22 37.30 48.63Q38.25 48.05 38.79 46.69L38.79 46.69L39.59 44.60L30.70 19.17L37.99 19.17ZM78.52 44.53L71.67 44.53Q71.20 43.62 70.99 42.26L70.99 42.26Q68.53 45 64.59 45L64.59 45Q60.87 45 58.42 42.84Q55.97 40.69 55.97 37.41L55.97 37.41Q55.97 33.38 58.96 31.22Q61.95 29.06 67.59 29.04L67.59 29.04L70.71 29.04L70.71 27.59Q70.71 25.83 69.81 24.77Q68.91 23.72 66.96 23.72L66.96 23.72Q65.25 23.72 64.28 24.54Q63.30 25.36 63.30 26.79L63.30 26.79L56.53 26.79Q56.53 24.59 57.89 22.71Q59.25 20.84 61.73 19.77Q64.22 18.70 67.31 18.70L67.31 18.70Q72 18.70 74.75 21.06Q77.51 23.41 77.51 27.68L77.51 27.68L77.51 38.67Q77.53 42.28 78.52 44.13L78.52 44.13L78.52 44.53ZM66.07 39.82L66.07 39.82Q67.57 39.82 68.84 39.15Q70.10 38.48 70.71 37.36L70.71 37.36L70.71 33L68.18 33Q63.09 33 62.77 36.52L62.77 36.52L62.74 36.91Q62.74 38.18 63.63 39Q64.52 39.82 66.07 39.82ZM82.57 19.17L88.95 19.17L89.16 22.10Q91.88 18.70 96.45 18.70L96.45 18.70Q100.48 18.70 102.45 21.07Q104.41 23.44 104.46 28.15L104.46 28.15L104.46 44.53L97.69 44.53L97.69 28.31Q97.69 26.16 96.75 25.18Q95.81 24.21 93.63 24.21L93.63 24.21Q90.77 24.21 89.34 26.65L89.34 26.65L89.34 44.53L82.57 44.53L82.57 19.17ZM135.75 34.03L135.75 10.41L142.78 10.41L142.78 34.03Q142.78 37.29 141.34 39.79Q139.90 42.28 137.27 43.64Q134.65 45 131.34 45L131.34 45Q125.93 45 122.91 42.25Q119.88 39.49 119.88 34.45L119.88 34.45L126.96 34.45Q126.96 36.96 128.02 38.16Q129.07 39.35 131.34 39.35L131.34 39.35Q133.36 39.35 134.55 37.97Q135.75 36.59 135.75 34.03L135.75 34.03ZM163.73 44.53L163.55 41.95Q161.04 45 156.61 45L156.61 45Q152.53 45 150.39 42.66Q148.24 40.31 148.20 35.79L148.20 35.79L148.20 19.17L154.97 19.17L154.97 35.55Q154.97 39.52 158.58 39.52L158.58 39.52Q162.02 39.52 163.31 37.13L163.31 37.13L163.31 19.17L170.11 19.17L170.11 44.53L163.73 44.53ZM175.08 19.17L181.45 19.17L181.66 22.10Q184.38 18.70 188.95 18.70L188.95 18.70Q192.98 18.70 194.95 21.07Q196.92 23.44 196.97 28.15L196.97 28.15L196.97 44.53L190.20 44.53L190.20 28.31Q190.20 26.16 189.26 25.18Q188.32 24.21 186.14 24.21L186.14 24.21Q183.28 24.21 181.85 26.65L181.85 26.65L181.85 44.53L175.08 44.53L175.08 19.17ZM201.12 31.95L201.12 31.66Q201.12 25.83 203.89 22.27Q206.67 18.70 211.38 18.70L211.38 18.70Q215.55 18.70 217.88 21.56L217.88 21.56L218.16 19.17L224.30 19.17L224.30 43.69Q224.30 47.02 222.79 49.48Q221.27 51.94 218.53 53.23Q215.79 54.52 212.11 54.52L212.11 54.52Q209.32 54.52 206.67 53.40Q204.02 52.29 202.66 50.53L202.66 50.53L205.66 46.41Q208.20 49.24 211.80 49.24L211.80 49.24Q214.50 49.24 216 47.80Q217.50 46.36 217.50 43.71L217.50 43.71L217.50 42.35Q215.16 45 211.34 45L211.34 45Q206.77 45 203.94 41.43Q201.12 37.85 201.12 31.95L201.12 31.95ZM207.89 32.16L207.89 32.16Q207.89 35.60 209.27 37.56Q210.66 39.52 213.07 39.52L213.07 39.52Q216.16 39.52 217.50 37.20L217.50 37.20L217.50 26.53Q216.14 24.21 213.12 24.21L213.12 24.21Q210.68 24.21 209.29 26.20Q207.89 28.20 207.89 32.16Z";

class Landing extends React.Component {
    componentDidMount = () => {
        const anime = require("../../node_modules/animejs/lib/anime.js");
        console.log(anime);
        const svgPath = document.querySelectorAll(".path");
        console.log(svgPath);
        const svgText = anime({
            targets: svgPath,
            loop: false,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInCirc",
            duration: 5000,
        });
    };

    render() {
        return (
            <div className={styles.landingContainer}>
                <div className={styles.nav}>
                    {/* <Link to="/#projects" className={styles.button}>
                        Github
                    </Link>
                    <Link to="/blog/" className={styles.button}>
                        Blog
                    </Link>
                    <a href={"/resume.pdf"} className={styles.button}>
                        Resume
                    </a> */}
                </div>
                <div className={styles.welcome}>
                    <svg viewBox="0 0 230 70">
                        <defs>
                            <linearGradient
                                id="grad3"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    style={{
                                        stopColor: `#fc00ff`,
                                        stopOpacity: 1,
                                    }}
                                />
                                <stop
                                    offset="100%"
                                    style={{
                                        stopColor: `#00dbde`,
                                        stopOpacity: 1,
                                    }}
                                />
                            </linearGradient>
                            <clipPath id="websiteClip">
                                <path d={SVGPath} />
                            </clipPath>
                        </defs>

                        <path
                            className="path"
                            clipPath="url(#websiteClip)"
                            d={SVGPath}
                            fill="none"
                            stroke="url(#grad3)"
                            strokeWidth="1"
                        />
                    </svg>
                    <h1 className={styles.subtitle}>
                        Computer Science Student. Full Stack Web Developer.
                    </h1>
                    <h2 className={styles.subtitleLinks}>
                        <a href="#projects">Projects</a>
                        <span className={styles.seperator}>|</span>
                        <Link to="/blog">Blog</Link>
                        <span className={styles.seperator}>|</span>
                        <a href="#contact">Contact</a>
                        <span className={styles.seperator}>|</span>
                        <a href="/resume.pdf">Resume</a>
                    </h2>
                </div>
                <div>
                    <Link
                        to="/#projects"
                        className={styles.scrollDownContainer}
                    >
                        <p className={styles.scrollDownText}></p>
                        <p className={styles.arrow}>{"\u2b63"}</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Landing;
