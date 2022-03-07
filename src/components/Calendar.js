import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Kalend, { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css' // import styles

const Calendar = ({ data }) => {
<<<<<<< HEAD
  console.log(data);
  const onEventClick = (e) => {
    console.log(e);
  };
  const events = [
    {
      id: 1,
      startAt: "2022-02-27T18:00:00.000Z",
      endAt: "2021-02-27T19:00:00.000Z",
      timezoneStartAt: "Europe/Berlin", // optional
      summary: "Тасартлаа ууна",
      color: "blue",
      calendarID: "work",
      url: "saa",
    },
  ];
=======
  const { edges: events } = data.allJsonFiles
  var event = []
  events.forEach((el) => {
    event.push(el.node)
  })

  console.log(event)
  const onEventClick = (e) => {
    console.log(e)
  }
  //    const events = [
  //     {
  //       id: 1,
  //       startAt: "2022-02-27T18:00:00.000Z",
  //       endAt: "2021-02-27T19:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "бцйб",
  //       color: "blue",
  //       calendarID: "work",
  //       url: "saa",
  //     },
  //     {
  //       id: 2,
  //       startAt: "2022-02-27T11:00:00.000Z",
  //       endAt: "2021-02-27T12:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "өйуөй",
  //       color: "blue",
  //       calendarID: "work",
  //       url: "saa",
  //     },
  //     {
  //       id: 3,
  //       startAt: "2022-02-26T18:00:00.000Z",
  //       endAt: "2022-02-26T19:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "bbbdb",
  //       color: "blue",
  //       url: "saa",
  //     },
  //   ];
>>>>>>> 45bee6c06f3fd95722771f827a79384278aa4cbc
  return (
    <Kalend
      onEventClick={onEventClick}
      // onNewEventClick={onNewEventClick}
      events={events}
      initialDate={new Date().toISOString()}
      hourHeight={60}
      initialView={CalendarView.MONTH}
      //   disabledViews={[CalendarView.DAY]}
      // onSelectView={onSelectView}
      // selectedView={selectedView}
      // onPageChange={onPageChange}
      timeFormat={'24'}
      weekDayStart={'Monday'}
      calendarIDsHidden={['work']}
      language={'en'}
    />
  )
}

export default function Events() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuerys {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Calendar data={data} />}
    />
  )
}
