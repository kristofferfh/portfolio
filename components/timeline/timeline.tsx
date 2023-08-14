"use client"
import data from "@/data/timeline.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "./timeline.module.css"

import SchoolIcon from '@mui/icons-material/School';
import DataObjectIcon from '@mui/icons-material/DataObject';

// https://stephane-monnot.github.io/react-vertical-timeline/

const TimelineCard = ({ obj }) => {
  const icon = obj.icon === "school" 
  ? <SchoolIcon /> 
  : obj.icon === "code"
  ? <DataObjectIcon/>
  : "ok"

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{background: "whitesmoke", color: "#000"}}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={obj.date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={icon}
    >
      <h2 className="vertical-timeline-element-title">{obj.title}</h2>
      {/* <h3 className="vertical-timeline-element-subtitle">{obj.location}</h3> */}
      <p>{obj.description}</p>
      <ul className={styles.timeline_ul}>
        {obj.list && obj.list.map((item)=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className={styles.tags}>
        {obj.tags && obj.tags.map((item)=>(
          <a key={item}>{item}</a>
        ))}
      </span>
    </VerticalTimelineElement>
  )
}


export const TimelineElement = () => {
  // VerticalTimelline has an issue with lineColor="", fix is:
  // Set this color in global.css with--line-color:""; in html{}
 return (
  <section className={styles.timeline}>
    <h1>My progress studying web development</h1>
    <VerticalTimeline lineColor="">
      {data.reverse().map((item)=>(
        <TimelineCard
          key={item.id} 
          obj={item}/>
      ))}
    </VerticalTimeline>  
  </section>
 )
}