import styles from './Footer.module.css'

export default function Links(props) {
    return (
        <>
            <strong>{props.section}:</strong>&nbsp;&nbsp;&nbsp;
            <a href={"https://" + props.domain + "/classic/mainclass?fl=true&tabID=7&studioid=-1147483363"} target="_blank">
                Classes
            </a>&nbsp;&nbsp;&nbsp;
            <a href={"https://" + props.domain + "/asp/main_enroll.asp?fl=true&tabID=8&studioid=-1147483363"}  target="_blank">
                Workshops
            </a>&nbsp;&nbsp;&nbsp;
            <a href={"https://" + props.domain + "/asp/main_appts.asp?fl=true&tabID=9&studioid=-1147483363"} target="_blank">
                Appointments
            </a>&nbsp;&nbsp;&nbsp;
            <a href={"https://" + props.domain + "/asp/main_shop.asp?fl=true&tabID=3&studioid=-1147483363"} target="_blank">
                Online Store
            </a>&nbsp;&nbsp;&nbsp;
            <a href={"https://" + props.domain + "/ASP/su1.asp?studioid=-1147483363"} target="_blank">
                My Info
            </a>&nbsp;&nbsp;&nbsp;
        </>
    )
}