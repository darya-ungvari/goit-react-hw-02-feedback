import s from './Section.module.css'

const Section = (props) => {
    return(
        <div className={s.section}>
            <h2>{props.title}</h2>
        {props.children}</div>
    )
}

export default Section;