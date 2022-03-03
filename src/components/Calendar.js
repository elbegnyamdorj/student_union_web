import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css"; // import styles

const Calendar = ({ data }) => {
  const { edges: events } = data.allJsonFiles;
  var event = [];
  events.forEach((el) => {
    event.push(el.node);
  });

  console.log(event);
  const onEventClick = (e) => {
    console.log(e);
  };
  //    const events = [
  //     {
  //       id: 1,
  //       startAt: "2022-02-27T18:00:00.000Z",
  //       endAt: "2021-02-27T19:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "Тасартлаа ууна",
  //       color: "blue",
  //       calendarID: "work",
  //       url: "saa",
  //     },
  //     {
  //       id: 2,
  //       startAt: "2022-02-27T11:00:00.000Z",
  //       endAt: "2021-02-27T12:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "Тасартлаа уухуу",
  //       color: "blue",
  //       calendarID: "work",
  //       url: "saa",
  //     },
  //     {
  //       id: 3,
  //       startAt: "2022-02-26T18:00:00.000Z",
  //       endAt: "2022-02-26T19:00:00.000Z",
  //       timezoneStartAt: "Europe/Berlin", // optional
  //       summary: "Цөм шоудана",
  //       color: "blue",
  //       url: "saa",
  //     },
  //   ];
  if (typeof document !== "undefined") {
    return (
      <Kalend
        onEventClick={onEventClick}
        // onNewEventClick={onNewEventClick}
        events={event}
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
  } else {
    return null;
  }
};

export default function Events() {
  return (
    <StaticQuery
      query={graphql`
        query AllEvents {
          allJsonFiles {
            edges {
              node {
                jsonId
                calendarID
                color
                endAt
                id
                startAt
                summary
                timezoneStartAt
                url
              }
            }
          }
        }
      `}
      render={(data, count) => <Calendar data={data} />}
    />
  );
}
