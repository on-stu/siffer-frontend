import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EachDate = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.selected && "color: black; background-color: #E5E5E5;"}
  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: grid;
  grid-gap: 1px;
  background-color: black;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid black;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Calendar() {
  const [calendarObj, setCalendarObj] = useState();
  const [selectedDate, setSelectedDate] = useState();
  let nowDate;
  const calendarMaker = (date) => {
    if (!date) {
      date = new Date();
    }
    nowDate = date;
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth();

    const thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    const thisLastDay = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() + 1,
      0
    );

    let count = 0;
    let output = [];
    let rests = [];
    let restToggle = false;

    let i;
    for (i = 0; i < thisMonth.getDay(); i++) {
      output.push(0);
      count++;
    }

    for (i = 1; i <= thisLastDay.getDate(); i++) {
      if (count % 7 === 0) {
        output.push("/");
      }
      const day = new Date(year, month, i);
      output.push({ day });
      count++;
    }

    for (i = 0; i < output.length; i++) {
      if (restToggle) {
        rests.push(output[i]);
        if (output[i] === "/") {
          if (rests.length === 8) {
            rests = [];
          }
          restToggle = !restToggle;
        }
      }
      if (output[i] === "/") {
        restToggle = !restToggle;
      }
    }
    for (i = 0; i < 7 - rests.length; i++) {
      output.push(0);
    }

    return { year, month, output };
  };

  useEffect(() => {
    setCalendarObj(calendarMaker());
  }, []);

  const returnString = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };
  return (
    <>
      <Top>
        <span>
          {calendarObj?.year}.{returnString(calendarObj?.month + 1)}
        </span>
        <span>
          <h2></h2>
        </span>
        <span>
          <button
            onClick={() => {
              const newDate = new Date(calendarObj.year, calendarObj.month - 1);
              setCalendarObj(calendarMaker(newDate));
            }}
          >
            {`<`}
          </button>
          <button
            onClick={() => {
              const newDate = new Date(calendarObj.year, calendarObj.month + 1);
              setCalendarObj(calendarMaker(newDate));
            }}
          >
            {`>`}
          </button>
        </span>
      </Top>
      <Container>
        {calendarObj &&
          calendarObj.output.map((item, i) => {
            if (item !== "/" && item !== 0) {
              return (
                <EachDate
                  key={item.day.getDate()}
                  onClick={() => setSelectedDate(item.day.getDate())}
                  selected={selectedDate === item.day.getDate() ? true : false}
                >
                  {item.day.getDate()}
                </EachDate>
              );
            } else if (item === 0) {
              return <EachDate key={Math.random()}></EachDate>;
            }
          })}
      </Container>
    </>
  );
}

export default Calendar;
