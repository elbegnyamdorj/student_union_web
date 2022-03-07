import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css"; // import styles

const Calendar = ({ data }) => {
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
      timeFormat={"24"}
      weekDayStart={"Monday"}
      calendarIDsHidden={["work"]}
      language={"en"}
    />
  );
};

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
  );
}
