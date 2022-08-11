import React, { useState, useEffect } from "react";
import { Text, Box, Tooltip } from "@chakra-ui/react";
import MainBlock2StatsText from "../MainBlock2StatsText";

const calculateTimeLeft = (time) => {
  const difference = +new Date(time) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

const MainBlock4CountdownTimer = (props) => {
  const { timeUNIX } = props;
  var timeleft = calculateTimeLeft(timeUNIX * 1000);

  //   console.log(timeleft);

  const [day, setDay] = useState(timeleft.days);
  const [hour, setHour] = useState(timeleft.hours);
  const [minutes, setMinutes] = useState(timeleft.minutes);
  const [seconds, setSeconds] = useState(timeleft.seconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hour > 0) {
            setHour(hour - 1);
            setMinutes(59);
          } else {
            if (day > 0) {
              setDay(day - 1);
              setHour(24);
            } else {
              clearInterval(myInterval);
            }
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <>
      <Text color="white">
        {day === 0 && hour === 0 && minutes === 0 && seconds === 0 ? (
          <MainBlock2StatsText
            title="Remaining days left for swap conclusion"
            value="Nan"
          />
        ) : (
          <>
            <Box flex={1}>
              <Text variant="title">
                Remaining days left for swap conclusion
              </Text>
              <Tooltip
                label={
                  <Text as="sup" variant={"positiveGrowth"} fontSize="6">
                    DAYS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    HOURS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    MINUTES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECONDS
                  </Text>
                }
                placement="bottom"
                bg="transparent"
                mt={"-15px"}
                isOpen
              >
                <Text variant="value">{`${
                  day < 10 ? `0${day}` : day
                }:${hour < 10 ? `0${hour}` : hour}:${
                  minutes < 10 ? `0${minutes}` : minutes
                }:${seconds < 10 ? `0${seconds}` : seconds}`}</Text>
              </Tooltip>
            </Box>
          </>
        )}
      </Text>
    </>
  );
};

export default MainBlock4CountdownTimer;
