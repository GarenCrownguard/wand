import React, { useState, useEffect } from 'react'
import { Text, Box } from '@chakra-ui/react'

const MainBlock4CountdownTimer = (props) => {
  const { title, timeleft } = props
  const [day, setDay] = useState(timeleft.days)
  const [hour, setHour] = useState(timeleft.hours)
  const [minutes, setMinutes] = useState(timeleft.minutes)
  const [seconds, setSeconds] = useState(timeleft.seconds)

  useEffect(() => {
    setDay(timeleft.days)
    setHour(timeleft.hours)
    setMinutes(timeleft.minutes)
    setSeconds(timeleft.seconds)
  }, [timeleft])

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          if (hour > 0) {
            setHour(hour - 1)
            setMinutes(59)
          } else {
            if (day > 0) {
              setDay(day - 1)
              setHour(24)
            } else {
              clearInterval(myInterval)
            }
          }
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <Box flex={1} mb="10px" textAlign="center">
      <Text variant="title">{title}</Text>
      <Text as="span" variant="value">
        {`${day < 10 ? `0${day}` : day}:${hour < 10 ? `0${hour}` : hour}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`}
        <Box mt="-15px">
          <Text as="sup" fontSize="6" fontWeight={700} opacity={0.8} ml={'5px'}>
            DAYS
          </Text>
          <Text
            as="sup"
            fontSize="6"
            fontWeight={700}
            opacity={0.8}
            ml={'18px'}
          >
            HOURS
          </Text>
          <Text
            as="sup"
            fontSize="6"
            fontWeight={700}
            opacity={0.8}
            ml={'10px'}
          >
            MINUTES
          </Text>
          <Text
            as="sup"
            fontSize="6"
            fontWeight={700}
            opacity={0.8}
            ml={'10px'}
          >
            SECONDS
          </Text>
        </Box>
      </Text>
    </Box>
  )
}

export default MainBlock4CountdownTimer
