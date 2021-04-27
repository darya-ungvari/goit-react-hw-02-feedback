import s from './Section.module.css'

const Section = (props) => {
    return(
        <div className={s.section}>{props.children}</div>
    )
}

export default Section;