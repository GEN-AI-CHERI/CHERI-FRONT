import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import styled from "styled-components";
import calendar from "../../assets/period/calendar.png";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container>
      <Row>
        <DatePickerWrapper>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            locale={enUS}
          />
        </DatePickerWrapper>
        <DatePickerWrapper>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy.MM.dd"
            locale={enUS}
          />
        </DatePickerWrapper>
      </Row>
      <CalendarBg src={calendar} />
    </Container>
  );
};

const CalendarBg = styled.img`
  width: 25rem;
  position: absolute;
  z-index: -1;
  margin-left: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const Row = styled.div`
  display: flex;
  margin-top: 2.5rem;
`;

const DatePickerWrapper = styled.div`
  input {
    width: 7rem;
    border: none;
    font-size: 1.2rem;
    outline: none;
    margin-left: 1.4rem;
  }
`;

export default Calendar;
