import {css, StyleSheet} from "aphrodite";

const Title = ({ children }) => {
    return (
        <span className={css(styles.title)}>{children}</span>
    )
}

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: '#FFF',
        fontSize: 100,
        wordSpacing: '0.3em',
        fontWeight: 'normal',
        fontFamily: 'Do Hyeon',
        '@media(max-width: 992px)': {
            fontSize: 80,
        },
        '@media(max-width: 576px)': {
            fontSize: 40,
            justifyContent: 'flex-start',
            textAlign: 'left',
            marginLeft: 15,
        },
    }
})

export default Title
