import { useContext, createContext, useState } from "react"

type CalendarContextType = {
  arrivalDate: string
  setArrivalDate: React.Dispatch<React.SetStateAction<string>>
  departureDate: string
  setDepartureDate: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<CalendarContextType | null>(null)

type Props = { children: React.ReactNode } 

export const CalendarContext = ({children}: Props) => { 
  const [arrivalDate, setArrivalDate] = useState<string | null>(null)
  const [departureDate, setDepartureDate] = useState<string | null>(null)

  return(
    <Context.Provider value={{ arrivalDate, setArrivalDate, departureDate, setDepartureDate }}>
      {children}
    </Context.Provider>
  )
}

export const useCalendarContext = () => {
  const calendarContext = useContext(Context)

  if (!calendarContext) throw new Error('You need to use this hook inside a context provider');

  return calendarContext;
}